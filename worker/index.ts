interface Env {
  NEXUS_DB: D1Database;
  ASSETS: Fetcher;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET,POST,OPTIONS",
      "access-control-allow-headers": "Content-Type",
    },
  });

function normalizePlan(value: string) {
  const raw = value.trim();
  if (!raw) return null;
  if (raw.toLowerCase().startsWith("pro")) return "pro";
  if (raw.toLowerCase().startsWith("business")) return "business";
  if (raw.includes("عادي") || raw.toLowerCase().startsWith("regular")) return "basic";
  return raw.slice(0, 120);
}

async function handleLead(request: Request, env: Env) {
  if (request.method === "OPTIONS") return json({}, 204);
  if (request.method !== "POST") return json({ ok: false, message: "Method not allowed" }, 405);

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const fullName = String(body.fullName ?? "").trim();
    const workEmail = String(body.workEmail ?? "").trim().toLowerCase();
    const organization = String(body.organization ?? "").trim();
    const message = String(body.message ?? "").trim();
    const selectedPlanRaw = String(body.selectedPlan ?? "").trim();
    const couponCode = String(body.couponCode ?? "").trim().toUpperCase();

    if (!fullName || fullName.length > 120)
      return json({ ok: false, message: "الاسم غير صحيح." }, 400);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail) || workEmail.length > 190)
      return json({ ok: false, message: "البريد الإلكتروني غير صحيح." }, 400);
    if (!organization || organization.length > 180)
      return json({ ok: false, message: "اسم الشركة غير صحيح." }, 400);
    if (message.length > 2000)
      return json({ ok: false, message: "الرسالة طويلة جدًا." }, 400);

    const selectedPlan = normalizePlan(selectedPlanRaw);
    let selectedPlanId: number | null = null;
    let finalPrice: number | null = null;

    if (selectedPlan) {
      const plan = await env.NEXUS_DB.prepare(
        "SELECT id, price FROM plans WHERE name = ? AND is_active = 1 LIMIT 1"
      ).bind(selectedPlan).first<{ id: number; price: number }>();

      if (plan) {
        selectedPlanId = plan.id;
        finalPrice = plan.price;
      }
    }

    let discountAmount = 0;
    if (couponCode && finalPrice !== null) {
      const coupon = await env.NEXUS_DB.prepare(
        `SELECT discount_type, discount_value, max_uses, used_count
         FROM coupons
         WHERE code = ? AND is_active = 1
         AND (expires_at IS NULL OR expires_at > CURRENT_TIMESTAMP)
         LIMIT 1`
      ).bind(couponCode).first<{
        discount_type: string;
        discount_value: number;
        max_uses: number | null;
        used_count: number;
      }>();

      if (coupon && (coupon.max_uses === null || coupon.used_count < coupon.max_uses)) {
        if (coupon.discount_type === "percentage") {
          discountAmount = Math.round(finalPrice * (coupon.discount_value / 100) * 100) / 100;
        } else {
          discountAmount = Math.min(finalPrice, coupon.discount_value);
        }
        finalPrice = Math.max(0, finalPrice - discountAmount);
      }
    }

    const result = await env.NEXUS_DB.prepare(
      `INSERT INTO leads
       (full_name, work_email, organization, message, selected_plan,
        selected_plan_id, coupon_code, discount_amount, final_price, status, source, user_agent)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'new', 'landing_page', ?)`
    ).bind(
      fullName,
      workEmail,
      organization,
      message || null,
      selectedPlan,
      selectedPlanId,
      couponCode || null,
      discountAmount,
      finalPrice,
      request.headers.get("user-agent") || null
    ).run();

    return json({ ok: true, id: result.meta.last_row_id });
  } catch (error) {
    console.error("Lead error", error);
    return json({ ok: false, message: "حدث خطأ أثناء حفظ الطلب. حاول مرة أخرى." }, 500);
  }
}

async function handleCoupon(request: Request, env: Env) {
  if (request.method === "OPTIONS") return json({}, 204);
  if (request.method !== "POST") return json({ valid: false, message: "Method not allowed" }, 405);

  try {
    const body = (await request.json()) as { code?: string };
    const code = String(body.code ?? "").trim().toUpperCase();

    if (!code || !/^[A-Z0-9_-]{3,20}$/.test(code))
      return json({ valid: false, message: "صيغة الكود غير صحيحة." }, 400);

    const row = await env.NEXUS_DB.prepare(
      `SELECT code, discount_type, discount_value, max_uses, used_count
       FROM coupons
       WHERE code = ? AND is_active = 1
       AND (expires_at IS NULL OR expires_at > CURRENT_TIMESTAMP)
       LIMIT 1`
    ).bind(code).first<{
      code: string;
      discount_type: string;
      discount_value: number;
      max_uses: number | null;
      used_count: number;
    }>();

    if (!row || (row.max_uses !== null && row.used_count >= row.max_uses)) {
      return json({ valid: false, message: "رمز الكوبون غير فعال حاليًا." });
    }

    const discountPercent = row.discount_type === "percentage" ? row.discount_value : null;
    const message = discountPercent !== null
      ? `تم تفعيل الكوبون (${row.code}) بنجاح! تم تطبيق خصم ${discountPercent}%.`
      : `تم تفعيل الكوبون (${row.code}) بنجاح!`;

    return json({ valid: true, code: row.code, discountPercent, message });
  } catch (error) {
    console.error("Coupon error", error);
    return json({ valid: false, message: "تعذر التحقق من الكوبون حاليًا." }, 500);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/leads") return handleLead(request, env);
    if (url.pathname === "/api/coupon") return handleCoupon(request, env);

    return env.ASSETS.fetch(request);
  },
};

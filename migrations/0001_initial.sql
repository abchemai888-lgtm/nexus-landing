PRAGMA foreign_keys = ON;
CREATE TABLE IF NOT EXISTS plans (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  price_egp INTEGER NOT NULL CHECK(price_egp >= 0),
  tagline_ar TEXT NOT NULL,
  active INTEGER NOT NULL DEFAULT 1 CHECK(active IN (0,1)),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS coupons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT NOT NULL UNIQUE,
  discount_percent INTEGER NOT NULL CHECK(discount_percent BETWEEN 0 AND 100),
  active INTEGER NOT NULL DEFAULT 1 CHECK(active IN (0,1)),
  expires_at TEXT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name TEXT NOT NULL,
  work_email TEXT NOT NULL,
  organization TEXT NOT NULL,
  message TEXT NULL,
  selected_plan TEXT NULL,
  coupon_code TEXT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(work_email);
INSERT OR IGNORE INTO plans (id,name,price_egp,tagline_ar) VALUES
('regular','عادي',300,'الخطة الأساسية لبدء تشغيل أعمالك على نظام NEXUS.'),
('pro','Pro',500,'المستوى الاحترافي للشركات والمؤسسات المتنامية.'),
('business','Business',1300,'بنية تشغيلية متقدمة للأعمال ذات المتطلبات الموسعة.');
INSERT OR IGNORE INTO coupons (code,discount_percent,active) VALUES ('000',20,1);

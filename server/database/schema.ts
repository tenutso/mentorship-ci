import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  int,
  tinyint,
  bigint,
  varchar,
  text,
  longtext,
  datetime,
  mediumtext,
  unique,
  date,
  decimal,
  index,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const achievements = mysqlTable("achievements", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").notNull(),
  menteeId: int("mentee_id").notNull(),
  title: varchar({ length: 255 }).notNull(),
  limit: varchar({ length: 255 }).notNull(),
  shortDetails: text("short_details").notNull(),
  image: varchar({ length: 255 }).default("NULL"),
  thumb: varchar({ length: 255 }).default("NULL"),
  date: varchar({ length: 255 }).notNull(),
});

export const assaignDays = mysqlTable("assaign_days", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").notNull(),
  sessionId: int("session_id").default(0).notNull(),
  day: int().notNull(),
  start: varchar({ length: 255 }).default("NULL"),
  end: varchar({ length: 255 }).default("NULL"),
});

export const assignTime = mysqlTable("assign_time", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").notNull(),
  sessionId: int("session_id").default(0).notNull(),
  dayId: int("day_id").notNull(),
  time: varchar({ length: 255 }).notNull(),
  start: varchar({ length: 255 }).notNull(),
  end: varchar({ length: 255 }).notNull(),
  personPerSlot: int("person_per_slot").default("NULL"),
});

export const blogs = mysqlTable("blogs", {
  id: int().autoincrement().notNull(),
  langId: varchar("lang_id", { length: 155 }).default("NULL"),
  businessId: varchar("business_id", { length: 155 }).default("NULL"),
  userId: int("user_id").notNull(),
  categoryId: int("category_id").notNull(),
  title: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull(),
  details: longtext().default("NULL"),
  image: varchar({ length: 255 }).default("NULL"),
  thumb: varchar({ length: 255 }).default("NULL"),
  tags: varchar({ length: 255 }).default("NULL"),
  metaTags: varchar("meta_tags", { length: 255 }).default("NULL"),
  metaDesc: varchar("meta_desc", { length: 255 }).default("NULL"),
  status: int().notNull(),
  totalViews: int("total_views").default("NULL"),
  createdAt: datetime("created_at", { mode: "string" }).notNull(),
});

export const blogCategory = mysqlTable("blog_category", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").notNull(),
  name: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull(),
  status: int().notNull(),
});

export const blogPosts = mysqlTable("blog_posts", {
  id: int().autoincrement().notNull(),
  title: varchar({ length: 255 }).default("NULL"),
  slug: varchar({ length: 255 }).default("NULL"),
  type: varchar({ length: 255 }).default("NULL"),
  details: text().default("NULL"),
  userId: int("user_id").default("NULL"),
  categoryId: int("category_id").default("NULL"),
  image: varchar({ length: 255 }).default("NULL"),
  thumb: varchar({ length: 255 }).default("NULL"),
  status: int().default("NULL"),
  hit: int().default("NULL"),
  isFeatured: int("is_featured").default("NULL"),
  createdAt: datetime("created_at", { mode: "string" }).default("NULL"),
});

export const brands = mysqlTable("brands", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").notNull(),
  name: varchar({ length: 255 }).default("NULL"),
  logo: varchar({ length: 255 }).notNull(),
  link: varchar({ length: 255 }).notNull(),
  status: int().notNull(),
});

export const business = mysqlTable("business", {
  id: int().autoincrement().notNull(),
  uid: varchar({ length: 255 }).notNull(),
  userId: int("user_id").notNull(),
  name: varchar({ length: 255 }).default("NULL"),
  slug: varchar({ length: 255 }).default("NULL"),
  details: text().default("NULL"),
  keywords: text().default("NULL"),
  description: text().default("NULL"),
  type: int().default(1).notNull(),
  title: varchar({ length: 255 }).default("NULL"),
  country: int().default("NULL"),
  address: mediumtext().default("NULL"),
  email: varchar({ length: 255 }).default("NULL"),
  phone: varchar({ length: 255 }).default("NULL"),
  category: varchar({ length: 255 }).default("NULL"),
  businessType: int("business_type").default("NULL"),
  logo: varchar({ length: 255 }).default("NULL"),
  image: text().default("NULL"),
  thumb: text().default("NULL"),
  breadcrumbBanner: varchar("breadcrumb_banner", { length: 255 }).default(
    "NULL"
  ),
  heroImg: varchar("hero_img", { length: 255 }).default("NULL"),
  status: int().default(0).notNull(),
  enableGallery: varchar("enable_gallery", { length: 255 }).default("'1'"),
  enableStaff: varchar("enable_staff", { length: 255 })
    .default("'1'")
    .notNull(),
  isPrimary: int("is_primary").default("NULL"),
  templateStyle: int("template_style").default(1).notNull(),
  currLocate: varchar("curr_locate", { length: 155 }).default("'0'"),
  numFormat: varchar("num_format", { length: 155 }).default("'0'"),
  color: varchar({ length: 255 }).default("'#546af1'").notNull(),
  facebook: varchar({ length: 255 }).default("NULL"),
  twitter: varchar({ length: 255 }).default("NULL"),
  instagram: varchar({ length: 255 }).default("NULL"),
  whatsapp: varchar({ length: 255 }).default("NULL"),
  qrCode: varchar("qr_code", { length: 255 }).default("NULL"),
  timeZone: int("time_zone").default(1),
  dateFormat: varchar("date_format", { length: 255 }).default("'d M Y'"),
  timeFormat: varchar("time_format", { length: 255 }).default("'hh'"),
  timeInterval: varchar("time_interval", { length: 255 }).default("'30'"),
  intervalType: varchar("interval_type", { length: 255 }).default("'minute'"),
  intervalSettings: varchar("interval_settings", { length: 155 }).default(
    "'2'"
  ),
  enableCategory: varchar("enable_category", { length: 155 }).default("'0'"),
  enableRating: varchar("enable_rating", { length: 155 }).default("'0'"),
  enableLocation: varchar("enable_location", { length: 155 }).default("'0'"),
  enableGroup: varchar("enable_group", { length: 155 }).default("'0'"),
  enableGuest: varchar("enable_guest", { length: 155 }).default("'0'"),
  totalPerson: varchar("total_person", { length: 155 }).default("'5'"),
  enablePayment: varchar("enable_payment", { length: 155 }).default("'1'"),
  enableOnsite: varchar("enable_onsite", { length: 155 }).default("'1'"),
  enableBlog: varchar("enable_blog", { length: 155 }).default("NULL"),
  enablePortfolio: varchar("enable_portfolio", { length: 155 }).default("NULL"),
  enableProduct: varchar("enable_product", { length: 155 }).default("NULL"),
  enableTeam: varchar("enable_team", { length: 155 }).default("NULL"),
  enableCounter: varchar("enable_counter", { length: 155 }).default("NULL"),
  enableCareer: varchar("enable_career", { length: 155 }).default("NULL"),
  enableService: varchar("enable_service", { length: 155 }).default("NULL"),
  enableEvent: varchar("enable_event", { length: 155 }).default("NULL"),
  enableQuote: varchar("enable_quote", { length: 155 }).default("NULL"),
  enableFaq: varchar("enable_faq", { length: 155 }).default("NULL"),
  enableTestimonial: varchar("enable_testimonial", { length: 155 }).default(
    "NULL"
  ),
  enableAppointment: varchar("enable_appointment", { length: 155 }).default(
    "NULL"
  ),
  holidays: longtext().default("NULL"),
  aboutTitle: varchar("about_title", { length: 255 }).default("NULL"),
  aboutDetails: text("about_details").default("NULL"),
  aboutVedioUrl: varchar("about_vedio_url", { length: 255 }).default("NULL"),
  homeStyle: varchar("home_style", { length: 155 }).default("NULL"),
  paginationLimit: varchar("pagination_limit", { length: 255 }).default("NULL"),
  createdAt: varchar("created_at", { length: 255 }).default("NULL"),
});

export const categories = mysqlTable("categories", {
  id: int().autoincrement().notNull(),
  icon: varchar({ length: 255 }).default("NULL"),
  name: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull(),
  details: text().default("NULL"),
  direction: text().default("NULL"),
  status: int().notNull(),
});

export const collections = mysqlTable("collections", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").notNull(),
  name: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull(),
  status: int().notNull(),
  createdAt: varchar("created_at", { length: 255 }).notNull(),
});

export const comments = mysqlTable("comments", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").default("NULL"),
  postId: int("post_id").default("NULL"),
  name: varchar({ length: 255 }).default("NULL"),
  email: varchar({ length: 255 }).default("NULL"),
  message: text().default("NULL"),
  createdAt: datetime("created_at", { mode: "string" }).notNull(),
});

export const contacts = mysqlTable("contacts", {
  id: int().autoincrement().notNull(),
  businessId: varchar("business_id", { length: 255 }).default("NULL"),
  name: varchar({ length: 255 }).default("NULL"),
  email: varchar({ length: 255 }).default("NULL"),
  message: text().default("NULL"),
  createdAt: datetime("created_at", { mode: "string" }).notNull(),
});

export const counters = mysqlTable("counters", {
  id: int().autoincrement().notNull(),
  langId: varchar("lang_id", { length: 155 }).default("NULL"),
  businessId: varchar("business_id", { length: 155 }).default("NULL"),
  userId: int("user_id").notNull(),
  icon: varchar({ length: 255 }).notNull(),
  number: varchar({ length: 255 }).notNull(),
  title: varchar({ length: 255 }).notNull(),
  text: text().notNull(),
  status: int().notNull(),
});

export const country = mysqlTable(
  "country",
  {
    id: int().autoincrement().notNull(),
    name: varchar({ length: 20 }).notNull(),
    code: varchar({ length: 2 }).notNull(),
    dialCode: varchar("dial_code", { length: 5 }).notNull(),
    currencyName: varchar("currency_name", { length: 20 }).notNull(),
    currencySymbol: varchar("currency_symbol", { length: 20 }).notNull(),
    currencyCode: varchar("currency_code", { length: 10 }).notNull(),
  },
  (table) => [unique("code").on(table.code)]
);

export const coupons = mysqlTable("coupons", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").notNull(),
  sessionId: int("session_id").notNull(),
  code: varchar({ length: 255 }).notNull(),
  discount: varchar({ length: 255 }).notNull(),
  startDate: varchar("start_date", { length: 255 }).default("NULL"),
  endDate: varchar("end_date", { length: 255 }).default("NULL"),
  oncePerMentee: int("once_per_mentee").default(0),
  usagesLimit: varchar("usages_limit", { length: 255 }).default("NULL"),
  used: int().default(0),
  status: int().default(1),
  createdAt: datetime("created_at", { mode: "string" }).notNull(),
});

export const couponApply = mysqlTable("coupon_apply", {
  id: int().autoincrement().notNull(),
  couponId: int("coupon_id").notNull(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  menteeId: int("mentee_id").notNull(),
  sessionId: int("session_id").notNull(),
  code: varchar({ length: 255 }).notNull(),
  discount: int().notNull(),
  // you can use { mode: 'date' }, if you want to have Date as type for this column
  createdAt: date("created_at", { mode: "string" }).notNull(),
});

export const dialingCodes = mysqlTable("dialing_codes", {
  id: int().autoincrement().notNull(),
  name: varchar({ length: 64 }).default("'").notNull(),
  isoCode: varchar("iso_code", { length: 2 }).notNull(),
  isdCode: varchar("isd_code", { length: 7 }).default("NULL"),
});

export const educations = mysqlTable("educations", {
  id: int().autoincrement().notNull(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  institute: varchar({ length: 255 }).notNull(),
  degree: varchar({ length: 255 }).notNull(),
  startYear: varchar("start_year", { length: 255 }).notNull(),
  endYear: varchar("end_year", { length: 255 }).default("NULL"),
  status: varchar({ length: 255 }).notNull(),
  createdAt: varchar("created_at", { length: 255 }).default("NULL"),
});

export const experiences = mysqlTable("experiences", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").notNull(),
  icon: varchar({ length: 255 }).notNull(),
  title: varchar({ length: 255 }).notNull(),
  company: varchar({ length: 255 }).default("NULL"),
  startDate: varchar("start_date", { length: 255 }).default("NULL"),
  endDate: varchar("end_date", { length: 255 }).default("NULL"),
  isPresent: varchar("is_present", { length: 255 }).default("'0'").notNull(),
  contribution: text().default("NULL"),
  status: varchar({ length: 255 }).notNull(),
  createdAt: varchar("created_at", { length: 255 }).default("NULL"),
});

export const faqs = mysqlTable("faqs", {
  id: int().autoincrement().notNull(),
  langId: varchar("lang_id", { length: 155 }).default("'1'").notNull(),
  businessId: varchar("business_id", { length: 255 }).default("NULL"),
  type: varchar({ length: 155 }).default("'admin'").notNull(),
  title: varchar({ length: 255 }).default("NULL"),
  details: mediumtext().default("NULL"),
});

export const favourite = mysqlTable("favourite", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").notNull(),
  favouriteId: int("favourite_id").notNull(),
  createdAt: varchar("created_at", { length: 255 }).notNull(),
});

export const features = mysqlTable("features", {
  id: int().autoincrement().notNull(),
  name: varchar({ length: 255 }).default("NULL"),
  slug: varchar({ length: 255 }).notNull(),
  isLimit: int("is_limit").notNull(),
  basic: int().default("NULL"),
  standared: int().default("NULL"),
  premium: int().default("NULL"),
});

export const featureAssaign = mysqlTable("feature_assaign", {
  id: int().autoincrement().notNull(),
  packageId: int("package_id").notNull(),
  featureId: int("feature_id").notNull(),
});

export const fonts = mysqlTable("fonts", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").notNull(),
  name: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull(),
});

export const kycVerifications = mysqlTable("kyc_verifications", {
  id: int().autoincrement().notNull(),
  countryId: int("country_id").notNull(),
  userId: int("user_id").notNull(),
  documentType: varchar("document_type", { length: 255 }).notNull(),
  docIdNumber: varchar("doc_id_number", { length: 255 }).notNull(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).default("NULL"),
  birthDate: varchar("birth_date", { length: 255 }).notNull(),
  address: text().default("NULL"),
  frontSideDoc: varchar("front_side_doc", { length: 255 }).default("NULL"),
  backSideDoc: varchar("back_side_doc", { length: 255 }).default("NULL"),
  selfieeWithDoc: varchar("selfiee_with_doc", { length: 255 }).default("NULL"),
  passport: varchar({ length: 255 }).default("NULL"),
  status: varchar({ length: 255 }).default("'0'"),
  rejectReason: text("reject_reason").default("NULL"),
  isPreview: int("is_preview").default(0),
  createdAt: varchar("created_at", { length: 255 }).default("NULL"),
  resubDate: varchar("resub_date", { length: 255 }).default("NULL"),
});

export const language = mysqlTable("language", {
  id: int().autoincrement().notNull(),
  name: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull(),
  shortName: varchar("short_name", { length: 255 }).notNull(),
  code: varchar({ length: 255 }).default("NULL"),
  textDirection: varchar("text_direction", { length: 255 }).notNull(),
  status: int().notNull(),
});

export const langValues = mysqlTable("lang_values", {
  id: int().autoincrement().notNull(),
  type: varchar({ length: 255 }).default("NULL"),
  label: varchar({ length: 255 }).notNull(),
  keyword: varchar({ length: 255 }).notNull(),
  english: text().default("NULL"),
});

export const messages = mysqlTable("messages", {
  id: int().autoincrement().notNull(),
  mgsFrom: int("mgs_from").default("NULL"),
  mgsTo: int("mgs_to").default("NULL"),
  message: text().default("NULL"),
  mgsTime: datetime("mgs_time", { mode: "string" }).notNull(),
  mgsSeen: tinyint("mgs_seen").default(0),
  mgsSeenTime: varchar("mgs_seen_time", { length: 255 }).default("NULL"),
  ongoingId: int("ongoing_id").default("NULL"),
  replyId: int("reply_id").default("NULL"),
});

export const notifications = mysqlTable("notifications", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").default("NULL"),
  actionId: int("action_id").default("NULL"),
  contentId: int("content_id").default("NULL"),
  text: varchar({ length: 255 }).default("NULL"),
  notiType: int("noti_type").default("NULL"),
  notiTime: datetime("noti_time", { mode: "string" }).notNull(),
  seen: int().default(0).notNull(),
});

export const packages = mysqlTable("package", {
  id: int().autoincrement().notNull(),
  name: varchar({ length: 255 }).default("NULL"),
  slug: varchar({ length: 255 }).default("NULL"),
  price: decimal({ precision: 10, scale: 2 }).default("0.00"),
  monthlyPrice: decimal("monthly_price", { precision: 10, scale: 2 }).default(
    "NULL"
  ),
  lifetimePrice: decimal("lifetime_price", { precision: 10, scale: 2 })
    .default("1000.00")
    .notNull(),
  billType: varchar("bill_type", { length: 255 }).default("NULL"),
  isSpecial: int("is_special").default(0).notNull(),
  status: int().default(1).notNull(),
});

export const pages = mysqlTable("pages", {
  id: int().autoincrement().notNull(),
  langId: varchar("lang_id", { length: 155 }).default("'1'").notNull(),
  businessId: varchar("business_id", { length: 255 }).default("NULL"),
  type: varchar({ length: 155 }).default("'admin'"),
  title: varchar({ length: 255 }).default("NULL"),
  slug: varchar({ length: 255 }).default("NULL"),
  details: longtext().default("NULL"),
  status: int().default("NULL"),
  createdAt: varchar("created_at", { length: 255 }).default("NULL"),
});

export const payment = mysqlTable("payment", {
  id: int().autoincrement().notNull(),
  puid: varchar({ length: 255 }).notNull(),
  userId: int("user_id").notNull(),
  packageId: varchar("package_id", { length: 255 }).default("NULL"),
  billingType: varchar("billing_type", { length: 255 }).default("NULL"),
  amount: decimal({ precision: 10, scale: 2 }).default("NULL"),
  status: varchar({ length: 255 }).notNull(),
  // you can use { mode: 'date' }, if you want to have Date as type for this column
  createdAt: date("created_at", { mode: "string" }).notNull(),
  // you can use { mode: 'date' }, if you want to have Date as type for this column
  expireOn: date("expire_on", { mode: "string" }).default("NULL"),
  paymentMethod: varchar("payment_method", { length: 255 }).default("NULL"),
  proof: text().default("NULL"),
  tax: varchar({ length: 255 }).default("'0'"),
});

export const paymentUser = mysqlTable("payment_user", {
  id: int().autoincrement().notNull(),
  puid: varchar({ length: 255 }).notNull(),
  userId: int("user_id").notNull(),
  customerId: int("customer_id").notNull(),
  bookingId: int("booking_id").notNull(),
  amount: decimal({ precision: 10, scale: 2 }).default("NULL"),
  totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).default(
    "0.00"
  ),
  commissionAmount: decimal("commission_amount", {
    precision: 10,
    scale: 2,
  }).default("0.00"),
  commissionRate: int("commission_rate").default(0),
  status: varchar({ length: 255 }).notNull(),
  // you can use { mode: 'date' }, if you want to have Date as type for this column
  createdAt: date("created_at", { mode: "string" }).notNull(),
  paymentMethod: varchar("payment_method", { length: 255 }).default("NULL"),
  proof: varchar({ length: 255 }).default("NULL"),
  type: varchar({ length: 155 }).default("'user'").notNull(),
});

export const payouts = mysqlTable("payouts", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").notNull(),
  payoutMethod: varchar("payout_method", { length: 255 }).notNull(),
  amount: bigint({ mode: "number" }).notNull(),
  transactionId: varchar("transaction_id", { length: 255 }).default("NULL"),
  message: text().default("NULL"),
  currency: varchar({ length: 255 }).default("NULL"),
  status: int().notNull(),
  createdAt: datetime("created_at", { mode: "string" }).notNull(),
});

export const planCoupons = mysqlTable("plan_coupons", {
  id: int().autoincrement().notNull(),
  uid: varchar({ length: 255 }).notNull(),
  name: varchar({ length: 255 }).default("NULL"),
  userId: varchar("user_id", { length: 155 }).default("'0'"),
  plan: varchar({ length: 255 }).notNull(),
  planType: varchar("plan_type", { length: 255 }).default("NULL"),
  code: varchar({ length: 255 }).notNull(),
  days: varchar({ length: 155 }).default("NULL"),
  discount: int().notNull(),
  discountType: varchar("discount_type", { length: 155 }).default("NULL"),
  // you can use { mode: 'date' }, if you want to have Date as type for this column
  startDate: date("start_date", { mode: "string" }).default("NULL"),
  // you can use { mode: 'date' }, if you want to have Date as type for this column
  endDate: date("end_date", { mode: "string" }).default("NULL"),
  quantity: int().default(0),
  used: int().notNull(),
  status: int().notNull(),
  applyDate: varchar("apply_date", { length: 255 }).default("NULL"),
  createdAt: datetime("created_at", { mode: "string" }).notNull(),
});

export const planCouponsApply = mysqlTable("plan_coupons_apply", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").notNull(),
  couponId: int("coupon_id").notNull(),
  // you can use { mode: 'date' }, if you want to have Date as type for this column
  createdAt: date("created_at", { mode: "string" }).notNull(),
});

export const productServices = mysqlTable("product_services", {
  id: int().autoincrement().notNull(),
  name: varchar({ length: 255 }).default("NULL"),
  details: text().default("NULL"),
  image: varchar({ length: 255 }).default("NULL"),
  thumb: varchar({ length: 255 }).default("NULL"),
  orders: int().default(0),
});

export const referrals = mysqlTable("referrals", {
  id: int().autoincrement().notNull(),
  referrarId: varchar("referrar_id", { length: 255 }).notNull(),
  orderId: varchar("order_id", { length: 255 }).notNull(),
  amount: varchar({ length: 255 }).notNull(),
  commision: varchar({ length: 255 }).notNull(),
  commisionAmount: varchar("commision_amount", { length: 255 }).notNull(),
  createdAt: varchar("created_at", { length: 255 }).notNull(),
});

export const referralPayouts = mysqlTable("referral_payouts", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").notNull(),
  payoutMethod: varchar("payout_method", { length: 255 }).notNull(),
  methodDetails: varchar("method_details", { length: 255 }).notNull(),
  amount: bigint({ mode: "number" }).notNull(),
  transactionId: varchar("transaction_id", { length: 255 }).default("NULL"),
  status: int().notNull(),
  createdAt: datetime("created_at", { mode: "string" }).notNull(),
});

export const referralSettings = mysqlTable("referral_settings", {
  id: int().autoincrement().notNull(),
  isEnable: varchar("is_enable", { length: 255 }).notNull(),
  referralPolicy: text("referral_policy").notNull(),
  commisionRate: varchar("commision_rate", { length: 255 }).notNull(),
  minimumPayout: varchar("minimum_payout", { length: 255 }).default("NULL"),
  paymentMethod: varchar("payment_method", { length: 255 }).notNull(),
  referralGuideline: text("referral_guideline").default("NULL"),
});

export const reviews = mysqlTable("reviews", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").notNull(),
  sessionId: int("session_id").notNull(),
  menteeId: int("mentee_id").notNull(),
  bookingId: int("booking_id").notNull(),
  feedback: varchar({ length: 255 }).notNull(),
  rating: varchar({ length: 255 }).notNull(),
  createdAt: datetime("created_at", { mode: "string" }).notNull(),
});

export const services = mysqlTable("services", {
  id: int().autoincrement().notNull(),
  langId: varchar("lang_id", { length: 155 }).default("NULL"),
  businessId: varchar("business_id", { length: 255 }).default("NULL"),
  userId: int("user_id").notNull(),
  categoryId: int("category_id").notNull(),
  title: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull(),
  details: longtext().notNull(),
  icon: varchar({ length: 155 }).default("NULL"),
  image: varchar({ length: 255 }).notNull(),
  thumb: varchar({ length: 255 }).notNull(),
  status: int().notNull(),
  order: int().notNull(),
  enableBooking: varchar("enable_booking", { length: 155 }).default("NULL"),
  price: decimal({ precision: 10, scale: 2 }).default("NULL"),
  durationType: varchar("duration_type", { length: 155 }).default("NULL"),
  duration: varchar({ length: 155 }).default("NULL"),
  contentType: varchar("content_type", { length: 155 }).default("NULL"),
});

export const sessions = mysqlTable("sessions", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").notNull(),
  type: int().default(1).notNull(),
  name: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull(),
  uid: varchar({ length: 255 }).notNull(),
  details: text().notNull(),
  duration: varchar({ length: 255 }).notNull(),
  price: varchar({ length: 255 }).notNull(),
  totalSlot: varchar("total_slot", { length: 255 }).default("NULL"),
  slotFor: varchar("slot_for", { length: 255 }).default("NULL"),
  sessionNumber: varchar("session_number", { length: 255 }).default("NULL"),
  sessionRepeat: varchar("session_repeat", { length: 255 }).default("NULL"),
  skillId: varchar("skill_id", { length: 255 }).default("NULL"),
  allowSession: varchar("allow_session", { length: 255 }).default("NULL"),
  isPublic: varchar("is_public", { length: 255 }).default("NULL"),
  isDefault: varchar("is_default", { length: 255 }).default("NULL"),
  enableGroupBooking: int("enable_group_booking").default(0),
  groupBookingSlot: int("group_booking_slot").default("NULL"),
  image: varchar({ length: 255 }).default("NULL"),
  thumb: varchar({ length: 255 }).default("NULL"),
  introVideo: varchar("intro_video", { length: 255 }).default("NULL"),
  status: int().notNull(),
  createdAt: varchar("created_at", { length: 255 }).notNull(),
});

export const sessionBooking = mysqlTable("session_booking", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").notNull(),
  menteeId: int("mentee_id").notNull(),
  sessionId: int("session_id").notNull(),
  bookingNumber: varchar("booking_number", { length: 255 }).notNull(),
  price: varchar({ length: 255 }).default("NULL"),
  duration: varchar({ length: 255 }).default("NULL"),
  // you can use { mode: 'date' }, if you want to have Date as type for this column
  date: date({ mode: "string" }).notNull(),
  time: varchar({ length: 255 }).default("NULL"),
  note: text().default("NULL"),
  isGroup: varchar("is_group", { length: 55 }).default("NULL"),
  status: int().default("NULL"),
  hostUrl: varchar("host_url", { length: 255 }).default("NULL"),
  joinUrl: varchar("join_url", { length: 255 }).default("NULL"),
  zoomPassword: varchar("zoom_password", { length: 155 }).default("NULL"),
  isStart: varchar("is_start", { length: 55 }).default("'0'").notNull(),
  type: varchar({ length: 155 }).default("'online'").notNull(),
  payInfo: int("pay_info").default("NULL"),
  paymentStatus: int("payment_status").default("NULL"),
  syncCalendar: varchar("sync_calendar", { length: 255 }).default("NULL"),
  syncCalendarUser: varchar("sync_calendar_user", { length: 255 }).default(
    "NULL"
  ),
  createdAt: datetime("created_at", { mode: "string" }).default("NULL"),
  confirmDate: varchar("confirm_date", { length: 155 }).default("NULL"),
  isRecurring: int("is_recurring").default(0).notNull(),
  recurringCount: int("recurring_count").default(0).notNull(),
  nextRecurDate: varchar("next_recur_date", { length: 155 }).default("NULL"),
  isCompleted: int("is_completed").default(0).notNull(),
});

export const settings = mysqlTable("settings", {
  id: int().autoincrement().notNull(),
  siteName: varchar("site_name", { length: 255 }).default("NULL"),
  siteTitle: varchar("site_title", { length: 255 }).default("NULL"),
  siteTitleMentor: varchar("site_title_mentor", { length: 255 }).default(
    "NULL"
  ),
  favicon: varchar({ length: 255 }).default("NULL"),
  logo: varchar({ length: 255 }).default("NULL"),
  heroImg: varchar("hero_img", { length: 255 }).default("NULL"),
  keywords: varchar({ length: 255 }).default("NULL"),
  description: text().default("NULL"),
  footerAbout: text("footer_about").default("NULL"),
  adminEmail: varchar("admin_email", { length: 255 }).default("NULL"),
  mobile: varchar({ length: 255 }).default("NULL"),
  copyright: varchar({ length: 255 }).default("NULL"),
  paginationLimit: int("pagination_limit").default("NULL"),
  facebook: varchar({ length: 255 }).default("NULL"),
  instagram: varchar({ length: 255 }).default("NULL"),
  twitter: varchar({ length: 255 }).default("NULL"),
  linkedin: varchar({ length: 255 }).default("NULL"),
  googleAnalytics: longtext("google_analytics").default("NULL"),
  customCss: longtext("custom_css").default("NULL"),
  siteColor: varchar("site_color", { length: 255 }).default("NULL"),
  siteFont: varchar("site_font", { length: 255 }).default("NULL"),
  layout: int().default("NULL"),
  aboutInfo: mediumtext("about_info").default("NULL"),
  indCode: varchar("ind_code", { length: 255 }).default("NULL"),
  purchaseCode: varchar("purchase_code", { length: 255 }).default("NULL"),
  link: varchar({ length: 255 }).default("NULL"),
  pwaLogo: varchar("pwa_logo", { length: 155 }).default("NULL"),
  enablePwa: int("enable_pwa").default(0),
  enableCaptcha: int("enable_captcha").default(0).notNull(),
  enableWorkflow: int("enable_workflow").default(1).notNull(),
  enableFeature: int("enable_feature").notNull(),
  enableUsers: int("enable_users").default(1).notNull(),
  enableBlog: int("enable_blog").notNull(),
  enableFaq: int("enable_faq").notNull(),
  enableAnimation: int("enable_animation").default(1),
  enableRegistration: int("enable_registration").notNull(),
  enablePayment: int("enable_payment").notNull(),
  enablePaypal: int("enable_paypal").default(0).notNull(),
  enableEmailVerify: int("enable_email_verify").notNull(),
  enableSmsVerify: int("enable_sms_verify").default("NULL"),
  enableMentorAutoApprove: int("enable_mentor_auto_approve").default("NULL"),
  checkEmailVerifyUser: varchar("check_email_verify_user", {
    length: 155,
  }).default("'0'"),
  enableMultilingual: int("enable_multilingual").default(0),
  enableFrontend: varchar("enable_frontend", { length: 155 }).default("'1'"),
  enableLifetime: varchar("enable_lifetime", { length: 155 }).default("'0'"),
  enableCoupon: int("enable_coupon").default(0),
  enableKyc: varchar("enable_kyc", { length: 5 }).default("'0'"),
  captchaType: int("captcha_type").default("NULL"),
  captchaSiteKey: varchar("captcha_site_key", { length: 255 }).default("NULL"),
  captchaSecretKey: varchar("captcha_secret_key", { length: 255 }).default(
    "NULL"
  ),
  paypalEmail: varchar("paypal_email", { length: 255 }).default("NULL"),
  paypalPayment: int("paypal_payment").default(0),
  stripePayment: int("stripe_payment").default(0),
  publishKey: varchar("publish_key", { length: 255 }).default("NULL"),
  secretKey: varchar("secret_key", { length: 255 }).default("NULL"),
  paystackPayment: varchar("paystack_payment", { length: 155 }).default("'0'"),
  paystackSecretKey: varchar("paystack_secret_key", { length: 255 }).default(
    "NULL"
  ),
  paystackPublicKey: varchar("paystack_public_key", { length: 255 }).default(
    "NULL"
  ),
  razorpayPayment: varchar("razorpay_payment", { length: 155 }).default("'0'"),
  razorpayKeyId: varchar("razorpay_key_id", { length: 255 }).default("NULL"),
  razorpayKeySecret: varchar("razorpay_key_secret", { length: 255 }).default(
    "NULL"
  ),
  flutterwavePayment: int("flutterwave_payment").default(0),
  flutterwavePublicKey: varchar("flutterwave_public_key", {
    length: 255,
  }).default("NULL"),
  flutterwaveSecretKey: varchar("flutterwave_secret_key", {
    length: 255,
  }).default("NULL"),
  mercadoPayment: int("mercado_payment").default(0),
  mercadoApiKey: varchar("mercado_api_key", { length: 255 }).default("NULL"),
  mercadoToken: varchar("mercado_token", { length: 255 }).default("NULL"),
  mercadoCurrency: varchar("mercado_currency", { length: 155 }).default("NULL"),
  paypalMode: varchar("paypal_mode", { length: 255 }).default("'sandbox'"),
  openaiKey: varchar("openai_key", { length: 255 }).default("NULL"),
  openaiModel: varchar("openai_model", { length: 255 }).default("NULL"),
  twilloAccountSid: varchar("twillo_account_sid", { length: 255 }).default(
    "NULL"
  ),
  twilloAuthToken: varchar("twillo_auth_token", { length: 255 }).default(
    "NULL"
  ),
  twilloNumber: varchar("twillo_number", { length: 255 }).default("NULL"),
  enableSms: int("enable_sms").notNull(),
  enableWhatsappMsg: int("enable_whatsapp_msg").default(0),
  ultramsgInstanceId: varchar("ultramsg_instance_id", { length: 255 }).default(
    "NULL"
  ),
  ultramsgToken: varchar("ultramsg_token", { length: 255 }).default("NULL"),
  enableWallet: varchar("enable_wallet", { length: 155 }).default("'0'"),
  minPayoutAmount: varchar("min_payout_amount", { length: 155 }).default("'0'"),
  commissionRate: varchar("commission_rate", { length: 155 }).default("'0'"),
  paypalPayout: varchar("paypal_payout", { length: 155 }).default("'1'"),
  ibanPayout: varchar("iban_payout", { length: 155 }).default("'1'"),
  swiftPayout: varchar("swift_payout", { length: 155 }).default("'1'"),
  googleClientId: text("google_client_id").default("NULL"),
  googleClientSecret: varchar("google_client_secret", { length: 255 }).default(
    "NULL"
  ),
  enableOfflinePayment: varchar("enable_offline_payment", {
    length: 255,
  }).default("'0'"),
  offlineDetails: text("offline_details").default("NULL"),
  zoomAccountId: varchar("zoom_account_id", { length: 155 }).default("NULL"),
  zoomClientId: varchar("zoom_client_id", { length: 155 }).default("NULL"),
  zoomClientSecret: varchar("zoom_client_secret", { length: 255 }).default(
    "NULL"
  ),
  enableWildapricotSso: int("enable_wildapricot_sso").default("NULL"),
  wildapricotDomain: varchar("wildapricot_domain", { length: 255 }).default(
    "NULL"
  ),
  wildapricotAccountId: varchar("wildapricot_account_id", {
    length: 255,
  }).notNull(),
  wildapricotClientId: varchar("wildapricot_client_id", {
    length: 255,
  }).notNull(),
  wildapricotClientSecret: varchar("wildapricot_client_secret", {
    length: 255,
  }).notNull(),
  wildapricotButtonText: varchar("wildapricot_button_text", {
    length: 155,
  }).default("NULL"),
  mailProtocol: varchar("mail_protocol", { length: 255 }).default("NULL"),
  mailTitle: varchar("mail_title", { length: 255 }).default("NULL"),
  mailHost: varchar("mail_host", { length: 255 }).default("NULL"),
  mailPort: varchar("mail_port", { length: 255 }).default("NULL"),
  mailEncryption: varchar("mail_encryption", { length: 255 }).default("'ssl'"),
  mailUsername: varchar("mail_username", { length: 255 }).default("NULL"),
  mailPassword: varchar("mail_password", { length: 255 }).default("NULL"),
  isSmtp: int("is_smtp").default(1),
  chartStyle: varchar("chart_style", { length: 255 })
    .default("'style1'")
    .notNull(),
  numFormat: varchar("num_format", { length: 155 }).default("'0'"),
  currLocate: varchar("curr_locate", { length: 155 }).default("'0'"),
  country: int().default(178).notNull(),
  siteInfo: int("site_info").default("NULL"),
  lang: int().default(1).notNull(),
  trialDays: varchar("trial_days", { length: 155 }).default("'0'"),
  taxName: varchar("tax_name", { length: 255 }).default("NULL"),
  taxValue: varchar("tax_value", { length: 255 }).default("NULL"),
  type: varchar({ length: 255 }).default("'live'").notNull(),
  timeZone: int("time_zone").default(1),
  version: varchar({ length: 255 }).default("'v1.1'").notNull(),
});

export const skills = mysqlTable("skills", {
  id: int().autoincrement().notNull(),
  skill: varchar({ length: 500 }).notNull(),
  categoryId: varchar("category_id", { length: 255 }).notNull(),
  details: text().default("NULL"),
  status: varchar({ length: 255 }).notNull(),
});

export const tags = mysqlTable("tags", {
  id: int().autoincrement().notNull(),
  postId: int("post_id").default("NULL"),
  tag: varchar({ length: 255 }).default("NULL"),
  tagSlug: varchar("tag_slug", { length: 255 }).default("NULL"),
  createdAt: varchar("created_at", { length: 255 }).default("NULL"),
});

export const testimonials = mysqlTable("testimonials", {
  id: int().autoincrement().notNull(),
  langId: varchar("lang_id", { length: 155 }).default("'1'").notNull(),
  businessId: varchar("business_id", { length: 255 }).default("NULL"),
  type: varchar({ length: 155 }).default("'admin'").notNull(),
  name: varchar({ length: 255 }).default("NULL"),
  designation: varchar({ length: 255 }).default("NULL"),
  feedback: text().default("NULL"),
  image: varchar({ length: 255 }).default("NULL"),
  thumb: varchar({ length: 255 }).default("NULL"),
});

export const timeZone = mysqlTable(
  "time_zone",
  {
    id: int().autoincrement().notNull(),
    name: varchar({ length: 35 }).notNull(),
  },
  (table) => [index("idx_zone_name").on(table.name)]
);

export const users = mysqlTable("users", {
  id: int().autoincrement().notNull(),
  parentId: int("parent_id").notNull(),
  name: varchar({ length: 255 }).default("NULL"),
  slug: varchar({ length: 255 }).default("NULL"),
  balance: bigint({ mode: "number" }),
  totalSales: bigint("total_sales", { mode: "number" }),
  email: varchar({ length: 255 }).default("NULL"),
  userName: varchar("user_name", { length: 255 }).default("NULL"),
  password: varchar({ length: 255 }).default("NULL"),
  role: varchar({ length: 100 }).default("'user'"),
  accountType: varchar("account_type", { length: 255 }).default("NULL"),
  userType: varchar("user_type", { length: 100 }).default("'registered'"),
  // you can use { mode: 'date' }, if you want to have Date as type for this column
  trialExpire: date("trial_expire", { mode: "string" }).default("NULL"),
  phone: varchar({ length: 255 }).default("NULL"),
  address: text().default("NULL"),
  emailVerified: int("email_verified").default(0),
  isActive: int("is_active").default(0),
  lastActive: varchar("last_active", { length: 255 }).default("NULL"),
  lastLogout: varchar("last_logout", { length: 255 }).default("NULL"),
  totalAttendence: int("total_attendence").default(0),
  attendenceDate: varchar("attendence_date", { length: 255 }).default("NULL"),
  respondIn: varchar("respond_in", { length: 255 }).default("NULL"),
  respondTime: varchar("respond_time", { length: 255 }).default("NULL"),
  verifyCode: varchar("verify_code", { length: 255 }).default("NULL"),
  phoneVerified: varchar("phone_verified", { length: 255 }).default("'0'"),
  kycVerified: varchar("kyc_verified", { length: 5 }).default("'0'"),
  smsCount: varchar("sms_count", { length: 255 }).default("'0'"),
  image: varchar({ length: 255 }).default("NULL"),
  thumb: varchar({ length: 255 }).default("NULL"),
  cover: varchar({ length: 255 }).default("NULL"),
  status: int().default(0),
  country: int().default("NULL"),
  currency: varchar({ length: 255 }).default("'USD'"),
  aboutMe: varchar("about_me", { length: 5000 }).default("NULL"),
  gender: varchar({ length: 255 }).default("NULL"),
  language: varchar({ length: 255 }).default("NULL"),
  skill: varchar({ length: 500 }).default("NULL"),
  category: varchar({ length: 255 }).default("NULL"),
  level: varchar({ length: 255 }).default("NULL"),
  experienceYear: varchar("experience_year", { length: 255 }).default("NULL"),
  meetType: varchar("meet_type", { length: 155 }).default("'zoom'"),
  gmeetUrl: varchar("gmeet_url", { length: 255 }).default("NULL"),
  company: varchar({ length: 255 }).default("NULL"),
  designation: varchar({ length: 255 }).default("NULL"),
  linkedinProfile: varchar("linkedin_profile", { length: 255 }).default("NULL"),
  facebookProfile: varchar("facebook_profile", { length: 255 }).default("NULL"),
  instagramProfile: varchar("instagram_profile", { length: 255 }).default(
    "NULL"
  ),
  xProfile: varchar("x_profile", { length: 255 }).default("NULL"),
  portfolio: varchar({ length: 255 }).default("NULL"),
  introVideo: varchar("intro_video", { length: 255 }).default("NULL"),
  timeZone: varchar("time_zone", { length: 255 }).default("NULL"),
  googleAnalytics: text("google_analytics").default("NULL"),
  enableAppointment: int("enable_appointment").default(1),
  enableRating: int("enable_rating").default(1),
  enableSmsNotify: varchar("enable_sms_notify", { length: 255 }).default("'0'"),
  enableSmsAlert: varchar("enable_sms_alert", { length: 255 }).default("'0'"),
  checkEmailVerifyUser: varchar("check_email_verify_user", {
    length: 255,
  }).default("NULL"),
  intervals: varchar({ length: 255 }).default("NULL"),
  holidays: longtext().default("NULL"),
  dateFormat: varchar("date_format", { length: 255 }).default("'d M Y'"),
  createdAt: datetime("created_at", { mode: "string" }).default("NULL"),
});

export const usersPayoutAccounts = mysqlTable(
  "users_payout_accounts",
  {
    id: int().autoincrement().notNull(),
    userId: int("user_id").default("NULL"),
    payoutPaypalEmail: varchar("payout_paypal_email", { length: 255 }).default(
      "NULL"
    ),
    payoutBankInfo: mediumtext("payout_bank_info").default("NULL"),
    ibanFullName: varchar("iban_full_name", { length: 255 }).default("NULL"),
    ibanCountryId: varchar("iban_country_id", { length: 20 }).default("NULL"),
    ibanBankName: varchar("iban_bank_name", { length: 255 }).default("NULL"),
    ibanNumber: varchar("iban_number", { length: 500 }).default("NULL"),
    swiftFullName: varchar("swift_full_name", { length: 255 }).default("NULL"),
    swiftAddress: varchar("swift_address", { length: 500 }).default("NULL"),
    swiftState: varchar("swift_state", { length: 255 }).default("NULL"),
    swiftCity: varchar("swift_city", { length: 255 }).default("NULL"),
    swiftPostcode: varchar("swift_postcode", { length: 100 }).default("NULL"),
    swiftCountryId: varchar("swift_country_id", { length: 20 }).default("NULL"),
    swiftBankAccountHolderName: varchar("swift_bank_account_holder_name", {
      length: 255,
    }).default("NULL"),
    swiftIban: varchar("swift_iban", { length: 255 }).default("NULL"),
    swiftCode: varchar("swift_code", { length: 255 }).default("NULL"),
    swiftBankName: varchar("swift_bank_name", { length: 255 }).default("NULL"),
    swiftBankBranchCity: varchar("swift_bank_branch_city", {
      length: 255,
    }).default("NULL"),
    swiftBankBranchCountryId: varchar("swift_bank_branch_country_id", {
      length: 20,
    }).default("NULL"),
  },
  (table) => [index("idx_user_id").on(table.userId)]
);

export const usersSkill = mysqlTable("users_skill", {
  id: int().autoincrement().notNull(),
  userId: int("user_id").notNull(),
  skillId: int("skill_id").notNull(),
});

export const workflows = mysqlTable("workflows", {
  id: int().autoincrement().notNull(),
  title: varchar({ length: 255 }).notNull(),
  details: text().default("NULL"),
  image: varchar({ length: 255 }).notNull(),
  thumb: varchar({ length: 255 }).notNull(),
  status: int().notNull(),
});

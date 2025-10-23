-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `achievements` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`mentee_id` int(11) NOT NULL,
	`title` varchar(255) NOT NULL,
	`limit` varchar(255) NOT NULL,
	`short_details` text NOT NULL,
	`image` varchar(255) DEFAULT 'NULL',
	`thumb` varchar(255) DEFAULT 'NULL',
	`date` varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `assaign_days` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`session_id` int(11) NOT NULL DEFAULT 0,
	`day` int(11) NOT NULL,
	`start` varchar(255) DEFAULT 'NULL',
	`end` varchar(255) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `assign_time` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`session_id` int(11) NOT NULL DEFAULT 0,
	`day_id` int(11) NOT NULL,
	`time` varchar(255) NOT NULL,
	`start` varchar(255) NOT NULL,
	`end` varchar(255) NOT NULL,
	`person_per_slot` int(11) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `blogs` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`lang_id` varchar(155) DEFAULT 'NULL',
	`business_id` varchar(155) DEFAULT 'NULL',
	`user_id` int(11) NOT NULL,
	`category_id` int(11) NOT NULL,
	`title` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`details` longtext DEFAULT 'NULL',
	`image` varchar(255) DEFAULT 'NULL',
	`thumb` varchar(255) DEFAULT 'NULL',
	`tags` varchar(255) DEFAULT 'NULL',
	`meta_tags` varchar(255) DEFAULT 'NULL',
	`meta_desc` varchar(255) DEFAULT 'NULL',
	`status` int(11) NOT NULL,
	`total_views` int(11) DEFAULT 'NULL',
	`created_at` datetime NOT NULL
);
--> statement-breakpoint
CREATE TABLE `blog_category` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`name` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`status` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `blog_posts` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`title` varchar(255) DEFAULT 'NULL',
	`slug` varchar(255) DEFAULT 'NULL',
	`type` varchar(255) DEFAULT 'NULL',
	`details` text DEFAULT 'NULL',
	`user_id` int(11) DEFAULT 'NULL',
	`category_id` int(11) DEFAULT 'NULL',
	`image` varchar(255) DEFAULT 'NULL',
	`thumb` varchar(255) DEFAULT 'NULL',
	`status` int(11) DEFAULT 'NULL',
	`hit` int(11) DEFAULT 'NULL',
	`is_featured` int(11) DEFAULT 'NULL',
	`created_at` datetime DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `brands` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`name` varchar(255) DEFAULT 'NULL',
	`logo` varchar(255) NOT NULL,
	`link` varchar(255) NOT NULL,
	`status` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `business` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`uid` varchar(255) NOT NULL,
	`user_id` int(11) NOT NULL,
	`name` varchar(255) DEFAULT 'NULL',
	`slug` varchar(255) DEFAULT 'NULL',
	`details` text DEFAULT 'NULL',
	`keywords` text DEFAULT 'NULL',
	`description` text DEFAULT 'NULL',
	`type` int(11) NOT NULL DEFAULT 1,
	`title` varchar(255) DEFAULT 'NULL',
	`country` int(11) DEFAULT 'NULL',
	`address` mediumtext DEFAULT 'NULL',
	`email` varchar(255) DEFAULT 'NULL',
	`phone` varchar(255) DEFAULT 'NULL',
	`category` varchar(255) DEFAULT 'NULL',
	`business_type` int(11) DEFAULT 'NULL',
	`logo` varchar(255) DEFAULT 'NULL',
	`image` text DEFAULT 'NULL',
	`thumb` text DEFAULT 'NULL',
	`breadcrumb_banner` varchar(255) DEFAULT 'NULL',
	`hero_img` varchar(255) DEFAULT 'NULL',
	`status` int(11) NOT NULL DEFAULT 0,
	`enable_gallery` varchar(255) DEFAULT '''1''',
	`enable_staff` varchar(255) NOT NULL DEFAULT '''1''',
	`is_primary` int(11) DEFAULT 'NULL',
	`template_style` int(11) NOT NULL DEFAULT 1,
	`curr_locate` varchar(155) DEFAULT '''0''',
	`num_format` varchar(155) DEFAULT '''0''',
	`color` varchar(255) NOT NULL DEFAULT '''#546af1''',
	`facebook` varchar(255) DEFAULT 'NULL',
	`twitter` varchar(255) DEFAULT 'NULL',
	`instagram` varchar(255) DEFAULT 'NULL',
	`whatsapp` varchar(255) DEFAULT 'NULL',
	`qr_code` varchar(255) DEFAULT 'NULL',
	`time_zone` int(11) DEFAULT 1,
	`date_format` varchar(255) DEFAULT '''d M Y''',
	`time_format` varchar(255) DEFAULT '''hh''',
	`time_interval` varchar(255) DEFAULT '''30''',
	`interval_type` varchar(255) DEFAULT '''minute''',
	`interval_settings` varchar(155) DEFAULT '''2''',
	`enable_category` varchar(155) DEFAULT '''0''',
	`enable_rating` varchar(155) DEFAULT '''0''',
	`enable_location` varchar(155) DEFAULT '''0''',
	`enable_group` varchar(155) DEFAULT '''0''',
	`enable_guest` varchar(155) DEFAULT '''0''',
	`total_person` varchar(155) DEFAULT '''5''',
	`enable_payment` varchar(155) DEFAULT '''1''',
	`enable_onsite` varchar(155) DEFAULT '''1''',
	`enable_blog` varchar(155) DEFAULT 'NULL',
	`enable_portfolio` varchar(155) DEFAULT 'NULL',
	`enable_product` varchar(155) DEFAULT 'NULL',
	`enable_team` varchar(155) DEFAULT 'NULL',
	`enable_counter` varchar(155) DEFAULT 'NULL',
	`enable_career` varchar(155) DEFAULT 'NULL',
	`enable_service` varchar(155) DEFAULT 'NULL',
	`enable_event` varchar(155) DEFAULT 'NULL',
	`enable_quote` varchar(155) DEFAULT 'NULL',
	`enable_faq` varchar(155) DEFAULT 'NULL',
	`enable_testimonial` varchar(155) DEFAULT 'NULL',
	`enable_appointment` varchar(155) DEFAULT 'NULL',
	`holidays` longtext DEFAULT 'NULL',
	`about_title` varchar(255) DEFAULT 'NULL',
	`about_details` text DEFAULT 'NULL',
	`about_vedio_url` varchar(255) DEFAULT 'NULL',
	`home_style` varchar(155) DEFAULT 'NULL',
	`pagination_limit` varchar(255) DEFAULT 'NULL',
	`created_at` varchar(255) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `categories` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`icon` varchar(255) DEFAULT 'NULL',
	`name` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`details` text DEFAULT 'NULL',
	`direction` text DEFAULT 'NULL',
	`status` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `collections` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`name` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`status` int(11) NOT NULL,
	`created_at` varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `comments` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) DEFAULT 'NULL',
	`post_id` int(11) DEFAULT 'NULL',
	`name` varchar(255) DEFAULT 'NULL',
	`email` varchar(255) DEFAULT 'NULL',
	`message` text DEFAULT 'NULL',
	`created_at` datetime NOT NULL
);
--> statement-breakpoint
CREATE TABLE `contacts` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`business_id` varchar(255) DEFAULT 'NULL',
	`name` varchar(255) DEFAULT 'NULL',
	`email` varchar(255) DEFAULT 'NULL',
	`message` text DEFAULT 'NULL',
	`created_at` datetime NOT NULL
);
--> statement-breakpoint
CREATE TABLE `counters` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`lang_id` varchar(155) DEFAULT 'NULL',
	`business_id` varchar(155) DEFAULT 'NULL',
	`user_id` int(11) NOT NULL,
	`icon` varchar(255) NOT NULL,
	`number` varchar(255) NOT NULL,
	`title` varchar(255) NOT NULL,
	`text` text NOT NULL,
	`status` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `country` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` varchar(20) NOT NULL,
	`code` varchar(2) NOT NULL,
	`dial_code` varchar(5) NOT NULL,
	`currency_name` varchar(20) NOT NULL,
	`currency_symbol` varchar(20) NOT NULL,
	`currency_code` varchar(10) NOT NULL,
	CONSTRAINT `code` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `coupons` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`session_id` int(11) NOT NULL,
	`code` varchar(255) NOT NULL,
	`discount` varchar(255) NOT NULL,
	`start_date` varchar(255) DEFAULT 'NULL',
	`end_date` varchar(255) DEFAULT 'NULL',
	`once_per_mentee` int(11) DEFAULT 0,
	`usages_limit` varchar(255) DEFAULT 'NULL',
	`used` int(11) DEFAULT 0,
	`status` int(11) DEFAULT 1,
	`created_at` datetime NOT NULL
);
--> statement-breakpoint
CREATE TABLE `coupon_apply` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`coupon_id` int(11) NOT NULL,
	`user_id` varchar(255) NOT NULL,
	`mentee_id` int(11) NOT NULL,
	`session_id` int(11) NOT NULL,
	`code` varchar(255) NOT NULL,
	`discount` int(11) NOT NULL,
	`created_at` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `dialing_codes` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` varchar(64) NOT NULL DEFAULT '''''',
	`iso_code` varchar(2) NOT NULL,
	`isd_code` varchar(7) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `educations` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255) NOT NULL,
	`institute` varchar(255) NOT NULL,
	`degree` varchar(255) NOT NULL,
	`start_year` varchar(255) NOT NULL,
	`end_year` varchar(255) DEFAULT 'NULL',
	`status` varchar(255) NOT NULL,
	`created_at` varchar(255) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `experiences` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`icon` varchar(255) NOT NULL,
	`title` varchar(255) NOT NULL,
	`company` varchar(255) DEFAULT 'NULL',
	`start_date` varchar(255) DEFAULT 'NULL',
	`end_date` varchar(255) DEFAULT 'NULL',
	`is_present` varchar(255) NOT NULL DEFAULT '''0''',
	`contribution` text DEFAULT 'NULL',
	`status` varchar(255) NOT NULL,
	`created_at` varchar(255) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `faqs` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`lang_id` varchar(155) NOT NULL DEFAULT '''1''',
	`business_id` varchar(255) DEFAULT 'NULL',
	`type` varchar(155) NOT NULL DEFAULT '''admin''',
	`title` varchar(255) DEFAULT 'NULL',
	`details` mediumtext DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `favourite` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`favourite_id` int(11) NOT NULL,
	`created_at` varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `features` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` varchar(255) DEFAULT 'NULL',
	`slug` varchar(255) NOT NULL,
	`is_limit` int(11) NOT NULL,
	`basic` int(11) DEFAULT 'NULL',
	`standared` int(11) DEFAULT 'NULL',
	`premium` int(11) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `feature_assaign` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`package_id` int(11) NOT NULL,
	`feature_id` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `fonts` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`name` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `kyc_verifications` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`country_id` int(11) NOT NULL,
	`user_id` int(11) NOT NULL,
	`document_type` varchar(255) NOT NULL,
	`doc_id_number` varchar(255) NOT NULL,
	`first_name` varchar(255) NOT NULL,
	`last_name` varchar(255) DEFAULT 'NULL',
	`birth_date` varchar(255) NOT NULL,
	`address` text DEFAULT 'NULL',
	`front_side_doc` varchar(255) DEFAULT 'NULL',
	`back_side_doc` varchar(255) DEFAULT 'NULL',
	`selfiee_with_doc` varchar(255) DEFAULT 'NULL',
	`passport` varchar(255) DEFAULT 'NULL',
	`status` varchar(255) DEFAULT '''0''',
	`reject_reason` text DEFAULT 'NULL',
	`is_preview` int(11) DEFAULT 0,
	`created_at` varchar(255) DEFAULT 'NULL',
	`resub_date` varchar(255) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `language` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`short_name` varchar(255) NOT NULL,
	`code` varchar(255) DEFAULT 'NULL',
	`text_direction` varchar(255) NOT NULL,
	`status` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lang_values` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`type` varchar(255) DEFAULT 'NULL',
	`label` varchar(255) NOT NULL,
	`keyword` varchar(255) NOT NULL,
	`english` text DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `messages` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`mgs_from` int(11) DEFAULT 'NULL',
	`mgs_to` int(11) DEFAULT 'NULL',
	`message` text DEFAULT 'NULL',
	`mgs_time` datetime NOT NULL,
	`mgs_seen` tinyint(1) DEFAULT 0,
	`mgs_seen_time` varchar(255) DEFAULT 'NULL',
	`ongoing_id` int(11) DEFAULT 'NULL',
	`reply_id` int(11) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `notifications` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) DEFAULT 'NULL',
	`action_id` int(11) DEFAULT 'NULL',
	`content_id` int(11) DEFAULT 'NULL',
	`text` varchar(255) DEFAULT 'NULL',
	`noti_type` int(11) DEFAULT 'NULL',
	`noti_time` datetime NOT NULL,
	`seen` int(11) NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `package` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` varchar(255) DEFAULT 'NULL',
	`slug` varchar(255) DEFAULT 'NULL',
	`price` decimal(10,2) DEFAULT '0.00',
	`monthly_price` decimal(10,2) DEFAULT 'NULL',
	`lifetime_price` decimal(10,2) NOT NULL DEFAULT '1000.00',
	`bill_type` varchar(255) DEFAULT 'NULL',
	`is_special` int(11) NOT NULL DEFAULT 0,
	`status` int(11) NOT NULL DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE `pages` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`lang_id` varchar(155) NOT NULL DEFAULT '''1''',
	`business_id` varchar(255) DEFAULT 'NULL',
	`type` varchar(155) DEFAULT '''admin''',
	`title` varchar(255) DEFAULT 'NULL',
	`slug` varchar(255) DEFAULT 'NULL',
	`details` longtext DEFAULT 'NULL',
	`status` int(11) DEFAULT 'NULL',
	`created_at` varchar(255) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `payment` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`puid` varchar(255) NOT NULL,
	`user_id` int(11) NOT NULL,
	`package_id` varchar(255) DEFAULT 'NULL',
	`billing_type` varchar(255) DEFAULT 'NULL',
	`amount` decimal(10,2) DEFAULT 'NULL',
	`status` varchar(255) NOT NULL,
	`created_at` date NOT NULL,
	`expire_on` date DEFAULT 'NULL',
	`payment_method` varchar(255) DEFAULT 'NULL',
	`proof` text DEFAULT 'NULL',
	`tax` varchar(255) DEFAULT '''0'''
);
--> statement-breakpoint
CREATE TABLE `payment_user` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`puid` varchar(255) NOT NULL,
	`user_id` int(11) NOT NULL,
	`customer_id` int(11) NOT NULL,
	`booking_id` int(11) NOT NULL,
	`amount` decimal(10,2) DEFAULT 'NULL',
	`total_amount` decimal(10,2) DEFAULT '0.00',
	`commission_amount` decimal(10,2) DEFAULT '0.00',
	`commission_rate` int(11) DEFAULT 0,
	`status` varchar(255) NOT NULL,
	`created_at` date NOT NULL,
	`payment_method` varchar(255) DEFAULT 'NULL',
	`proof` varchar(255) DEFAULT 'NULL',
	`type` varchar(155) NOT NULL DEFAULT '''user'''
);
--> statement-breakpoint
CREATE TABLE `payouts` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`payout_method` varchar(255) NOT NULL,
	`amount` bigint(20) NOT NULL,
	`transaction_id` varchar(255) DEFAULT 'NULL',
	`message` text DEFAULT 'NULL',
	`currency` varchar(255) DEFAULT 'NULL',
	`status` int(11) NOT NULL,
	`created_at` datetime NOT NULL
);
--> statement-breakpoint
CREATE TABLE `plan_coupons` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`uid` varchar(255) NOT NULL,
	`name` varchar(255) DEFAULT 'NULL',
	`user_id` varchar(155) DEFAULT '''0''',
	`plan` varchar(255) NOT NULL,
	`plan_type` varchar(255) DEFAULT 'NULL',
	`code` varchar(255) NOT NULL,
	`days` varchar(155) DEFAULT 'NULL',
	`discount` int(11) NOT NULL,
	`discount_type` varchar(155) DEFAULT 'NULL',
	`start_date` date DEFAULT 'NULL',
	`end_date` date DEFAULT 'NULL',
	`quantity` int(11) DEFAULT 0,
	`used` int(11) NOT NULL,
	`status` int(11) NOT NULL,
	`apply_date` varchar(255) DEFAULT 'NULL',
	`created_at` datetime NOT NULL
);
--> statement-breakpoint
CREATE TABLE `plan_coupons_apply` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`coupon_id` int(11) NOT NULL,
	`created_at` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `product_services` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` varchar(255) DEFAULT 'NULL',
	`details` text DEFAULT 'NULL',
	`image` varchar(255) DEFAULT 'NULL',
	`thumb` varchar(255) DEFAULT 'NULL',
	`orders` int(11) DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `referrals` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`referrar_id` varchar(255) NOT NULL,
	`order_id` varchar(255) NOT NULL,
	`amount` varchar(255) NOT NULL,
	`commision` varchar(255) NOT NULL,
	`commision_amount` varchar(255) NOT NULL,
	`created_at` varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `referral_payouts` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`payout_method` varchar(255) NOT NULL,
	`method_details` varchar(255) NOT NULL,
	`amount` bigint(20) NOT NULL,
	`transaction_id` varchar(255) DEFAULT 'NULL',
	`status` int(11) NOT NULL,
	`created_at` datetime NOT NULL
);
--> statement-breakpoint
CREATE TABLE `referral_settings` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`is_enable` varchar(255) NOT NULL,
	`referral_policy` text NOT NULL,
	`commision_rate` varchar(255) NOT NULL,
	`minimum_payout` varchar(255) DEFAULT 'NULL',
	`payment_method` varchar(255) NOT NULL,
	`referral_guideline` text DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `reviews` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`session_id` int(11) NOT NULL,
	`mentee_id` int(11) NOT NULL,
	`booking_id` int(11) NOT NULL,
	`feedback` varchar(255) NOT NULL,
	`rating` varchar(255) NOT NULL,
	`created_at` datetime NOT NULL
);
--> statement-breakpoint
CREATE TABLE `services` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`lang_id` varchar(155) DEFAULT 'NULL',
	`business_id` varchar(255) DEFAULT 'NULL',
	`user_id` int(11) NOT NULL,
	`category_id` int(11) NOT NULL,
	`title` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`details` longtext NOT NULL,
	`icon` varchar(155) DEFAULT 'NULL',
	`image` varchar(255) NOT NULL,
	`thumb` varchar(255) NOT NULL,
	`status` int(11) NOT NULL,
	`order` int(11) NOT NULL,
	`enable_booking` varchar(155) DEFAULT 'NULL',
	`price` decimal(10,2) DEFAULT 'NULL',
	`duration_type` varchar(155) DEFAULT 'NULL',
	`duration` varchar(155) DEFAULT 'NULL',
	`content_type` varchar(155) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `sessions` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`type` int(11) NOT NULL DEFAULT 1,
	`name` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`uid` varchar(255) NOT NULL,
	`details` text NOT NULL,
	`duration` varchar(255) NOT NULL,
	`price` varchar(255) NOT NULL,
	`total_slot` varchar(255) DEFAULT 'NULL',
	`slot_for` varchar(255) DEFAULT 'NULL',
	`session_number` varchar(255) DEFAULT 'NULL',
	`session_repeat` varchar(255) DEFAULT 'NULL',
	`skill_id` varchar(255) DEFAULT 'NULL',
	`allow_session` varchar(255) DEFAULT 'NULL',
	`is_public` varchar(255) DEFAULT 'NULL',
	`is_default` varchar(255) DEFAULT 'NULL',
	`enable_group_booking` int(11) DEFAULT 0,
	`group_booking_slot` int(11) DEFAULT 'NULL',
	`image` varchar(255) DEFAULT 'NULL',
	`thumb` varchar(255) DEFAULT 'NULL',
	`intro_video` varchar(255) DEFAULT 'NULL',
	`status` int(11) NOT NULL,
	`created_at` varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `session_booking` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`mentee_id` int(11) NOT NULL,
	`session_id` int(11) NOT NULL,
	`booking_number` varchar(255) NOT NULL,
	`price` varchar(255) DEFAULT 'NULL',
	`duration` varchar(255) DEFAULT 'NULL',
	`date` date NOT NULL,
	`time` varchar(255) DEFAULT 'NULL',
	`note` text DEFAULT 'NULL',
	`is_group` varchar(55) DEFAULT 'NULL',
	`status` int(11) DEFAULT 'NULL',
	`host_url` varchar(255) DEFAULT 'NULL',
	`join_url` varchar(255) DEFAULT 'NULL',
	`zoom_password` varchar(155) DEFAULT 'NULL',
	`is_start` varchar(55) NOT NULL DEFAULT '''0''',
	`type` varchar(155) NOT NULL DEFAULT '''online''',
	`pay_info` int(11) DEFAULT 'NULL',
	`payment_status` int(11) DEFAULT 'NULL',
	`sync_calendar` varchar(255) DEFAULT 'NULL',
	`sync_calendar_user` varchar(255) DEFAULT 'NULL',
	`created_at` datetime DEFAULT 'NULL',
	`confirm_date` varchar(155) DEFAULT 'NULL',
	`is_recurring` int(11) NOT NULL DEFAULT 0,
	`recurring_count` int(11) NOT NULL DEFAULT 0,
	`next_recur_date` varchar(155) DEFAULT 'NULL',
	`is_completed` int(11) NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `settings` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`site_name` varchar(255) DEFAULT 'NULL',
	`site_title` varchar(255) DEFAULT 'NULL',
	`site_title_mentor` varchar(255) DEFAULT 'NULL',
	`favicon` varchar(255) DEFAULT 'NULL',
	`logo` varchar(255) DEFAULT 'NULL',
	`hero_img` varchar(255) DEFAULT 'NULL',
	`keywords` varchar(255) DEFAULT 'NULL',
	`description` text DEFAULT 'NULL',
	`footer_about` text DEFAULT 'NULL',
	`admin_email` varchar(255) DEFAULT 'NULL',
	`mobile` varchar(255) DEFAULT 'NULL',
	`copyright` varchar(255) DEFAULT 'NULL',
	`pagination_limit` int(11) DEFAULT 'NULL',
	`facebook` varchar(255) DEFAULT 'NULL',
	`instagram` varchar(255) DEFAULT 'NULL',
	`twitter` varchar(255) DEFAULT 'NULL',
	`linkedin` varchar(255) DEFAULT 'NULL',
	`google_analytics` longtext DEFAULT 'NULL',
	`custom_css` longtext DEFAULT 'NULL',
	`site_color` varchar(255) DEFAULT 'NULL',
	`site_font` varchar(255) DEFAULT 'NULL',
	`layout` int(11) DEFAULT 'NULL',
	`about_info` mediumtext DEFAULT 'NULL',
	`ind_code` varchar(255) DEFAULT 'NULL',
	`purchase_code` varchar(255) DEFAULT 'NULL',
	`link` varchar(255) DEFAULT 'NULL',
	`pwa_logo` varchar(155) DEFAULT 'NULL',
	`enable_pwa` int(11) DEFAULT 0,
	`enable_captcha` int(11) NOT NULL DEFAULT 0,
	`enable_workflow` int(11) NOT NULL DEFAULT 1,
	`enable_feature` int(11) NOT NULL,
	`enable_users` int(11) NOT NULL DEFAULT 1,
	`enable_blog` int(11) NOT NULL,
	`enable_faq` int(11) NOT NULL,
	`enable_animation` int(11) DEFAULT 1,
	`enable_registration` int(11) NOT NULL,
	`enable_payment` int(11) NOT NULL,
	`enable_paypal` int(11) NOT NULL DEFAULT 0,
	`enable_email_verify` int(11) NOT NULL,
	`enable_sms_verify` int(11) DEFAULT 'NULL',
	`enable_mentor_auto_approve` int(11) DEFAULT 'NULL',
	`check_email_verify_user` varchar(155) DEFAULT '''0''',
	`enable_multilingual` int(11) DEFAULT 0,
	`enable_frontend` varchar(155) DEFAULT '''1''',
	`enable_lifetime` varchar(155) DEFAULT '''0''',
	`enable_coupon` int(11) DEFAULT 0,
	`enable_kyc` varchar(5) DEFAULT '''0''',
	`captcha_type` int(11) DEFAULT 'NULL',
	`captcha_site_key` varchar(255) DEFAULT 'NULL',
	`captcha_secret_key` varchar(255) DEFAULT 'NULL',
	`paypal_email` varchar(255) DEFAULT 'NULL',
	`paypal_payment` int(11) DEFAULT 0,
	`stripe_payment` int(11) DEFAULT 0,
	`publish_key` varchar(255) DEFAULT 'NULL',
	`secret_key` varchar(255) DEFAULT 'NULL',
	`paystack_payment` varchar(155) DEFAULT '''0''',
	`paystack_secret_key` varchar(255) DEFAULT 'NULL',
	`paystack_public_key` varchar(255) DEFAULT 'NULL',
	`razorpay_payment` varchar(155) DEFAULT '''0''',
	`razorpay_key_id` varchar(255) DEFAULT 'NULL',
	`razorpay_key_secret` varchar(255) DEFAULT 'NULL',
	`flutterwave_payment` int(11) DEFAULT 0,
	`flutterwave_public_key` varchar(255) DEFAULT 'NULL',
	`flutterwave_secret_key` varchar(255) DEFAULT 'NULL',
	`mercado_payment` int(11) DEFAULT 0,
	`mercado_api_key` varchar(255) DEFAULT 'NULL',
	`mercado_token` varchar(255) DEFAULT 'NULL',
	`mercado_currency` varchar(155) DEFAULT 'NULL',
	`paypal_mode` varchar(255) DEFAULT '''sandbox''',
	`openai_key` varchar(255) DEFAULT 'NULL',
	`openai_model` varchar(255) DEFAULT 'NULL',
	`twillo_account_sid` varchar(255) DEFAULT 'NULL',
	`twillo_auth_token` varchar(255) DEFAULT 'NULL',
	`twillo_number` varchar(255) DEFAULT 'NULL',
	`enable_sms` int(11) NOT NULL,
	`enable_whatsapp_msg` int(11) DEFAULT 0,
	`ultramsg_instance_id` varchar(255) DEFAULT 'NULL',
	`ultramsg_token` varchar(255) DEFAULT 'NULL',
	`enable_wallet` varchar(155) DEFAULT '''0''',
	`min_payout_amount` varchar(155) DEFAULT '''0''',
	`commission_rate` varchar(155) DEFAULT '''0''',
	`paypal_payout` varchar(155) DEFAULT '''1''',
	`iban_payout` varchar(155) DEFAULT '''1''',
	`swift_payout` varchar(155) DEFAULT '''1''',
	`google_client_id` text DEFAULT 'NULL',
	`google_client_secret` varchar(255) DEFAULT 'NULL',
	`enable_offline_payment` varchar(255) DEFAULT '''0''',
	`offline_details` text DEFAULT 'NULL',
	`zoom_account_id` varchar(155) DEFAULT 'NULL',
	`zoom_client_id` varchar(155) DEFAULT 'NULL',
	`zoom_client_secret` varchar(255) DEFAULT 'NULL',
	`enable_wildapricot_sso` int(11) DEFAULT 'NULL',
	`wildapricot_domain` varchar(255) DEFAULT 'NULL',
	`wildapricot_account_id` varchar(255) NOT NULL,
	`wildapricot_client_id` varchar(255) NOT NULL,
	`wildapricot_client_secret` varchar(255) NOT NULL,
	`wildapricot_button_text` varchar(155) DEFAULT 'NULL',
	`mail_protocol` varchar(255) DEFAULT 'NULL',
	`mail_title` varchar(255) DEFAULT 'NULL',
	`mail_host` varchar(255) DEFAULT 'NULL',
	`mail_port` varchar(255) DEFAULT 'NULL',
	`mail_encryption` varchar(255) DEFAULT '''ssl''',
	`mail_username` varchar(255) DEFAULT 'NULL',
	`mail_password` varchar(255) DEFAULT 'NULL',
	`is_smtp` int(11) DEFAULT 1,
	`chart_style` varchar(255) NOT NULL DEFAULT '''style1''',
	`num_format` varchar(155) DEFAULT '''0''',
	`curr_locate` varchar(155) DEFAULT '''0''',
	`country` int(11) NOT NULL DEFAULT 178,
	`site_info` int(11) DEFAULT 'NULL',
	`lang` int(11) NOT NULL DEFAULT 1,
	`trial_days` varchar(155) DEFAULT '''0''',
	`tax_name` varchar(255) DEFAULT 'NULL',
	`tax_value` varchar(255) DEFAULT 'NULL',
	`type` varchar(255) NOT NULL DEFAULT '''live''',
	`time_zone` int(11) DEFAULT 1,
	`version` varchar(255) NOT NULL DEFAULT '''v1.1'''
);
--> statement-breakpoint
CREATE TABLE `skills` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`skill` varchar(500) NOT NULL,
	`category_id` varchar(255) NOT NULL,
	`details` text DEFAULT 'NULL',
	`status` varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tags` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`post_id` int(11) DEFAULT 'NULL',
	`tag` varchar(255) DEFAULT 'NULL',
	`tag_slug` varchar(255) DEFAULT 'NULL',
	`created_at` varchar(255) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `testimonials` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`lang_id` varchar(155) NOT NULL DEFAULT '''1''',
	`business_id` varchar(255) DEFAULT 'NULL',
	`type` varchar(155) NOT NULL DEFAULT '''admin''',
	`name` varchar(255) DEFAULT 'NULL',
	`designation` varchar(255) DEFAULT 'NULL',
	`feedback` text DEFAULT 'NULL',
	`image` varchar(255) DEFAULT 'NULL',
	`thumb` varchar(255) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `time_zone` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` varchar(35) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`parent_id` int(11) NOT NULL,
	`name` varchar(255) DEFAULT 'NULL',
	`slug` varchar(255) DEFAULT 'NULL',
	`balance` bigint(20) DEFAULT 0,
	`total_sales` bigint(20) DEFAULT 0,
	`email` varchar(255) DEFAULT 'NULL',
	`user_name` varchar(255) DEFAULT 'NULL',
	`password` varchar(255) DEFAULT 'NULL',
	`role` varchar(100) DEFAULT '''user''',
	`account_type` varchar(255) DEFAULT 'NULL',
	`user_type` varchar(100) DEFAULT '''registered''',
	`trial_expire` date DEFAULT 'NULL',
	`phone` varchar(255) DEFAULT 'NULL',
	`address` text DEFAULT 'NULL',
	`email_verified` int(11) DEFAULT 0,
	`is_active` int(11) DEFAULT 0,
	`last_active` varchar(255) DEFAULT 'NULL',
	`last_logout` varchar(255) DEFAULT 'NULL',
	`total_attendence` int(11) DEFAULT 0,
	`attendence_date` varchar(255) DEFAULT 'NULL',
	`respond_in` varchar(255) DEFAULT 'NULL',
	`respond_time` varchar(255) DEFAULT 'NULL',
	`verify_code` varchar(255) DEFAULT 'NULL',
	`phone_verified` varchar(255) DEFAULT '''0''',
	`kyc_verified` varchar(5) DEFAULT '''0''',
	`sms_count` varchar(255) DEFAULT '''0''',
	`image` varchar(255) DEFAULT 'NULL',
	`thumb` varchar(255) DEFAULT 'NULL',
	`cover` varchar(255) DEFAULT 'NULL',
	`status` int(11) DEFAULT 0,
	`country` int(11) DEFAULT 'NULL',
	`currency` varchar(255) DEFAULT '''USD''',
	`about_me` varchar(5000) DEFAULT 'NULL',
	`gender` varchar(255) DEFAULT 'NULL',
	`language` varchar(255) DEFAULT 'NULL',
	`skill` varchar(500) DEFAULT 'NULL',
	`category` varchar(255) DEFAULT 'NULL',
	`level` varchar(255) DEFAULT 'NULL',
	`experience_year` varchar(255) DEFAULT 'NULL',
	`meet_type` varchar(155) DEFAULT '''zoom''',
	`gmeet_url` varchar(255) DEFAULT 'NULL',
	`company` varchar(255) DEFAULT 'NULL',
	`designation` varchar(255) DEFAULT 'NULL',
	`linkedin_profile` varchar(255) DEFAULT 'NULL',
	`facebook_profile` varchar(255) DEFAULT 'NULL',
	`instagram_profile` varchar(255) DEFAULT 'NULL',
	`x_profile` varchar(255) DEFAULT 'NULL',
	`portfolio` varchar(255) DEFAULT 'NULL',
	`intro_video` varchar(255) DEFAULT 'NULL',
	`time_zone` varchar(255) DEFAULT 'NULL',
	`google_analytics` text DEFAULT 'NULL',
	`enable_appointment` int(11) DEFAULT 1,
	`enable_rating` int(11) DEFAULT 1,
	`enable_sms_notify` varchar(255) DEFAULT '''0''',
	`enable_sms_alert` varchar(255) DEFAULT '''0''',
	`check_email_verify_user` varchar(255) DEFAULT 'NULL',
	`intervals` varchar(255) DEFAULT 'NULL',
	`holidays` longtext DEFAULT 'NULL',
	`date_format` varchar(255) DEFAULT '''d M Y''',
	`created_at` datetime DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `users_payout_accounts` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) DEFAULT 'NULL',
	`payout_paypal_email` varchar(255) DEFAULT 'NULL',
	`payout_bank_info` mediumtext DEFAULT 'NULL',
	`iban_full_name` varchar(255) DEFAULT 'NULL',
	`iban_country_id` varchar(20) DEFAULT 'NULL',
	`iban_bank_name` varchar(255) DEFAULT 'NULL',
	`iban_number` varchar(500) DEFAULT 'NULL',
	`swift_full_name` varchar(255) DEFAULT 'NULL',
	`swift_address` varchar(500) DEFAULT 'NULL',
	`swift_state` varchar(255) DEFAULT 'NULL',
	`swift_city` varchar(255) DEFAULT 'NULL',
	`swift_postcode` varchar(100) DEFAULT 'NULL',
	`swift_country_id` varchar(20) DEFAULT 'NULL',
	`swift_bank_account_holder_name` varchar(255) DEFAULT 'NULL',
	`swift_iban` varchar(255) DEFAULT 'NULL',
	`swift_code` varchar(255) DEFAULT 'NULL',
	`swift_bank_name` varchar(255) DEFAULT 'NULL',
	`swift_bank_branch_city` varchar(255) DEFAULT 'NULL',
	`swift_bank_branch_country_id` varchar(20) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `users_skill` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`skill_id` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `workflows` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`details` text DEFAULT 'NULL',
	`image` varchar(255) NOT NULL,
	`thumb` varchar(255) NOT NULL,
	`status` int(11) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_zone_name` ON `time_zone` (`name`);--> statement-breakpoint
CREATE INDEX `idx_user_id` ON `users_payout_accounts` (`user_id`);
*/
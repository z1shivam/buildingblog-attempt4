CREATE TABLE IF NOT EXISTS "z1_categories" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text,
	CONSTRAINT "z1_categories_id_unique" UNIQUE("id"),
	CONSTRAINT "z1_categories_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "postCategory" (
	"post_id" uuid,
	"category_id" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "z1_posts" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"author" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "z1_users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"hashed_password" text,
	CONSTRAINT "z1_users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "postCategory" ADD CONSTRAINT "postCategory_post_id_z1_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."z1_posts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "postCategory" ADD CONSTRAINT "postCategory_category_id_z1_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."z1_categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

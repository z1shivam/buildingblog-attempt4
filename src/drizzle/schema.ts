import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const usersTable = pgTable("z1_users", {
  id: uuid("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  hashedPassword: text("hashed_password"),
});

export const postsTable = pgTable("z1_posts", {
  id: uuid("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  author: text("author").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export const categoriesTable = pgTable("z1_categories", {
  id: uuid("id").unique().primaryKey(),
  name: text("name").unique(),
});

export const postCategory = pgTable("postCategory", {
  postId: uuid("post_id").references(() => postsTable.id),
  categoryId: uuid("category_id").references(() => categoriesTable.id),
});
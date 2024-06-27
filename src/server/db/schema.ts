import {
  index,
  integer,
  sqliteTableCreator,
  text,
} from "drizzle-orm/sqlite-core";
import { v4 as uuid } from "uuid";

export const createTable = sqliteTableCreator((name) => `z1blog_${name}`);

export const blogs = createTable(
  "blog",
  {
    id: text("id").default(`${uuid()}`).unique().primaryKey(),
    slug: text("slug").unique().notNull(),
    title: text("title", { length: 256 }),
    featuredImage: text("featured_image"),
    author: text("author", { enum: ["Shivam Kumar"] }),
    content: text("content"),
    isDraft: integer("isDraft", { mode: "boolean" }),
    createdAt: text("created_at").default(Date.now().toString()).notNull(),
    updatedAt: text("updatedAt"),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.title),
  }),
);

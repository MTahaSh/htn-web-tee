import { pgTable, varchar, integer } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

export const cartTable = pgTable("cart", {
  user_id: varchar("user_id", {
    length: 255,
  }).notNull(),
  email: varchar("email", {
    length: 255,
  }).notNull(),
  quantity: integer("quantity").notNull(),
});

export const db = drizzle(sql, {
  schema: {
    cartTable,
  },
});

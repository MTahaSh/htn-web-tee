import { pgTable, varchar, integer } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  serial,
  text,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core"

export const cartTable = pgTable("cart", {
  user_id: varchar("user_id", {
    length: 255,
  }).primaryKey().notNull(),
  session_id: varchar("session_id", {
    length: 255,
  }),

});

export const cartNewTable = pgTable("cartnew", {
  id: serial("id").primaryKey().notNull(),
  user_id: varchar("user_id", {
    length: 255,
  }),
  product_qty: varchar("product_qty", {
    length: 255,
  }),
  product_id: varchar("product_id", {
    length: 255,
  }),
  qty: integer("qty"),


});


export const db = drizzle(sql, {
  schema: {
    cartTable,cartNewTable
  },
});

// export const getCart = async () => {
//   const selectResult = await db.select().from(cartTable);
//   console.log('Results', selectResult);
// };

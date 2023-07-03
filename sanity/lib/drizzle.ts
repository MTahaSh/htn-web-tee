import { pgTable, varchar, integer } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

export const cartTable = pgTable("cart", {
  user_id: varchar("user_id", {
    length: 255,
  }).primaryKey().notNull(),
  session_id: varchar("session_id", {
    length: 255,
  }),

});

export const db = drizzle(sql, {
  schema: {
    cartTable,
  },
});

// export const getCart = async () => {
//   const selectResult = await db.select().from(cartTable);
//   console.log('Results', selectResult);
// };

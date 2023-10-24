// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

//import { sql } from "drizzle-orm";
import {
  bigint,
  index,
  mysqlTableCreator,
  varchar,
} from "drizzle-orm/mysql-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const mysqlTable = mysqlTableCreator((name) => `flashcards_${name}`);

export const cards = mysqlTable(
  "card",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    front: varchar("front", { length: 256 }),
    back: varchar("back", { length: 256 }),
  },
  (example) => ({
    frontIndex: index("front_idx").on(example.front),
  }),
);

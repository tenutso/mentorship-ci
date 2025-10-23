import { drizzle } from "drizzle-orm/mysql2";
export { sql, eq, and, or, like, SQL, desc } from "drizzle-orm";
import * as schema from "../database/schema";

export const tables = schema;

export function useDrizzle() {
  return drizzle({ connection: { uri: process.env.DATABASE_URL } }, { schema });
}

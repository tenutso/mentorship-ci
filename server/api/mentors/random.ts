import { SQL } from "~~/server/utils/drizzle";

const db = useDrizzle();
export default defineEventHandler(async () => {
  const filters: SQL[] = [];
  filters.push(eq(tables.users.role, "user"));
  filters.push(eq(tables.users.status, 1));
  const mentors = await db
    .select()
    .from(tables.users)
    .where(and(...filters));

  const randomMentors = mentors.sort(() => 0.5 - Math.random()).slice(0, 5);

  return randomMentors;
});

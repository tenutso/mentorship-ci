const db = useDrizzle();
export default defineEventHandler(async (event) => {
  const userCount = sql<number>`count(${tables.users.id})`.as("cnt");

  // 2. Build the query
  const catCount = await db
    .select({
      // This is 'cat.*'
      id: tables.categories.id,
      name: tables.categories.name,
      slug: tables.categories.slug,
      // This is 'u.role'
      role: tables.users.role,
      // This is 'COUNT(u.id) as cnt'
      cnt: userCount,
    })
    .from(tables.categories)
    .innerJoin(tables.users, eq(tables.users.category, tables.categories.id)) // JOIN users...
    .where(eq(tables.users.role, "user")) // WHERE u.role = 'user'
    .groupBy(tables.categories.id) // GROUP BY cat.id (REQUIRED)
    .orderBy(desc(userCount)); // ORDER BY cnt DESC

  // catCount is now an array of objects, e.g.:
  // [
  //   { id: 1, name: 'Devs', role: 'user', cnt: 150 },
  //   { id: 2, name: 'Design', role: 'user', cnt: 95 },
  //   ...
  // ]

  return catCount;
});

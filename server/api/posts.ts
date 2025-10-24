import { desc } from "drizzle-orm";

const db = useDrizzle();

export default defineEventHandler(async (event) => {
  const query = db
    .select({
      // b.*
      ...tables.blogs,
      // c.slug as category_slug, c.name as category, u.role
      category_slug: tables.categories.slug,
      category: tables.categories.name,
      role: tables.users.role,
    })
    .from(tables.blogs)
    .leftJoin(
      tables.categories,
      eq(tables.categories.id, tables.blogs.categoryId)
    )
    .leftJoin(tables.users, eq(tables.users.id, tables.blogs.userId))
    .where(and(eq(tables.blogs.status, 1), eq(tables.blogs.businessId, "")))
    .limit(3)
    .groupBy(tables.blogs.id)
    .orderBy(desc(tables.blogs.id)); // 'desc' is imported from drizzle-orm

  // --- Execute the query ---
  const results = await query;

  return results;
});

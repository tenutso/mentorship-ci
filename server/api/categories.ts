const db = useDrizzle();
export default defineEventHandler(async () => {
  const categories = await db.select().from(tables.categories);
  return categories;
});

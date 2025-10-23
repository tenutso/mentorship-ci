const db = useDrizzle();
export default defineEventHandler(async () => {
  const brands = await db.select().from(tables.brands);
  return brands;
});

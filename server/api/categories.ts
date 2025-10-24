const db = useDrizzle();
export default defineEventHandler(async () => {
  const categories = await db.select().from(tables.categories);
  //console.log(categories);

  return categories;
});

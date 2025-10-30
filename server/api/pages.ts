const db = useDrizzle();
export default defineEventHandler(async () => {
  const pages = await db.select().from(tables.pages);
  //console.log(workflows);
  return pages;
});

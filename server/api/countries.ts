const db = useDrizzle();
export default defineEventHandler(async () => {
  const countries = await db.select().from(tables.country);
  //console.log(countries);
  return countries;
});

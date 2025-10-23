const db = useDrizzle();
export default defineEventHandler(async () => {
  const features = await db.select().from(tables.productServices);
  return features;
});

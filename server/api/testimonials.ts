const db = useDrizzle();
export default defineEventHandler(async () => {
  const testimonials = await db.select().from(tables.testimonials);
  return testimonials;
});

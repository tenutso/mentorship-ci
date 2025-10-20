import prisma from "~~/lib/prisma";
export default defineEventHandler(async () => {
  const testimonials = await prisma.testimonials.findMany({});
  return testimonials;
});

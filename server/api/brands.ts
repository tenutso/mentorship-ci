import prisma from "~~/lib/prisma";
export default defineEventHandler(async () => {
  const brands = await prisma.brands.findMany({});
  return brands;
});

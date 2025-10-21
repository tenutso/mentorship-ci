import prisma from "~~/lib/prisma";
export default defineEventHandler(async () => {
  const categories = await prisma.categories.findMany({});
  return categories;
});

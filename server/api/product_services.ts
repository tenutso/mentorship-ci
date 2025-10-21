import prisma from "~~/lib/prisma";
export default defineEventHandler(async () => {
  const features = await prisma.product_services.findMany({});
  return features;
});

import prisma from "~~/lib/prisma";
export default defineEventHandler(async () => {
  const features = await prisma.features.findMany({});
  return features;
});

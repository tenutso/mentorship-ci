import { ca } from "@nuxt/ui/runtime/locale/index.js";
import prisma from "~~/lib/prisma";
export default defineEventHandler(async () => {
  const categories = await prisma.categories.findMany({});
  return categories;
});

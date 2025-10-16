import prisma from "~~/lib/prisma";
export default defineEventHandler(async () => {
  const workflows = await prisma.workflows.findMany({});
  return { success: true, data: workflows };
});

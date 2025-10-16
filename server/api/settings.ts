import prisma from "~~/lib/prisma";
export default defineEventHandler(async (event) => {
  //const prisma = usePrismaClient();
  const settings = await prisma.settings.findFirst();
  return {
    settings,
  };
});

//import { useDrizzle } from "~~/server/utils/drizzle";
const db = useDrizzle();
export default defineEventHandler(async (event) => {
  //const prisma = usePrismaClient();

  const settings = await db.query.settings.findFirst();

  const siteFont = await db.query.fonts.findFirst({
    where: eq(tables.fonts.id, 1),
  }); // should be settings.siteFont

  return { settings, siteFont };
});

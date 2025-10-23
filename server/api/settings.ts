const db = useDrizzle();
export default defineEventHandler(async (event) => {
  //const prisma = usePrismaClient();
  const settings = await db.select().from(tables.settings);

  return {
    settings: settings[0],
  };
});

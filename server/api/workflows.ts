const db = useDrizzle();
export default defineEventHandler(async () => {
  const workflows = await db.select().from(tables.workflows);
  //console.log(workflows);
  return workflows;
});

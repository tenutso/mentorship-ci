const db = useDrizzle();
export default defineEventHandler(async () => {
  const translations = await db.select().from(tables.langValues);
  
  const transObj = {};
  translations.forEach(item => {
    Object.assign(transObj, {[item.keyword]:item.english});
  })
  //const trans = translations.map(item => { return {[item.keyword]:item.english} });
  //console.log("TRANSLATIONS:", transObj);
  return  transObj;
});

import { eq, and, or, like, SQL } from "~~/server/utils/drizzle";

const db = useDrizzle();

interface SearchParams {
  mentor_search_name?: string;
  mentor_search_country?: string;
  mentor_search_experience?: string;
  mentor_search_skill?: string;
  category?: string;
  search_name?: string;
  search_category?: string;
  search_country?: string;
}

export default defineEventHandler(async (event) => {
  // Drizzle builds queries dynamically using an array of conditions
  const conditions: (SQL | undefined)[] = [];

  const params = <SearchParams>event.context.params;

  // --- Static WHERE clauses ---
  conditions.push(eq(tables.users.role, "user"));
  conditions.push(eq(tables.users.status, 1));

  // --- Dynamic WHERE/LIKE clauses ---
  if (params.mentor_search_name) {
    conditions.push(like(tables.users.name, `%${params.mentor_search_name}%`));
  }
  if (params.mentor_search_country) {
    conditions.push(eq(tables.users.country, params.mentor_search_country));
  }
  if (params.mentor_search_experience) {
    // Ensure the parameter is a number
    const expYear = parseInt(params.mentor_search_experience, 10);
    if (!isNaN(expYear)) {
      conditions.push(eq(tables.users.experienceYear, expYear));
    }
  }
  if (params.mentor_search_skill) {
    // Ensure the parameter is a number
    const skillId = parseInt(params.mentor_search_skill, 10);
    if (!isNaN(skillId)) {
      conditions.push(eq(tables.usersSkill.skillId, skillId));
    }
  }
  if (params.category) {
    conditions.push(eq(tables.categories.slug, params.category));
  }

  // --- OR_LIKE condition ---
  if (params.search_name) {
    conditions.push(
      or(
        like(tables.users.name, `%${params.search_name}%`),
        like(tables.users.language, `%${params.search_name}%`)
      )
    );
  }

  if (params.search_category) {
    // Ensure the parameter is a number
    const catId = parseInt(params.search_category, 10);
    if (!isNaN(catId)) {
      conditions.push(eq(tables.users.category, catId));
    }
  }
  if (params.search_country) {
    conditions.push(eq(tables.users.country, params.search_country));
  }

  // --- Build the final query ---
  const query = db
    .select({
      // Select all columns from 'users' (equiv. to u.*)
      ...tables.users,
      // Select and alias specific columns
      skillId: tables.usersSkill.skillId,
      category_slug: tables.categories.slug,
    })
    .from(tables.users)
    .leftJoin(tables.usersSkill, eq(tables.users.id, tables.usersSkill.userId))
    .leftJoin(
      tables.categories,
      eq(tables.users.category, tables.categories.id)
    )
    .where(and(...conditions)) // Apply all conditions
    .groupBy(tables.users.id);

  // --- Execute the query ---
  const results = await query;

  // results is an array of objects, just like CI's $query->result()
  return results;
});

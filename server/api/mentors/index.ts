import prisma from "~~/lib/prisma";
import { getQuery } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);

    const filters: any = {
      role: "user",
      status: 1,
    };

    if (query.mentor_search_name) {
      filters.name = {
        contains: String(query.mentor_search_name),
        mode: "insensitive",
      };
    }

    if (query.mentor_search_country) {
      filters.country = String(query.mentor_search_country);
    }

    if (query.mentor_search_experience) {
      filters.experienceYear = Number(query.mentor_search_experience);
    }

    if (query.search_name) {
      filters.OR = [
        { name: { contains: String(query.search_name), mode: "insensitive" } },
        {
          language: {
            contains: String(query.search_name),
            mode: "insensitive",
          },
        },
      ];
    }

    if (query.search_country) {
      filters.country = String(query.search_country);
    }

    if (query.search_category) {
      filters.categoryId = Number(query.search_category);
    }

    if (query.category) {
      filters.category = { slug: String(query.category) };
    }

    const mentors = await prisma.user.findMany({
      where: filters,
      include: {
        skills: {
          select: { skillId: true },
        },
        category: {
          select: { slug: true },
        },
      },
      orderBy: { id: "asc" },
      distinct: ["id"], // group by id
    });

    return { success: true, data: mentors };
  } catch (error) {
    console.error("Error fetching mentors:", error);
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: "Server error" })
    );
  }
});

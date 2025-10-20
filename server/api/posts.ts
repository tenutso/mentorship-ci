import prisma from "../../lib/prisma";
export default defineEventHandler(async (event) => {
  //const prisma = usePrismaClient();
  const posts = await prisma.blogs.findMany({
    where: {
      status: 1,
      business_id: "", // equivalent to `b.business_id = ''`
    },
    include: {
      category: {
        select: {
          slug: true,
          name: true,
        },
      },
      users: {
        select: {
          role: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
    take: 3, // equivalent to LIMIT 3
  });

  return {
    posts,
  };
});

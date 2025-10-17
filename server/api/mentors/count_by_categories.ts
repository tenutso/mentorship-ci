import prisma from "~~/lib/prisma";
export default defineEventHandler(async (event) => {
  const { node } = event;
  const mentors = await prisma.users.findMany({
    where: {
      role: "user",
      status: 1,
      category_id: node.req.id,
    },
    select: { image: true },
  });

  return { success: true, data: mentors.length };
});

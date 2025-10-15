import prisma from "~~/lib/prisma";
export default defineEventHandler(async () => {
  const mentors = await prisma.users.findMany({
    where: {
      role: "user",
      status: 1,
    },
    select: { image: true },
  });

  const randomMentors = mentors.sort(() => 0.5 - Math.random()).slice(0, 5);
  console.log("RANDOM: ", randomMentors);
  return { success: true, data: randomMentors };
});

import prisma from "~~/lib/prisma";

export default defineEventHandler(async (event) => {
  interface BigInt {
    toJSON(): string;
  }

  BigInt.prototype.toJSON = function () {
    return String(this);
  };
  const catCount = await prisma.$queryRaw`
  SELECT cat.*, u.role, COUNT(u.id) as cnt FROM categories as cat
  JOIN users u on u.category = cat.id
  WHERE u.role = 'user'
  ORDER BY cnt DESC
  `;

  return catCount;
});

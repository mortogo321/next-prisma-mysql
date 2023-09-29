import prisma from "..";

export const getTodos = async () => {
  return await prisma.todo.findMany({
    include: {
      user: true,
      tags: true,
    },
  });
};

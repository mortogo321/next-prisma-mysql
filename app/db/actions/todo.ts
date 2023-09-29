import prisma from "..";
import { CreateTodoType } from "../types/todo";

export const getTodos = async () => {
  return await prisma.myTodo.findMany({
    select: {
      id: true,
      title: true,
      completed: true,
    },
  });
};

export const createTodo = async (data: CreateTodoType) => {
  try {
    console.log({ data });
    return await prisma.myTodo.create({ data });
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};

export const updateTodo = async (id: number, completed: boolean) => {
  try {
    return await prisma.myTodo.update({
      where: { id },
      data: { completed },
    });
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};

export const deleteTodo = async (id: number) => {
  try {
    return await prisma.myTodo.delete({
      where: { id },
    });
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};

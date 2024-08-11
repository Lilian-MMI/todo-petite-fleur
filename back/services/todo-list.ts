import prisma from '../config/orm';

export const getTodoList = async () => {
  return await prisma.todoList.findMany({});
};

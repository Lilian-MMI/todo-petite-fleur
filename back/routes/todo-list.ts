import { getTodoList } from '../services/todo-list';
import { publicProcedure, router } from '../trpc';

export const todoList = router({
  todolists: publicProcedure.query(() => {
    return getTodoList();
  }),
});

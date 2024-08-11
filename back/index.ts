import { todoList } from './routes/todo-list';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';

const server = createHTTPServer({
    router: todoList,
    middleware: cors(),
});

export type AppRouter = typeof todoList;

server.listen(3000);

// create /todo-list {name: 'act'}
// create /todo { name: 'acheter brosse 0 dent', todoListId: '1' }

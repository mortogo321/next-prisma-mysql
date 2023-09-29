import Link from "next/link";
import TodoItem from "./components/todo-item";
import { getTodos, updateTodo } from "./db/actions/todo";

async function toggleTodo(id: number, completed: boolean) {
  "use server";
  await updateTodo(id, completed);
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <section>
      <div className="w-1/3 flex justify-between items-center">
        <h1 className="mb-4 text-xl font-bold">Todo</h1>
        <Link
          href="/todo"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          New
        </Link>
      </div>

      <ul className="w-1/3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </section>
  );
}

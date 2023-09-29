"use client";

type TodoItemProps = {
  id: number;
  title: string;
  completed: boolean;
  toggleTodo: (id: number, completed: boolean) => void;
};

export default function TodoItem({ id, title, completed, toggleTodo }: TodoItemProps) {
  return (
    <li key={id} className={`w-full flex justify-between items-center gap-1 px-4 py-2 border-b last:border-b-0 border-gray-200 first:rounded-t-lg dark:border-gray-600 last:dark:border-transparent`}>
      <div className="">
        <input
          type="checkbox"
          id={`todo-${id}`}
          defaultChecked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer"
        />
        <label htmlFor={`todo-${id}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize peer-checked:line-through peer-checked:text-slate-500">
          {title}
        </label>
      </div>
      <button
        type="button"
        className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg className="w-3 h-3 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
        </svg>
      </button>
    </li>
  );
}

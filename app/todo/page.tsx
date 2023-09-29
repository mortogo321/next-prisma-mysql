import { redirect } from "next/navigation";
import { z } from "zod";
import { createTodo } from "../db/actions/todo";

const schema = z.object({
  title: z.string(),
  completed: z.boolean(),
});

async function submit(form: FormData) {
  "use server";

  const formData = {
    ...Object.fromEntries(form.entries()),
    completed: !!form.get("completed"),
  };

  const parsed = schema.safeParse(formData);

  if (parsed.success === false) {
    console.log({ error: parsed.error.format() });
  }

  try {
    await createTodo(parsed.data);
    redirect("/");
  } catch (e) {
    return { message: "Failed to create" };
  }
}

export default async function Todo() {
  return (
    <div className="w-1/2">
      <form action={submit}>
        <div className="mb-6">
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="completed"
              name="completed"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label htmlFor="completed" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Completed
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

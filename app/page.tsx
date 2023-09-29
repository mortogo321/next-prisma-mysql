import { getTodos } from "./db/actions/todo";

export default async function Home() {
  const todos = await getTodos();
  console.log({ todos });
  
  return (
    <h1>Hello</h1>
  );
}

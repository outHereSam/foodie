import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Foodie" },
    { name: "description", content: "Welcome to Foodie!" },
  ];
}

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <h1 className="flex items-center gap-2">Welcome to foodie! <div className="i-solar:cup-paper-bold-duotone"></div></h1>
    </main>
  );
}

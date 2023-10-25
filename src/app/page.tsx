import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.card.test.query({ text: "from tRPC" });
  const name = await api.card.getName.query();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="text-3xl font-bold">Flashcards</h1>
      <p>{hello.greeting}</p>
      <p>{name}</p>
    </main>
  );
}

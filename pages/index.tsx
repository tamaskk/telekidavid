import HomePage from "@/components/Home";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
    <main className="w-screen h-screen overflow-hidden">
      <Nav />
      <div className="w-screen h-full flex flex-col items-center justify-center">
        <HomePage />
      </div>
    </main>
    </>
  );
}

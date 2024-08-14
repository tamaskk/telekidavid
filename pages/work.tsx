import Nav from "@/components/Nav";
import WorkPage from "@/components/WorkPage";

export default function Work() {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <Nav />
      <div className="w-screen h-screen flex flex-col items-center justify-center">
      <WorkPage />
      </div>
    </main>
  );
}

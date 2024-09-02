import Nav from "@/components/Nav";
import UberMinch from "@/components/Uber";

export default function Uber() {
  return (
    <main className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Nav />
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <UberMinch />
      </div>
    </main>
  );
}

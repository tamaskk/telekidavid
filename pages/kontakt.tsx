import KontaktPage from "@/components/Kontakt";
import Nav from "@/components/Nav";

export default function Kontakt() {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <Nav />
      <div className="w-screen h-screen flex flex-col items-start justify-center">
        <KontaktPage />
      </div>
    </main>
  );
}

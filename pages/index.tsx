import HomePage from "@/components/Home";
import Nav from "@/components/Nav";
import { I18nextProvider } from "react-i18next";
import configFile from "../i18n/config";

export default function Home() {
  return (
    <>
      <I18nextProvider i18n={configFile}>
        <main className="w-screen h-screen overflow-hidden">
          <Nav />
          <div className="w-screen h-full flex flex-col items-center justify-center">
            <HomePage />
          </div>
        </main>
      </I18nextProvider>
    </>
  );
}

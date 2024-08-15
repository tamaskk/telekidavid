import MenuIcon from "@mui/icons-material/Menu";
import { Crimson_Text } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import logo from "../assets/davidtelekilogo.png";

const Crimson = Crimson_Text({
  weight: ["400", "600", "700"], // vagy ['400', '600', '700'] ha több súlyt szeretnél használni
  subsets: ["latin-ext"],
});

const Nav = () => {
  const router = useRouter();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <div className="relative sm:hidden top-0 left-0 w-screen flex flex-row items-center justify-between py-5 px-5 z-20 bg-[#161616]">
        <Image
          src={logo}
          alt="logo"
          width={47}
          height={56}
          className="z-20 sm:hidden"
        />
        <MenuIcon className="text-2xl text-white" onClick={() => setIsOpened(!isOpened)} />
      </div>
      <nav
        className={`h-auto max-sm:fixed ${
          isOpened ? "max-sm:translate-y-[86px]" : "max-sm:-translate-y-[200%]"
        } transition-all duration-300 max-sm:bg-[#161616] max-sm:h-auto max-sm:z-40 max-sm:top-0 max-sm:right-0 px-2 sm:px-[80px] py-[32px] flex flex-col sm:flex-row items-center bg-transparent justify-center sm:justify-between w-screen fixed top-0 left-0 z-10 ${
          Crimson.className
        }`}
      >
        <Image src={logo} alt="logo" className="max-sm:hidden" width={150} height={150} />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start max-sm:w-full sm:justify-center gap-6 sm:gap-20 bg-transparent">
          <button
            onClick={() => {
              setIsOpened(false);
              router.push("/");
            }}
            className={`px-4 text-white max-sm:text-[18px] text-[32px] cursor-pointer font-bold hover:text-[#F2F2F2] hover:text-opacity-50 rounded-full transition-all duration-300 ${
              router.pathname === "/" && "bg-white !text-black"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => {
              setIsOpened(false);
              router.push("/work");
            }}
            className={`px-4 text-white max-sm:text-[18px] text-[32px] cursor-pointer font-bold hover:text-[#F2F2F2] hover:text-opacity-50 rounded-full transition-all duration-300 ${
              router.pathname === "/work" && "bg-white !text-black"
            }`}
          >
            Work
          </button>
          <button
            onClick={() => {
              setIsOpened(false);
              router.push("/kontakt");
            }}
            className={`px-4 text-white max-sm:text-[18px] text-[32px] cursor-pointer font-bold hover:text-[#F2F2F2] hover:text-opacity-50 rounded-full transition-all duration-300 ${
              router.pathname === "/kontakt" && "bg-white !text-black"
            }`}
          >
            Kontakt
          </button>
          <button
            onClick={() => {
              setIsOpened(false);
              router.push("/uber-mich");
            }}
            className={`px-4 text-white max-sm:text-[18px] text-[32px] cursor-pointer font-bold hover:text-[#F2F2F2] hover:text-opacity-50 rounded-full transition-all duration-300 ${
              router.pathname === "/uber-mich" && "bg-white !text-black"
            }`}
          >
            Über mich
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;

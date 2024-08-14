import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Crimson_Text } from "next/font/google";
import bgHome from "../assets/33c21a80b1b60a09fc620c4547cdf928.png";
import { useRouter } from "next/router";

const Crimson = Crimson_Text({
  weight: ["400", "600", "700"], // vagy ['400', '600', '700'] ha több súlyt szeretnél használni
  subsets: ["latin-ext"],
});

const HomePage = () => {
  const router = useRouter();

  const bgStyleForHome = {
    backgroundImage: `url(${bgHome.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={bgStyleForHome}
      className={`${Crimson.className} h-full flex flex-col items-center justify-center transition-opacity duration-300`}
    >
      <div className="w-screen h-full flex flex-col bg-black bg-opacity-60 items-center justify-start sm:justify-center max-sm:py-52">
        <h1 className="text-[32px] max-sm:leading-8 px-2 max-sm:text-center sm:text-6xl font-bold max-w-[500px] text-center uppercase leading-normal">
          Ich mache Tattoos aus Leidenschaft
        </h1>
        <p className="text-lg sm:text-2xl mb-2 max-sm:text-center ">
          Hier kannst du mich besser kennenlernen
        </p>
        <button
          onClick={() => window.open("https://wa.me/06609676961", "_blank")}
          className="relative overflow-hidden hover:bg-white delay-100 mb-5 mt-14 bg-transparent border-2 border-white text-white text-[32px] font-bold rounded-full px-4 flex items-center gap-4 py-2 sm:py-4 max-h-[68px] justify-center group transition-all duration-1000 w-[196px]"
        >
          <span className="relative whitespace-nowrap word z-10 group-hover:text-black transition-all text-[18px] sm:text-[24px] duration-700">
            Buche Jetzt
          </span>
          <WhatsAppIcon className="group-hover:text-black transition-all duration-700 relative z-10" />
          <div className="absolute bottom-0 bg-white rounded-full transform scale-0 transition-all duration-700 ease-in-out w-full h-0 group-hover:h-full group-hover:w-full group-hover:scale-100 group-hover:origin-bottom"></div>
        </button>
        <button 
        onClick={() => {
          router.replace("/work");
        }}
        className="relative sm:hidden overflow-hidden bg-white delay-100 bg-transparent border-2 border-white text-black text-[18px] sm:text-[32px] font-bold rounded-full px-4 flex items-center gap-4 py-2 sm:py-4 max-h-[68px] justify-center group transition-all duration-1000 w-[196px]">
          <p>Work</p>
        </button>
      </div>
    </div>
  );
};

export default HomePage;

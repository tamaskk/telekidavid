import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Crimson_Text } from "next/font/google";
import { useRouter } from "next/router";
import uberhome from "../assets/kontaktoldalhatter.jpeg";

const Crimson = Crimson_Text({
  weight: ["400", "600", "700"], // vagy ['400', '600', '700'] ha több súlyt szeretnél használni
  subsets: ["latin-ext"],
});

const KontaktPage = () => {
  const router = useRouter();
  const bgStyleForHome = {
    backgroundImage: `url(${uberhome.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={bgStyleForHome}
      className={`${Crimson.className} h-full flex flex-col items-center justify-center transition-opacity duration-300`}
    >
      <div className="w-screen h-full flex flex-col bg-black bg-opacity-60 items-start justify-start sm:pt-32 max-sm:pt-[160px] pb-10 sm:justify-center px-[12px] sm:px-[150px] overflow-y-auto">
        <h1 className="text-[32px] leading-8 sm:text-5xl max-sm:text-left font-bold text-white mb-2">
          Ich freue mich auf deine Anfrage!
        </h1>
        <p className="text-white text-[18px] max-sm:leading-6 sm:text-3xl mb-10 max-sm:text-left">
          Du kannst mich per WhatsApp oder Instagram kontaktieren. 
          <br />
          Meine
          Kontaktdaten findest du unten.
        </p>
        <div
          onClick={() =>
            window.open("https://www.instagram.com/david_teleki/", "_blank")
          }
          className="flex flex-row items-center justify-start gap-6 max-sm:mb-2"
        >
          <InstagramIcon className="text-white text-3xl" />
          <p className="text-[16px] sm:text-[32px] font-bold text-white">@david_teleki</p>
        </div>
        <div
          onClick={() => window.open("https://wa.me/06609676961", "_blank")}
          className="flex flex-row items-center justify-start gap-6 mb-16"
        >
          <WhatsAppIcon className="text-white text-3xl" />
          <p className="text-[16px] sm:text-[32px] font-bold text-white">0660/9676961</p>
        </div>
        <button
          onClick={() => {
            router.replace("/uber-mich");
          }}
          className="relative max-sm:hidden min-h-[44px] overflow-hidden hover:bg-white delay-100 bg-transparent border-2 border-white text-white text-[32px] font-bold rounded-full px-4 flex items-center gap-4 py-4 max-h-[68px] justify-center group transition-all duration-1000 w-[190px] sm:w-[290px]"
        >
          <span className="relative whitespace-nowrap word z-10 group-hover:text-black transition-all text-[16px] sm:text-[24px] duration-700">
            Mehr über mich
          </span>
          <div className="absolute bottom-0 bg-white rounded-full transform scale-0 transition-all duration-700 ease-in-out w-full h-0 group-hover:h-full group-hover:w-full group-hover:scale-100 group-hover:origin-bottom"></div>
        </button>
        <button
            onClick={() => {
              router.replace("/uber-mich");
            }}
            className="relative sm:hidden min-h-[44px] overflow-hidden bg-white delay-100 bg-transparent border-2 border-white text-black text-[18px] sm:text-[32px] font-bold rounded-full px-4 flex items-center gap-4 py-2 sm:py-4 max-h-[68px] justify-center group transition-all duration-1000 w-[196px]"
          >
            Über Mich
          </button>
      </div>
    </div>
  );
};

export default KontaktPage;

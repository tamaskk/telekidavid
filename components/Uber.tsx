import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Crimson_Text } from "next/font/google";
import uberhome from "../assets/33c21a80b1b60a09fc620c4547cdf928.png";

const Crimson = Crimson_Text({
  weight: ["400", "600", "700"], // vagy ['400', '600', '700'] ha több súlyt szeretnél használni
  subsets: ["latin-ext"],
});

const UberMinch = () => {
  const bgStyleForHome = {
    backgroundImage: `url(${uberhome.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      style={bgStyleForHome}
      className={`${Crimson.className} h-full flex flex-col items-center justify-center transition-opacity duration-300 overflow-y-auto`}
    >
      <div className="w-screen h-full flex flex-col bg-black overflow-y-auto bg-opacity-60 items-start justify-center max-sm:py-0 sm:justify-center px-10 sm:px-[150px]">
        <h1 className="text-[32px] mt-44 sm:text-[72px] font-bold mb-5 max-sm:-mt-32">
          Hallo!
        </h1>
        <p className="text-[18px] max-sm:leading-5 sm:text-[24px] font-normal">
          Ich bin der David und ich habe mit dem tättowieren meine Leidenschaft
          zum Beruf gemacht.
          <br />
          Ich tättowiere seit 5 Jahren. Ihr findet mich in Steyr im Opal Tattoo
          Atelier.
          <br />
          Dort herrscht absolute Wohlfühlatmosphäre, wo ich meinem Freigeist und
          meiner Kreativität freien Lauf lassen kann. Bei uns könnt ihr euch wie
          Zuhause im Wohnzimmer fühlen.
          <br />
          Ich freue mich auf deine Ideen, Motive und gemeinsam mit dir, dein
          Kunstwerk zu planen und zu verewigen. Ich lege großen Wert auf
          Individualität.
          <br />
          Deswegen nehme ich mir genau die Zeit für dich, die du brauchst, denn
          es ist dein Tattooprojekt und sollte dich absolut zufriedenstellen.
          <br />
          Für nähere Infos kannst du mich über WhatsApp oder Instagram
          kontaktieren.
        </p>
        <button
          onClick={() => window.open("https://wa.me/06609676961", "_blank")}
          className="relative overflow-hidden hover:bg-white delay-100 max-sm:self-end bg-transparent border-2 border-white text-white text-[32px] font-bold rounded-full px-6 flex items-center gap-4 py-3 max-h-[68px] justify-center group transition-all duration-1000 mt-14 sm:mt-14"
        >
          <span className="relative whitespace-nowrap word z-10 group-hover:text-black transition-all text-[18px] sm:text-[24px] duration-700">
            Buche Jetzt
          </span>
          <WhatsAppIcon className="group-hover:text-black transition-all duration-700 relative z-10" />
          <div className="absolute bottom-0 bg-white rounded-full transform scale-0 transition-all duration-700 ease-in-out w-full h-0 group-hover:h-full group-hover:w-full group-hover:scale-100 group-hover:origin-bottom"></div>
        </button>
      </div>
    </div>
  );
};

export default UberMinch;

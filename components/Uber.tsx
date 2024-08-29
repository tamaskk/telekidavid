import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Crimson_Text } from "next/font/google";
import uberhome from "../assets/33c21a80b1b60a09fc620c4547cdf928.webp";
import Head from "next/head";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <div
      style={bgStyleForHome}
      className={`${Crimson.className} h-full flex flex-col items-center justify-center transition-opacity duration-300 overflow-y-auto`}
    >
            <Head>
        <title>David Teleki Tattoo</title>
        <meta
          name="description"
          content="David Teleki Tattoo - Ich mache Tattoos aus Leidenschaft"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta 
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="keywords"
          content="David Teleki Tattoo, Tattoo, Tätowierung, Tätowierer, Wien, Österreich, Tattoos, Tattoo Studio"
        />
      </Head>
      <div className="w-screen h-full flex flex-col bg-black overflow-y-auto bg-opacity-60 items-start justify-center max-sm:py-0 sm:justify-center px-10 sm:px-[150px]">
        <h1 className="text-[32px] mt-44 sm:text-[72px] font-bold mb-5 max-sm:-mt-32 text-white">
          {t("about_title")}
        </h1>
        <p className="text-[18px] max-sm:leading-5 sm:text-[24px] font-normal text-white">
          {t("about_text_1")}
          <br />
          {t("about_text_2")}
          <br />
          {t("about_text_3")}
          <br />
          {t("about_text_4")}
          <br />
          {t("about_text_5")}
          <br />
          {t("about_text_6")}
        </p>
        <button
          onClick={() => window.open("https://wa.me/436609676961", "_blank")}
          className="relative overflow-hidden min-h-[44px] hover:bg-white delay-100 max-sm:self-end bg-transparent border-2 border-white text-white text-[32px] font-bold rounded-full px-6 flex items-center gap-4 py-3 max-h-[68px] justify-center group transition-all duration-1000 mt-14 sm:mt-14"
        >
          <span className="relative whitespace-nowrap word z-10 group-hover:text-black text-white transition-all text-[18px] sm:text-[24px] duration-700">
            {t("about_button")}
          </span>
          <WhatsAppIcon className="group-hover:text-black transition-all duration-700 relative z-10" />
          <div className="absolute bottom-0 bg-white rounded-full transform scale-0 transition-all duration-700 ease-in-out w-full h-0 group-hover:h-full group-hover:w-full group-hover:scale-100 group-hover:origin-bottom"></div>
        </button>
      </div>
    </div>
  );
};

export default UberMinch;

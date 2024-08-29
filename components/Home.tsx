import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Crimson_Text } from "next/font/google";
import { useRouter } from "next/router";
import bgHome from "../assets/33c21a80b1b60a09fc620c4547cdf928.webp";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const Crimson = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin-ext"],
});

const HomePage = () => {
  const router = useRouter();
  const { t } = useTranslation();

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
      <Head>
        <title>David Teleki Tattoo</title>
        <meta name="description" content="David Teleki Tattoo - Ich mache Tattoos aus Leidenschaft" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="David Teleki Tattoo, Tattoo, Tätowierung, Tätowierer, Wien, Österreich, Tattoos, Tattoo Studio"
        />
      </Head>
      <div className="w-screen h-full flex flex-col bg-black bg-opacity-60 items-center justify-start sm:justify-center max-sm:py-52">
        <h1 className="text-[32px] text-white max-sm:leading-8 px-2 max-sm:text-center sm:text-6xl font-bold max-w-[500px] text-center uppercase leading-normal">
          {t("main_page_header_title")}
        </h1>
        <p className="text-[20px] leading-[18px] text-white sm:text-2xl max-sm:text-center max-sm:max-w-[240px]">
          {t("main_page_header_subtitle")}
        </p>
        <button
          onClick={() => window.open("https://wa.me/436609676961", "_blank")}
          className="relative min-h-[44px] overflow-hidden hover:bg-white delay-100 mb-5 mt-16 bg-transparent border-2 border-white text-white text-[32px] font-bold rounded-full px-4 flex items-center gap-4 py-2 sm:py-4 max-h-[68px] justify-center group transition-all duration-1000 w-[196px]"
        >
          <span className="relative whitespace-nowrap word z-10 group-hover:text-black transition-all text-[18px] sm:text-[24px] duration-700">
            {t("main_page_header_button")}
          </span>
          <WhatsAppIcon className="group-hover:text-black transition-all duration-700 relative z-10" />
          <div className="absolute bottom-0 bg-white rounded-full transform scale-0 transition-all duration-700 ease-in-out w-full h-0 group-hover:h-full group-hover:w-full group-hover:scale-100 group-hover:origin-bottom"></div>
        </button>
        <button
          onClick={() => router.replace("/work")}
          className="relative min-h-[44px] sm:hidden overflow-hidden bg-white delay-100 bg-transparent border-2 border-white text-black text-[18px] sm:text-[32px] font-bold rounded-full px-4 flex items-center gap-4 py-2 sm:py-4 max-h-[68px] justify-center group transition-all duration-1000 w-[196px]"
        >
          <p>{t("main_page_header_work")}</p>
        </button>
        <div className="fixed bottom-10 left-[80px] w-[calc(100vw - 160px)] right-[80px] flex flex-row items-center justify-between">
          <a href="https://howisyourbrand.com" className="text-white text-opacity-50">
            Designed by HowIsYourBrand
          </a>
          <div className="flex flex-row items-center justify-center gap-3 text-white text-opacity-50">
            <a
              href="/David_Teleki_Impressum.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("main_page_header_impressum")}
            </a>{" "}
            |{" "}
            <a
              href="/David_Teleki_Datenschutz.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("main_page_header_datenschutz")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Cookie = ({
  setIsAccepted,
}: {
  setIsAccepted: (value: boolean) => void;
}) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-0 left-0 z-[999999] bg-black p-4 flex flex-col max-sm:gap-4 max-sm:text-center sm:flex-row justify-center items-center">
      <p className="text-white">{t("cookie_text")}</p>
      <div className="flex flex-row">
      <button
        onClick={() => {
          localStorage.setItem("cookieAccepted", "true");
          setIsAccepted(true);
        }}
        className="ml-4 bg-white text-black px-4 py-2 rounded"
        >
        {t("cookie_accept")}
      </button>
      <button
        onClick={() => {
          localStorage.setItem("cookieAccepted", "true");
        }}
        className="ml-4 bg-white text-black px-4 py-2 rounded"
        >
        {t("cookie_decline")}
      </button>
        </div>
    </div>
  );
};

export default Cookie;

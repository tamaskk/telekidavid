import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Crimson_Text } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import image1 from "../assets/514ee6d0dde9b850ebfea2a54e95b919.jpeg";
import image2 from "../assets/89c47eb49d6aa7ab8c21269d5c47d3cc.jpeg";
import image3 from "../assets/a018cc4c75eb4322f7abd96d64259eb1.jpeg";
import image4 from "../assets/bb9827b40298bc1516ce2ee76d515a6d.jpeg";
import image5 from "../assets/c6208a9d00dbffe2f93296320d05b4d6.jpeg";
import image6 from "../assets/cc8e8cfb56e26378fe848b9005fc1ecb.jpeg";
import image7 from "../assets/d366d4799ac37cd64885a16f07d34070.jpeg";
import image8 from "../assets/e8a272dfd252e840fcf01a6b2592cafc.jpeg";
import uberhome from "../assets/tattoooldalhatter.jpeg";

const OverLay = ({
  children,
  close,
}: {
  children: React.ReactNode;
  close: () => void;
}) => {
  return (
    <div
      onClick={close}
      className="flex flex-col z-[999999] fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50"
    >
      {children}
    </div>
  );
};

const ImageDisplay = ({
  image,
  close,
}: {
  image: string;
  close: () => void;
}) => {
  return (
    <OverLay close={close}>
      <img
        src={image}
        alt="Image"
        className="w-[360px] sm:w-[720px] h-[360px] sm:h-[720px] object-cover m-auto my-auto z-[9999999]"
      />
    </OverLay>
  );
};

const Crimson = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin-ext"],
});

const WorkPage = () => {
  const [openImage, setOpenImage] = useState({
    isOpen: false,
    index: 0,
  });
  const [width, setWidth] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bgStyleForHome = {
    backgroundImage: `url(${uberhome.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    image1.src,
    image2.src,
    image3.src,
    image4.src,
    image5.src,
    image6.src,
    image7.src,
    image8.src,
  ];

  return (
    <div
      style={bgStyleForHome}
      className={`${Crimson.className} absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 overflow-y-auto`}
    >
      {openImage.isOpen && (
        <ImageDisplay
          image={images[openImage.index]}
          close={() =>
            setOpenImage((prev) => ({
              ...prev,
              isOpen: false,
            }))
          }
        />
      )}
      <div className="w-full h-full flex flex-col bg-black overflow-y-auto overflow-x-hidden bg-opacity-60 items-start justify-center py-20">
        <div
          style={{
            margin: "0 auto",
            marginTop: "100px",
            WebkitBoxShadow: "0px 0px 20px 20px rgba(0,0,0,0.75)",
            MozBoxShadow: "0px 0px 20px 20px rgba(0,0,0,0.75)",
            boxShadow: "0px 0px 20px 20px rgba(0,0,0,0.75)",
          }}
          className="w-[100%] sm:w-[95%] bg-black mt-10 relative"
        >
          <div
            style={{
              clipPath: "ellipse(45% 100%)", // Increased the width percentage to cover more area
              backgroundColor: "black",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className="w-[120vw] sm:w-[106vw] max-sm:hidden rounded-lg h-10 absolute -top-6 z-20 border-8 border-[#000000]"
          ></div>
<Slider {...settings} className="flex flex-row">
  {images.map((image, index) => (
    <div
      key={index}
      className="overflow-hidden cursor-pointer max-sm:w-[250px] h-[250px] max-w-[250px]"
      onClick={() => {
        setOpenImage({
          isOpen: true,
          index: index,
        });
      }}
    >
      <img
        src={image}
        alt={`Image ${index + 1}`}
        className="hover:scale-110 w-full h-full transition-all duration-300 object-cover"
      />
    </div>
  ))}
</Slider>


          <div
            style={{
              clipPath: "ellipse(45% 100%)", // Increased the width percentage to cover more area
              backgroundColor: "black",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className="w-[120vw] sm:w-[106vw] max-sm:hidden h-10 absolute -bottom-2 z-20 border-8 border-[#000000]"
          ></div>
        </div>
        <div className="w-screen h-auto flex flex-row items-center justify-center sm:justify-end mt-10 sm:mt-14 px-4 gap-2">
          <button
            onClick={() => {
              window.open("https://www.instagram.com/david_teleki/", "_blank");
            }}
            className="overflow-hidden min-h-[44px] max-sm:hidden bg-transparent delay-100 border-2 border-white text-white text-[18px] sm:text-[24px] font-normal rounded-full px-6 flex items-center gap-4 py-2 max-h-[68px] justify-center group transition-all duration-1000"
          >
            Mehr auf Instagram
          </button>
          <button
            onClick={() => window.open("https://wa.me/06609676961", "_blank")}
            className="relative min-h-[44px] sm:hidden overflow-hidden hover:bg-white delay-100 bg-transparent border-2 border-white text-white text-[32px] font-bold rounded-full px-4 flex items-center gap-4 py-2 sm:py-4 max-h-[68px] justify-center group transition-all duration-1000 w-[196px]"
          >
            <span className="relative whitespace-nowrap word z-10 group-hover:text-black transition-all text-[18px] sm:text-[24px] duration-700">
              Buche Jetzt
            </span>
            <WhatsAppIcon className="group-hover:text-black transition-all duration-700 relative z-10" />
            <div className="absolute bottom-0 bg-white rounded-full transform scale-0 transition-all duration-700 ease-in-out w-full h-0 group-hover:h-full group-hover:w-full group-hover:scale-100 group-hover:origin-bottom"></div>
          </button>
          <button
            onClick={() => {
              router.replace("/uber-mich");
            }}
            className="relative min-h-[44px] overflow-hidden sm:hidden bg-white delay-100 bg-transparent border-2 border-white text-black text-[18px] sm:text-[32px] font-bold rounded-full px-4 flex items-center gap-4 py-2 sm:py-4 max-h-[68px] justify-center group transition-all duration-1000 w-[196px]"
          >
            Über Mich
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;

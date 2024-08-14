// import { Crimson_Text } from "next/font/google";
// import { useRouter } from "next/router";
// import { useEffect, useRef, useState } from "react";
// import image1 from "../assets/514ee6d0dde9b850ebfea2a54e95b919.jpeg";
// import image2 from "../assets/89c47eb49d6aa7ab8c21269d5c47d3cc.jpeg";
// import image3 from "../assets/a018cc4c75eb4322f7abd96d64259eb1.jpeg";
// import image4 from "../assets/bb9827b40298bc1516ce2ee76d515a6d.jpeg";
// import image5 from "../assets/c6208a9d00dbffe2f93296320d05b4d6.jpeg";
// import image6 from "../assets/cc8e8cfb56e26378fe848b9005fc1ecb.jpeg";
// import image7 from "../assets/d366d4799ac37cd64885a16f07d34070.jpeg";
// import image8 from "../assets/e8a272dfd252e840fcf01a6b2592cafc.jpeg";
// import uberhome from "../assets/tattoooldalhatter.jpeg";

// const Crimson = Crimson_Text({
//   weight: ["400", "600", "700"],
//   subsets: ["latin-ext"],
// });

// const WorkPage = () => {
//   const router = useRouter();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startPosition, setStartPosition] = useState(0);
//   const [translate, setTranslate] = useState(0);
//   const sliderRef = useRef<any>(null);
//   const bgStyleForHome = {
//     backgroundImage: `url(${uberhome.src})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   };

//   const images = [
//     image1.src,
//     image2.src,
//     image3.src,
//     image4.src,
//     image5.src,
//     image6.src,
//     image7.src,
//     image8.src,
//   ];

//   const handleMouseDown = (e: any) => {
//     setIsDragging(true);
//     setStartPosition(e.clientX);
//   };

//   const handleMouseMove = (e: any) => {
//     if (!isDragging) return;
//     const currentPosition = e.clientX;
//     const moveBy = currentPosition - startPosition;
//     setTranslate(moveBy);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     if (translate < -100 && currentIndex < images.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else if (translate > 100 && currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//     setTranslate(0);
//   };

//   const handleTouchStart = (e: any) => {
//     setIsDragging(true);
//     setStartPosition(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e: any) => {
//     if (!isDragging) return;
//     const currentPosition = e.touches[0].clientX;
//     const moveBy = currentPosition - startPosition;
//     setTranslate(moveBy);
//   };

//   const handleTouchEnd = () => {
//     handleMouseUp();
//   };

//   const handleClick = (index: number) => {
//     setCurrentIndex(index);
//   };

//   useEffect(() => {
//     const slider = sliderRef.current;
//     slider.addEventListener("mousedown", handleMouseDown);
//     slider.addEventListener("mousemove", handleMouseMove);
//     slider.addEventListener("mouseup", handleMouseUp);
//     slider.addEventListener("mouseleave", handleMouseUp);
//     slider.addEventListener("touchstart", handleTouchStart);
//     slider.addEventListener("touchmove", handleTouchMove);
//     slider.addEventListener("touchend", handleTouchEnd);

//     return () => {
//       slider.removeEventListener("mousedown", handleMouseDown);
//       slider.removeEventListener("mousemove", handleMouseMove);
//       slider.removeEventListener("mouseup", handleMouseUp);
//       slider.removeEventListener("mouseleave", handleMouseUp);
//       slider.removeEventListener("touchstart", handleTouchStart);
//       slider.removeEventListener("touchmove", handleTouchMove);
//       slider.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, [isDragging, currentIndex, translate]);

//   return (
//     <div
//       style={bgStyleForHome}
//       className={`${Crimson.className} absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 overflow-y-auto`}
//     >
//       <div className="w-screen h-full flex flex-col bg-gray-700 overflow-y-auto bg-opacity-60 items-start justify-start max-sm:py-20 sm:justify-center px-10 sm:px-[150px]">
//         <div className="relative w-full overflow-hidden" ref={sliderRef}>
//           <div
//             className="flex transition-transform duration-300 ease-out"
//             style={{
//               transform: `translateX(calc(-${
//                 currentIndex * 100
//               }% + ${translate}px))`,
//               transition: isDragging ? "none" : "transform 0.3s ease-out",
//             }}
//           >
//             {images.map((image, index) => (
//               <div
//                 className={`min-w-[33.33%] max-w-[33.33%] overflow-hidden flex justify-center items-center ${
//                   index === currentIndex ? "scale-110" : "scale-90"
//                 } transition-transform duration-300`}
//                 key={index}
//                 onClick={() => handleClick(index)}
//               >
//                 <img
//                   src={images[index]}
//                   alt={`Slide ${index + 1}`}
//                   className="w-[400px] h-auto cursor-pointer pointer-events-none object-cover hover:scale-110 transition-transform duration-300"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkPage;


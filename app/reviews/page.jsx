"use client";
import SuperHero from "@/shared/SuperHero";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Review from "./Review";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function page() {
  const [hasWindow, setHasWindow] = useState(false);
  const slider = useRef(null);
  const reviews = [
    {
      text: "“والله دي حقيقه و عن تجربه و شهاده أحاسب بها أمام الله د. محمد السيد احترام و أخلاق و مهاره هو نمبر وان فعلا والكلام ده عن تجربتي و تجربة صديقي في ٢٠٢٠ ❤️”",
      author: "Ramy Kamal",
      rating: 4.3,
      // img: "/images/doc.png",
    },
    {
      text: "“انت دكتور عظيم والله يباركلك”",
      author: "Marco Nasry",
      rating: 4.3,
      // img: "/images/doc.png",
    },
    {
      text: "“من المراكز المحترمه الاولي في زراعه الشعر بشهاده كل العملاء مع المركز ربنا يفوفقكم من نجاح الي نجاح انتم الاوائل في مصر”",
      author: "Hassan Mohamed",
      rating: 4.3,
      // img: "/images/doc.png",
    },
    {
      text: "“مركز محترم من كلام ناس اعرفهم شخصيا وشفت النتائج قدامي مركز مبيخليش المريض يعيش الوهم”",
      author: "Mostafa Atif Elktab",
      rating: 4.3,
      // img: "/images/doc.png",
    },
    {
      text: "“عيادة محترمة جداا شغلهم عالي بجد ميرسي دكتور عبدالوهاب انا جربت مع جارحين تجميل بس زي دكتور عبد الوهاب ماشفتش بصراحة ميرسي ميرسي يادكتور”",
      author: "Lucy Samier",
      rating: 4.3,
      // img: "/images/doc.png",
    },
    {
      text: "“اشطر وأحسن دكتور في مصر بدون مبالغه”",
      author: "Khaled Adel",
      rating: 4.3,
      // img: "/images/doc.png",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div>
      <SuperHero imgsrc="/images/reviews/bg-2.png" text="اراء العملاء" />

      <div className="container py-5 text-end">
        <div className="flex flex-col justify-end items-end ">
          <Image src="/images/desc/vec.svg" alt="" width={50} height={20} />
          <p className="text-default font-semibold text-lg">
            {" "}
            تعرف على اراء العملاء{" "}
          </p>
        </div>

        <div className="slider-container relative pb-2  overflow-hidden">
          {hasWindow && (
            <Slider ref={slider} {...settings} className="px-5 pb-5">
              {reviews.map((r, index) => (
                <div className="flex gap-2 pt-5" key={index}>
                  <Review review={r} />
                </div>
              ))}
            </Slider>
          )}

          <button
            className="absolute shadow-blue-600 shadow p-2 rounded-full mb-1 z-20 bottom-0 left-[30%]"
            onClick={() => slider.current.slickPrev()}
          >
            <IoIosArrowBack />
          </button>
          <button
            className="absolute shadow-blue-600 shadow p-2 rounded-full mb-1 z-20 bottom-0 right-[30%]"
            onClick={() => slider.current.slickPrev()}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;

"use client";
import SuperHero from "@/shared/SuperHero";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";

function page() {
  const [hasWindow, setHasWindow] = useState(false);

  const videos = [
    { src: "https://youtu.be/3ivVutG1Mv4?si=e-TWUbFHvSj2Z4Sg" },
    { src: "https://youtu.be/TFO65csHvqs?si=NAzYWNMWNDjYBPDW" },
    { src: "https://youtu.be/kCoDLRzYrrk?si=3lfTD9uPYv--6ljM" },
    { src: "https://youtu.be/3utUqF9YxtE?si=xH3Xxa20cfX6Nokb" },
    { src: "https://youtu.be/1Dqql1SXins?si=JoB9Qho9sxQgjXxE" },
    { src: "https://youtu.be/rSaov9BBTro?si=lU5ba3ceHrFuWeGP" },
    { src: "https://youtu.be/vwIql7UW9os?si=tCkm18fkSIeHmO6g" },
    { src: "https://youtu.be/akfHCYjdHOI?si=_QLtvSDAOtAQf-iV" },
    { src: "https://youtu.be/3uksW-PVYsE?si=0UG7VHMGOQiN-Rgw" },
  ];
  //

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div>
      <SuperHero
        imgsrc="/images/videos/bg.png"
        text={
          <div className="flex w-full justify-between">
            <a
              href="https://www.youtube.com/@user-hb5pn9ix3u/videos"
              className="bg-default rounded-md py-1 px-2 text-xl uppercase flex gap-2 items-center"
            >
              Youtube <FaPlay className="text-[#fff] w-4" />{" "}
            </a>
            <span>الفيديوهات</span>
          </div>
        }
      />

      <div className="container py-5 text-end">
        <div className="flex flex-col justify-end items-end ">
          <Image src="/images/desc/vec.svg" alt="" width={50} height={20} />
          <p className="text-default font-semibold text-lg">
            {" "}
            شاهد بعض فيديوهات الحالات
          </p>
        </div>
      </div>

      <div className="container gap-2">
        <div className="md:flex md:justify-start md:flex-wrap gap-3  w-full">
          {hasWindow &&
            videos.map((v, index) => (
              <div className="basis-[32%] relative" key={index}>
                <ReactPlayer
                  width="100%"
                  height="216px"
                  className="rounded-lg overflow-hidden"
                  url={v.src}
                  controls
                  // light="images/videos/thumbnail.png"
                  pip={true}
                />
                <source src={v.src} type="video/mp4" />
                {/* <div className="absolute flex items-center justify-center h-14 rounded-b-lg bottom-0 text-[#fff] bg-opacity-50  w-full text-center  font-bold text-2xl bg-gradient-to-t to-transparent from-[#000]">
                  titlr for video
                </div> */}
              </div>
            ))}
        </div>

        <div className="flex justify-center items-center ">
          <a
            href="https://www.youtube.com/@user-hb5pn9ix3u/videos"
            className="border-2 border-default text-default font-bold px-3 py-2 rounded-xl my-3"
          >
            {" "}
            شاهد المزيد{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;

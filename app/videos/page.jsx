"use client";
import { db } from "@/firbase/firebase";
import SuperHero from "@/shared/SuperHero";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";

function page() {
  const [hasWindow, setHasWindow] = useState(false);
  const [dataFetched, setDatafetched] = useState(false);
  const [videos, setVideos] = useState([])

  
  useEffect(() => {
    const returnData = async () => {
      setDatafetched(true)
      const querySnapshot = await getDocs(collection(db, "videos"));
      console.log(querySnapshot);

      let fetchedData = [];
      querySnapshot.forEach((doc) => {
        fetchedData.push({ id: doc.id, ...doc.data() });
      });

      let filteredOrder = fetchedData.filter((item, idx, arr) => idx === arr.findIndex(v => v.id == item.id));
      setVideos(() => [...filteredOrder]);
      setDatafetched(true)
    }

    if (!dataFetched) {
      returnData()
    }
  }, [])




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

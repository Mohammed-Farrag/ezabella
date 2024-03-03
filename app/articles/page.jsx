"use client";
import { db } from "@/firbase/firebase";
import SuperHero from "@/shared/SuperHero";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";


function page() {
  const [hasWindow, setHasWindow] = useState(false);
  const [dataFetched, setDatafetched] = useState(false);
  const [articles, setArticles] = useState([])

  
  useEffect(() => {
    const returnData = async () => {
      const querySnapshot = await getDocs(collection(db, "articles"));

      let fetchedData = [];
      querySnapshot.forEach((doc) => {
        fetchedData.push({ id: doc.id, ...doc.data() });
      });

      let filteredOrder = fetchedData.filter((item, idx, arr) => idx === arr.findIndex(a => a.id == item.id));
      setArticles(() => [...filteredOrder]);
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
        text={'المقالات'}
      />

    

      <div className="container gap-2">
        <div className="md:flex md:justify-start md:flex-wrap gap-3  w-full">
          {hasWindow &&
            articles.map((a, index) => (
              <div className="basis-[32%] relative" key={index}>
                <Link  href={'/articles/' + a.id} >{a.title}</Link>
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

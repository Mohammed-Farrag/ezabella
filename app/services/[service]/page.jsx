"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Boutox from "@/components/services/Boutox";
import Laser from "@/components/services/Laser";
import Gyn from "@/components/services/Gyn";
import Chemical from "@/components/services/Chemical";
import Fillar from "@/components/services/Fillar";
import Nano from "@/components/services/Nano";
import Jowl from "@/components/services/Jowl";
import SuperHero from "@/shared/SuperHero";

function page() {
  const pathname = usePathname();
  const services = [
    {
      title: " حقن البوتوكس",
      urlTitle: "boutox",
      component: <Boutox />,
      image: "/images/services/bg.png",
      content: "content 1",
    },
    {
      title: "فراكشنال ليزر",
      urlTitle: "liser",
      component: <Laser />,
      image: "/images/services/bg.png",
      content: "content 1",
    },
    {
      title: "علاج التثدى",
      urlTitle: "gyn",
      component: <Gyn />,
      image: "/images/services/bg.png",
      content: "content 1",
    },
    {
      title: "التقشير الكيميائى",
      urlTitle: "chemical",
      component: <Chemical />,
      image: "/images/services/bg.png",
      content: "content 1",
    },
    {
      title: "حقن الفيلر",
      urlTitle: "fillar",
      component: <Fillar />,
      image: "/images/services/bg.png",
      content: "content 1",
    },
    {
      title: "نانو فات",
      urlTitle: "nano-fat",
      component: <Nano />,
      image: "/images/services/bg.png",
      content: "content 1",
    },
    {
      title: "شفط اللغد",
      urlTitle: "jowl",
      component: <Jowl />,
      image: "/images/services/bg.png",
      content: "content 1",
    },
  ];
  console.log(pathname.split("/")[2])


  return (

    <>
      {services.map((ser, ids) => (
        <div key={ids}>

          {
            pathname.split("/")[2] == ser.urlTitle && (
              <>

                <SuperHero imgsrc="/images/services/bg-2.png" text={ser.title} />

                <div className="container py-5 text-end">

                  {ser.component}

                </div>
              </>
            )
          }
        </div>
      )
      )}
    </>
  );
}

export default page;

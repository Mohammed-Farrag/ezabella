import Services from "@/components/Services";
import SuperHero from "@/shared/SuperHero";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  const services = [
    { img: "/images/services/hair-planting.png", link: "/hait-planting" },
    { img: "/images/services/boutox.png", link: "/boutox" },
    { img: "/images/services/liser.png", link: "/liser" },
    { img: "/images/services/gyn.png", link: "/gyn" },
    { img: "/images/services/chemical.png", link: "/chemical" },
    { img: "/images/services/fillar.png", link: "/fillar" },
    { img: "/images/services/nano-fat.png", link: "/nano-fat" },
    { img: "/images/services/jowl.png", link: "/jowl" },
  ];

  return (
    <div>
      <SuperHero imgsrc="/images/services/bg-2.png" text="الخدمات" />

      <div className="py-8 text-end">
        <div className="container flex flex-col justify-end items-end ">
          <Image src="/images/desc/vec.svg" alt="" width={50} height={20} />
          <p className="text-default font-semibold text-lg">
            تعرف علي عياداتنا المتخصصة في تقديم أفضل الخدمات الطبية
          </p>
        </div>
        <Services />
      </div>
    </div>
  );
}

export default page;

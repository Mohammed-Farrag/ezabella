"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

function MobileNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div className=" w-full bg-default items-center gap-3 py-1 px-4 rounded-xl font-bold bg-opacity-80 [&>*]:text-[#fff] [&>*]:text-sm">
        <div
          className="flex items-center justify-between w-full"
          onClick={() => setOpen(!open)}
        >
          <IoMenu className="cursor-pointer text-3xl text-[#fff]" />
          <img src="/images/logo.png" />
        </div>
      </div>

      {open && (
        <div
          className="flex py-3 
                flex-wrap gap-3 mt-2 px-4 
                rounded-xl
                bg-[#FFFFFF]/80
                backdrop-blur-md 
                justify-between
                [&>*]:text-default [&>*]:font-bold
                [&>*]:text-sm [&>*]:w-[35%] [&>*]:text-center  "
        >
          <Link href="/services">الخدمات</Link>
          <Link href="/states"> الحالات</Link>
          <Link href="/hair-planting">عن زراعة الشعر</Link>
          {/* <Link href="/articles"> المقالات</Link> */}
          <Link href="/about-doctor">عن الدكتور </Link>
          <Link href="/contact">تواصل معنا</Link>
          <Link href="/videos">الفيديوهات</Link>
          <Link href="/reviews">تجارب و أراء</Link>
        </div>
      )}
    </div>
  );
}

export default MobileNavbar;

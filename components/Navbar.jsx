import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="hidden md:flex items-center justify-center gap-3 py-1 px-4 rounded-xl font-bold bg-default bg-opacity-80 [&>*]:text-[#fff] [&>*]:text-sm ">
      <Link href="/contact">تواصل معنا</Link>
      <Link href="/videos">فيديوهات </Link>
      <Link href="/reviews">تجارب وأراء</Link>
      <Link href="/articles"> المقالات</Link>
      <Link href="/">
        <Image src="/images/logo.png" width={100} height={80} alt="logo" />
      </Link>
      <Link href="/states"> الحالات</Link>
      <Link href="/services"> الخدمات</Link>
      <Link href="/hair-planting"> عن زراعة الشعر</Link>
      <Link href="/about-doctor"> عن الدكتور</Link>
    </div>
  );
}
//
export default Navbar;

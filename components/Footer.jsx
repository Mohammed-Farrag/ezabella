import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";

function Footer() {
  return (
    <div className="bg-default relative overflow-hidden">
      <div className="bg-[#774C00]">
        <div className="container flex justify-around md:items-start flex-col gap-7 md:gap-1 md:flex-row py-4">
          <div className="flex flex-col gap-3">
            <span className="text-[#fff] font-bold text-end ">
              تابعنا علي وسائل التواصل الإجتماعي
            </span>
            <div className="flex justify-end gap-4 [&>*]:text-[#fff]">
              <Link
                target="_blank"
                href="https://www.facebook.com/EzabellaClinic/"
              >
                {" "}
                <FaFacebook />{" "}
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/drmohamedelsayedezabella/"
              >
                {" "}
                <FaInstagram />{" "}
              </Link>

              <a href="tel:01008153778">
                <FiPhone />
              </a>

              <Link
                target="_blank"
                href="https://www.youtube.com/@user-hb5pn9ix3u"
              >
                {" "}
                <FaYoutube />{" "}
              </Link>
              <Link
                target="_blank"
                href="https://www.tiktok.com/@drmohamedelsayed19"
              >
                {" "}
                <FaTiktok />{" "}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 [&>*]:text-[#fff] [&>*]:font-bold justify-end text-end ">
            <Link href="/about-doctor">من نحن</Link>
            <Link href="/services"> الخدمات</Link>
            <Link href="/hair-planting"> عن زراعة الشعر </Link>
            <Link href="/review"> تجارب واراء</Link>
          </div>
          <div className="right flex flex-col items-end gap-2">
            <img src="/images/logo.png" alt="" />
            <div className="flex flex-col [&>*]:text-[#fff]">
              <div className="flex flex-row-reverse items-center gap-3">
                <LuPhone />
                <a href="tel:01008153778">
                  {" "}
                  <span>01008153778</span>
                </a>{" "}
              </div>
              <div className="flex flex-row-reverse items-center gap-3">
                <SlLocationPin />{" "}
                <span>أبراج دلتا ستارز - برج رقم 4 عيادة رقم 502</span>{" "}
              </div>
              <div className="flex flex-row-reverse items-center gap-3">
                <SlSocialInstagram /> <span>drmohamedelsayedezabella</span>{" "}
              </div>
              <div className="flex flex-row-reverse items-center gap-3">
                <RiFacebookCircleLine /> <span>EzabellaClinic</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-[#fff] justify-center text-center  items-center text-base md:text-xl font-semibold py-2 bg-[#4F3200]">
        ©2018-2024 Mohamed el sayed - Beauty clinic. all rights reserved .
      </div>
    </div>
  );
}

export default Footer;

"use client";
import React from "react";
import { LuPhone } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { RiFacebookCircleLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {firebase_app} from "@/firbase/firebase";
import toast, { Toaster } from 'react-hot-toast';

function Contactform() {

  const db = getFirestore(firebase_app);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
    let collRef = collection(db, 'orders');

    addDoc(collRef, data).then(() => console.log('added successfully'))

    toast('created successfully',{
      duration: 4000,
      position: 'top-center',
    })
    reset({
      name:"",
      number:"",
      content:''
    })
  }


  return (
    <div className="p-4  flex-col-reverse md:flex-row rounded-lg gap-2 bg-white flex ">
      <Toaster />
      <form
        method="post"
        onSubmit={handleSubmit(onSubmit)}
        className="grow flex-col flex !text-black gap-3 [&>*]:text-[#276DB8] [&>*]:text-end"
       
      >
        <div className="flex items-end flex-col gap-2 shadow-md">
          <label htmlFor="name">الاسم</label>
          <input type="text" className="w-full text-end px-2" {...register("name")}  />
        </div>
        <div className="flex items-end flex-col gap-2 shadow-md">
          <label htmlFor="phone">رقم الهاتف</label>
          <input type="text" className="w-full text-end px-2" {...register("number")}  />
        </div>
        <div className="flex items-end flex-col gap-2 shadow-md">
          <label htmlFor="message"> الرسالة</label>
          <textarea className="w-full resize-none text-end px-2" {...register("content")} ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#276DB8] text-white min-w-[50%] rounded-md py-1  text-center "
          >
            إرسال
          </button>
        </div>
      </form>



      <div className="right flex [&>*]:text-[#fff] rounded-md p-3 bg-[#276DB8] flex-col items-end gap-2">
        <p className="text-xl mb-3 font-semibold">بيانات التواصل</p>
        <img src="/images/logo.png" alt="" />
        <div className="flex flex-col ">
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
  );
}

export default Contactform;

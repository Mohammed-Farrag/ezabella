'use client'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firbase/firebase';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';


function page() {

  let router = useRouter();
  const [loggedin, setLoggedin] = useState(false);

  const { register, handleSubmit, formState: { isValid, errors }, } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async (data) => {
    let user;
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)

      user = getAuth().currentUser;
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(user));
      }

    } catch (err) {
      let errMsg = err.message;
      toast(errMsg, {
        duration: 4000,
        position: 'top-center'
      })
    }
    if (user) { router.replace('/admin/articles') }

  }


  useEffect(() => {
    if (typeof window !== 'undefined') {
      let user = JSON.parse(localStorage.getItem('user'))
      if (user) router.replace('/admin/articles')
    }

  }, [])



  return (
    <div className='w-full h-screen gap-2 flex flex-col bg-[#ECECEC] items-center justify-center'>
      <Toaster />
      <img src="/images/admin/logo.png" alt="logo ezbella" />
      <form onSubmit={handleSubmit(onSubmit)}  >
        <div className="flex gap-1 flex-col items-end mb-3" >
          <label className='font-semibold' htmlFor="email">الإيميل الالكترونى</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true, email: true })}
            className='focus-within:border-default md:w-[200px] border-2 rounded-md text-right px-2' />
          {errors.email && errors.email.type === "email" && (
            <span>must be valid email</span>
          )}
        </div>
        <div className="flex gap-1 flex-col items-end" >
          <label className='font-semibold' htmlFor="password"> الباسوورد</label>
          <input
            type="password"
            id='password'
            {...register("password", { required: true })}
            className='focus-within:border-default md:w-[200px] border-2 rounded-md text-right px-2' />
          {errors.password && errors.password.type === "required" && (
            <span>password is required</span>
          )}
        </div>
        <button
          type='submit'

          className='rounded-md bg-default disabled:bg-opacity-50 disabled:cursor-not-allowed text-white font-semibold text-center md:w-[200px] w-full py-2 px-3 mt-2'>تسجيل الدخول</button>
      </form>
    </div>
  )
}

export default page
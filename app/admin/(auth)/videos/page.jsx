'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { firebase_app } from '@/firbase/firebase';
import { PiTrashLight } from "react-icons/pi";
import { useForm } from 'react-hook-form';

function page() {

  let router = useRouter();

  const db = getFirestore(firebase_app);
  const [videos, setVideos] = useState([])

  const [dataFetched, setDatafetched] = useState(false);
  const [selectedVideos, setSelectedVideos] = useState([]);


  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
} = useForm()

const onSubmit = (data) => {

    let collRef = collection(db, 'videos');

    addDoc(collRef, data).then(() => {

        toast('created successfully', {
            duration: 4000,
            position: 'top-center',
        })
    })
    reset({ title: '' , src: ''})

    router.refresh()
}


  const selectVideo = (video) => {
    let index = selectedVideos.findIndex((v) => v.id == video.id);

    if (index == -1) {
      setSelectedVideos((old) => [...old, { ...video }])
    } else {
      let filtered = selectedVideos.filter((v) => v.id !== video.id);

      setSelectedVideos(filtered)
    }
  }


  const deleteVideos = () => {
    for (let i = 0; i <= selectedVideos.length; i++) {
      let docRef = doc(db, 'videos', selectedVideos[i]?.id);
      deleteDoc(docRef).then(() => toast('deleted successfully', {
        duration: 4000,
        position: 'top-center',
      }))
    }

    router.refresh()
  }


  useEffect(() => {
    const returnData = async () => {
      const querySnapshot = await getDocs(collection(db, "videos"));

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
    if (typeof window !== 'undefined') {
      let user = JSON.parse(localStorage.getItem('user'))
      if (!user) router.replace('/admin')
    }
  }, [])
  return (
    <div className='flex flex-col items-end text-right w-full pt-10'>
      <div className="flex w-full justify-between [&>*]:px-2 [&>*]:rounded-lg">
        <button
          onClick={deleteVideos}
          className={`bg-red-600 text-white flex  gap-2 justify-between items-center ${selectedVideos.length == 0 ? 'cursor-not-allowed bg-opacity-45 ' : ''}`}
        >
          حذف
          <PiTrashLight />
        </button>
        <div className="text-2xl text-default font-bold">الفيديوهات</div>
      </div>

      <div className="flex flex-col gap-2 bg-white rounded-lg max-h-[800px] overflow-y-scroll  text-black w-full mt-2  pt-5 px-5" style={{ direction: 'rtl' }}>

        {videos.map((video, idx) => (
          <div className="flex gap-2 py-3 border-b border-gray-500 last:border-b-0" key={idx}>
            <input type="checkbox" onChange={() => selectVideo(video)} className='mx-2 select' />
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 font-bold">
                <span>{video.title}</span></div>
            </div>
          </div>
        ))}

      </div>





      <div className="text-2xl text-default font-bold mb-2 mt-5">إضافة فيديو</div>

      <form onSubmit={handleSubmit(onSubmit)}  className='w-full flex flex-col  gap-2'>
        <div className="flex w-full  gap-3 md:flex-row-reverse flex-col  justify-between">

          <div className="flex flex-col grow gap-1">
            <label htmlFor="" className='font-bold'>   العنوان </label>
            <input type="text" placeholder='العنوان' {...register('title')} className='w-full text-right px-3 rounded-md focus-within:border-default' />
          </div>

        </div>


        <div className="flex w-full  gap-3 md:flex-row-reverse flex-col justify-between">

          <div className="flex  flex-col grow gap-1">
            <label htmlFor="" className='font-bold'>
              الرابط
            </label>
            <input type="text" placeholder='اضف الرابط هنا'  {...register('src')} className='w-full text-right px-3 rounded-md focus-within:border-default' />
          </div>

        </div>

        <div className="flex  flex-col grow gap-1">
          <button className='bg-default text-white text-center  font-bold rounded-lg w-full py-2'>حفظ / نشر / رفع</button>
        </div>
      </form>
    </div>
  )
}

export default page
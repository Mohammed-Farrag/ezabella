'use client';
import React, { useEffect, useState } from 'react'
import { PiTrashLight } from "react-icons/pi";
import { IoCopy } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import toast, { Toaster } from 'react-hot-toast';
import { getFirestore, doc, getDocs, collection, deleteDoc } from "firebase/firestore";
import { firebase_app } from '@/firbase/firebase';
import { useRouter } from 'next/navigation';



function page() {
  let router = useRouter();
  const db = getFirestore(firebase_app);
  const [orders, setOrders] = useState([])

  const [dataFetched, setDatafetched] = useState(false);
  const [selectedOrders, setSelectedOrders] = useState([]);

  const selectOrder = (order) => {
    let index = selectedOrders.findIndex((o) => o.id == order.id);

    if (index == -1) {
      setSelectedOrders((old) => [...old, { ...order }])
    } else {
      let filtered = selectedOrders.filter((o) => o.id !== order.id);

      setSelectedOrders(filtered)
    }
  }


  const deleteOrders = () => {
    for (let i = 0; i <= selectedOrders.length; i++) {
      console.log(selectedOrders[i]?.id);
      let docRef = doc(db, 'orders', selectedOrders[i]?.id);
      deleteDoc(docRef).then(() => toast('deleted successfully', {
        duration: 4000,
        position: 'top-center',
      }))
    }

    router.refresh()
  }


  useEffect(() => {
    const returnData = async () => {
      setDatafetched(true)
      const querySnapshot = await getDocs(collection(db, "orders"));

      let fetchedData = [];
      querySnapshot.forEach((doc) => {
        fetchedData.push({ id: doc.id, ...doc.data() });
      });

      let filteredOrder = fetchedData.filter((item, idx, arr) => idx === arr.findIndex(o => o.id == item.id));
      setOrders(() => [...filteredOrder]);
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
      <Toaster />
      <div className="text-2xl text-default font-bold mb-4">طلبات العملاء</div>
      <div className="flex justify-between w-full ">
        <div className="flex gap-2 [&>*]:py-1 [&>*]:px-2 [&>*]:rounded-lg">
          <button
            onClick={deleteOrders}
            className={`bg-red-600 text-white flex  gap-2 justify-between items-center ${selectedOrders.length == 0 ? 'cursor-not-allowed bg-opacity-45 ' : ''}`}
          >
            حذف
            <PiTrashLight />
          </button>

        </div>

        <button className='py-1 px-2 flex justify-between   gap-2 items-center rounded-lg bg-white text-default '>
          تحديد الكل
          <IoCopyOutline />
          <IoCopy />
        </button>
      </div>



      <div className="flex flex-col gap-2 bg-white rounded-lg  text-black w-full mt-2  pt-5 px-5" style={{ direction: 'rtl' }}>

        {orders.map((order, idx) => (
          <div className="flex gap-2 py-3 border-b border-gray-500 last:border-b-0" key={idx}>
            <input type="checkbox" onChange={() => selectOrder(order)} className='mx-2 select' />
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 font-bold">
                <span>{order.name}</span>  <span>{order.number}</span></div>

              <p>{order.content}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default page
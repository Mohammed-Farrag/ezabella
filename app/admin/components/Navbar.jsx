import { firebase_app } from '@/firbase/firebase';
import { getAuth, signOut } from 'firebase/auth';
import { redirect } from 'next/navigation';
import React from 'react'
import { IoExitOutline } from "react-icons/io5";

function Navbar() {
  const logout = () => {
    signOut(getAuth(firebase_app));
    localStorage.clear();
    redirect('/admin')
  }
  return (
    <div className='flex bg-white text-white py-4 px-36 w-full shadow-md'>
      <button onClick={logout} className='bg-default rounded-md flex gap-1 items-center py-1 px-2' >
        خروج
        <IoExitOutline />
      </button>
    </div>
  )
}

export default Navbar
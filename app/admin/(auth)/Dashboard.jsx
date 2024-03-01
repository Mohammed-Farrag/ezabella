import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function Dashboard({ children }) {
    return (

        <div className='flex flex-row-reverse justify-between h-screen '>


            <Sidebar />
            <div className="content flex flex-col grow ">
                <Navbar />
                <div className="flex grow px-10 sm:px-36  bg-[#ECECEC]">

                    {children}
                </div>
            </div>
        </div>

    )
}

export default Dashboard
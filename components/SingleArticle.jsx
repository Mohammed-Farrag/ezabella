'use client'
import React from 'react'

function SingleArticle({title, content}) {
 
  return (
    <div className='flex flex-col gap-2 container' style={{direction:'rtl'}}>
            <h2 className='font-bold my-3 '>{title}</h2>
           <div dangerouslySetInnerHTML={{__html: content}} />
    </div>
  )
}

export default SingleArticle
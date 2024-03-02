"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { firebase_app } from '@/firbase/firebase';


function page() {

    let router = useRouter();
    const editorRef = useRef(null);
    const [content, setContent] = useState('');
    const db = getFirestore(firebase_app);


    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {

        let collRef = collection(db, 'articles');

        addDoc(collRef, data).then(() => {

            toast('created successfully', {
                duration: 4000,
                position: 'top-center',
            })
        })


        setContent("")
        reset({ title: '' })
    }


    useEffect(() => {
        if (typeof window !== 'undefined') {
            let user = JSON.parse(localStorage.getItem('user'))
            if (!user) router.replace('/admin')
        }
    }, [])


    return (
        <div className='flex flex-col items-end text-right w-full pt-10'>
            <div className="text-2xl text-default font-bold mb-4">المقالات</div>

            <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-2' >
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className='font-bold'> العنوان/سؤال </label>
                    <input type="text" {...register("title")} className='w-full text-right px-3 rounded-md focus-within:border-default ' />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className='font-bold'>  المحتوى/الإجابة </label>
                    <Editor

                        {...register("content")}
                        apiKey="jhn7wshkkju61z1jkqoqhypmpr0np8zenp1p9tspp0k03xik"
                        onInit={(evt, editor) => editorRef.current = editor}
                        onEditorChange={(val) => setContent(val)}
                        init={{
                            height: 300,
                            menubar: false,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                    <button type='submit' className='my-5 py-2 bg-default rounded-md text-white font-bold text-center'>نشر</button>
                </div>

            </form>
        </div>
    )
}

export default page
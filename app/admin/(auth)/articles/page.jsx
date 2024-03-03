"use client"
import React, { useEffect, useState } from 'react'
import {
    Editor,
    EditorProvider,
    Toolbar,
    BtnBold,
    BtnBulletList,
    BtnClearFormatting,
    BtnItalic,
    BtnLink,
    BtnStyles
} from 'react-simple-wysiwyg';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
import { firebase_app } from '@/firbase/firebase';
import toast, { Toaster } from 'react-hot-toast';
import { PiTrashLight } from "react-icons/pi";

function page() {

    let router = useRouter();
    const [content, setContent] = useState('');
    const [articles, setArticles] = useState([]);
    const [selectedArticles, setSelectedArticles] = useState([]);
    const db = getFirestore(firebase_app);
    const [dataFetched, setDatafetched] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        let collRef = collection(db, 'articles');

        addDoc(collRef, { ...data, content }).then(() => {

            toast('created successfully', {
                duration: 4000,
                position: 'top-center',
            })
        })


        setContent("")
        reset({ title: '' })
    }

    const selectArticle = (article) => {
        let index = selectedArticles.findIndex((v) => v.id == article.id);

        if (index == -1) {
            setSelectedArticles((old) => [...old, { ...article }])
        } else {
            let filtered = selectedArticles.filter((v) => v.id !== article.id);

            setSelectedArticles(filtered)
        }
    }

    const deleteArticles = () => {
        for (let i = 0; i <= selectedArticles.length; i++) {

            let docRef = doc(db, 'articles', selectedArticles[i]?.id);
            
            deleteDoc(docRef).then(() => toast('deleted successfully', {
                duration: 4000,
                position: 'top-center',
            }))
        }

        router.refresh()
    }


    useEffect(() => {
        const returnData = async () => {
            const querySnapshot = await getDocs(collection(db, "articles"));

            let fetchedData = [];
            querySnapshot.forEach((doc) => {
                fetchedData.push({ id: doc.id, ...doc.data() });
            });

            let filteredOrder = fetchedData.filter((item, idx, arr) => idx === arr.findIndex(a => a.id == item.id));
            setArticles(() => [...filteredOrder]);
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

            <div className="flex w-full justify-between [&>*]:px-2 [&>*]:rounded-lg">
                <button
                    onClick={deleteArticles}
                    className={`bg-red-600 text-white flex  gap-2 justify-between items-center 
                    ${selectedArticles.length == 0 ? 'cursor-not-allowed bg-opacity-45 ' : ''}`}
                >
                    حذف
                    <PiTrashLight />
                </button>
                <div className="text-2xl text-default font-bold">المقالات</div>
            </div>

            <div className="flex flex-col gap-2 bg-white rounded-lg max-h-[800px] overflow-y-scroll  text-black w-full mt-2  pt-5 px-5" style={{ direction: 'rtl' }}>

                {articles.map((article, idx) => (
                    <div className="flex gap-2 py-3 border-b border-gray-500 last:border-b-0" key={idx}>
                        <input type="checkbox" onChange={() => selectArticle(article)} className='mx-2 select' />
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-4 font-bold">
                                <span>{article.title}</span></div>
                        </div>
                    </div>
                ))}

            </div>


            <div className="text-2xl text-default font-bold mb-2 mt-5">إضافة مقال</div>

            <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-2' >
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className='font-bold'> العنوان/سؤال </label>
                    <input type="text" {...register("title")} className='w-full text-right px-3 rounded-md focus-within:border-default ' />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className='font-bold'>  المحتوى/الإجابة </label>
                    <EditorProvider>

                        <Editor
                            className='bg-white'
                            containerProps={{ style: { backgroundColor: '#fff' } }}
                            value={content}
                            onChange={(val) => setContent(val.target.value)} >
                            <Toolbar>
                                <BtnBold />
                                <BtnBulletList />
                                <BtnClearFormatting />
                                <BtnItalic />
                                <BtnLink />
                                <BtnStyles />
                            </Toolbar>
                        </Editor>
                    </EditorProvider>
                    <button type='submit' className='my-5 py-2 bg-default rounded-md text-white font-bold text-center'>نشر</button>
                </div>

            </form>
        </div>
    )
}

export default page
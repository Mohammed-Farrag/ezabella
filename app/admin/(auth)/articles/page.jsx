"use client"
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
import { firebase_app } from '@/firbase/firebase';
import toast, { Toaster } from 'react-hot-toast';
import { PiTrashLight } from "react-icons/pi";





const QuillNoSSRWrapper = dynamic(async () => {
    
    const { default: RQ } = await import('react-quill')
    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />
}, {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})


function page() {
    
    let router = useRouter();
    
    const [content, setContent] = useState('');
    const [articles, setArticles] = useState([]);
    const [selectedArticles, setSelectedArticles] = useState([]);
    const db = getFirestore(firebase_app);
    const [dataFetched, setDatafetched] = useState(false);
    
    const modules = {
        toolbar: [
            [{ size: [] }],
            ['bold', 'italic', 'strike'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link', 'image']
        ],
        clipboard: {
            matchVisual: false,
        },
    }
    const formats = [
        'size',
        'bold',
        'italic',
        'strike',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
    ]
    


   
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
        <div className='flex flex-col items-end text-right w-full pt-10 overflow-x-hidden'>
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
                   
            
                    <QuillNoSSRWrapper 
                        className="bg-white" 
                        value={content}  
                        onChange={(val) => setContent(val)}  
                        modules={modules} 
                        formats={formats} 
                        theme="snow" 
                    />
                    <button type='submit' className='mb-5 mt-20 py-2 bg-default rounded-md text-white font-bold text-center'>نشر</button>
                </div>

            </form>
        </div>
    )
}

export default page
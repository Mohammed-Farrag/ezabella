'use client'
import SingleArticle from '@/components/SingleArticle'
import { db } from '@/firbase/firebase';
import SuperHero from '@/shared/SuperHero'
import { collection, doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

function page({params }) {
    const [article, setArticle] = useState(null);
    const [dataFetched, setDatafetched] = useState(false);
    const {id} = params;
    useEffect(() => {
        const returnData = async () => {
            const querySnapshot = await getDoc( doc(db, "articles", id ) );
            setArticle(querySnapshot.data());
            setDatafetched(true)
        }

        if (!dataFetched) {
            returnData()
        }

    }, [])
    return (
        <div>
            <SuperHero
                imgsrc="/images/videos/bg.png"
                text={'المقالات'}
            />

            <SingleArticle title={article?.title} content={article?.content} />
        </div>
    )
}

export default page
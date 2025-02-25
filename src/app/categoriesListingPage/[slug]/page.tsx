"use client";
//import { getArticle } from '@/app/api/categories/route';
import React, { useEffect } from 'react';
import { Category } from '../page';

interface ArticlePageProps {
    params: {
        slug: string;
    };
}


const ArticlePage: React.FC<ArticlePageProps> = ({ params }) => {

    const { slug } = params;
    const title = decodeURIComponent(slug);
    const [article, setArticle] = React.useState<Category | null>(null);

    const fetchArticle = async () => {
        const res = await fetch(`/api/categories?search=${title}`);
        const data = await res.json();

        console.log('Fetched data:', data);

        if (data.length > 0) {
            setArticle(data[0]);
        } else {
            console.error('Invalid article data:', data);
        }
    }

    useEffect(() => {
        fetchArticle();
    }, [slug]);



    return (
        <main className="min-h-screen w-screen p-4">
            <section id="article" className="relative my-[30vh]">
                <div className='w-full sm:w-1/2'>

                    {article === null ?
                        <div className='grid place-items-center mt-28'>
                            <svg className='size-24 animate-spin' viewBox="-25 -25 250 250" >
                                <circle r="90" cx="100" cy="100" fill="transparent" stroke="#e0e0e0" strokeWidth="16px"></circle>
                                <circle r="90" cx="100" cy="100" stroke="#000" strokeWidth="16px" strokeLinecap="round" strokeDashoffset="215px" fill="transparent" strokeDasharray="565.48px"></circle>
                            </svg>
                        </div>
                        : (
                            <>
                                <h1 className="text-4xl sm:text-8xl font-bold text-left pt-8 pb-2">
                                    {article?.pageTitle}</h1>
                                <h2 className="text-4xl py-2 font-bold flex-1">{article.pageType}</h2>
                                <p className="text-base font-normal flex-1">{article.content}</p>
                                <span className='text-8xl pb-2 font-bold text-left text-[#D9D9D9]'>#{article.id} <br /></span>
                            </>
                        )}

                    <a
                        href="/categoriesListingPage"
                        className="cursor-pointer text-xl font-bold relative sm:absolute sm:right-4 -top-[45vh] sm:top-[5vh] text-[#dadada] bg-black py-1 px-2 hover:text-black hover:bg-transparent hover:underline">Back to Categories List

                        <span className="ml-1">↑</span>
                    </a>
                </div>
            </section>

        </main>
    );
};

export default ArticlePage;
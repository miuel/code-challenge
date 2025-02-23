"use client";
import { getArticle } from '@/api/pages/route';
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
        const data = await getArticle(title);
        if (data) {
            setArticle(data);
        }
    }

    useEffect(() => {
        fetchArticle();
    }, []);


    return (
        <main className="min-h-screen w-screen p-4">
            <section id="article" className="relative my-[30vh]">
                <div className='w-full sm:w-1/2'>

                    {article && (
                        <>
                            <h1 className="text-4xl sm:text-8xl font-bold text-left pt-8 pb-4">{article?.pageTitle}</h1>
                            <p className="text-base font-bold flex-1"># {article?.id}</p>

                            <h2 className="text-4xl py-2 font-bold flex-1">{article?.pageType}</h2>
                            <p className="text-base font-normal flex-1">{article?.content}</p>
                        </>
                    )}

                    <a
                        href="/categoriesListingPage"
                        className="cursor-pointer text-xl font-bold relative sm:absolute sm:right-4 sm:top-[5vh] text-[#dadada] bg-black py-1 px-2 hover:text-black hover:bg-transparent hover:underline">Back to Categories List

                        <span className="ml-1">↑</span>
                    </a>
                </div>
            </section>

        </main>
    );
};

export default ArticlePage;
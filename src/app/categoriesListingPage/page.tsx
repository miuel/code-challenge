"use client";
import { getCategories } from '@/api/pages/route';
import React, { useEffect } from 'react';

interface Category {
    id: number;
    pageType: string;
    pageTitle: string;
    isActive: boolean;
    content: string;
}

interface CategoriesListingPageProps {
    categories: Category[];
};

const CategoriesListingPage: React.FC<CategoriesListingPageProps> = () => {
    const [query, setQuery] = React.useState<string>('');
    const [categories, setCategories] = React.useState<Category[]>([]);


    const fetchCategories = async () => {
        const data = await getCategories();
        if (data && data.categories) setCategories(data.categories);
        console.log('data', data);
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (query.length > 2) {
            console.log('query', query);
        }
    }, [query]);

    return (
        <main className="min-h-screen w-screen p-4">
            <section id="categories" className="relative my-[30vh]">
                <h1 className="text-8xl font-bold text-left pt-8 pb-4">Categories List</h1>
                <p className="text-xl font-bold pt-8 pb-4">Filter by Title</p>
                <div className='flex'>
                    <input type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="bg-[#D9D9D9] w-[614px] h-10 pl-4 border border-black" placeholder="Search..." />
                    <button className='size-10 bg-black border border-black text-white'
                        onClick={() => console.log('search', query)}
                    >Go</button>
                </div>



                <div className="flex justify-between pt-8 pb-4 ">
                    <p className="text-base font-normal flex-1">Title</p>
                    <p className="text-base font-normal flex-1">Category</p>
                    <p className="text-base font-normal flex-1"
                    onClick={() => categories.sort((a, b) => a.content.localeCompare(b.content))}
                    >Description</p>
                </div>

                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>
                            <a href="">
                                <div className="flex justify-between border-y border-[#dadada] py-4 ">
                                    <p className="text-base font-bold flex-1">{category.pageTitle}</p>
                                    <p className="text-base font-bold flex-1">{category.pageType}</p>
                                    <p className="text-base font-normal flex-1">{category.content}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>

            </section>
        </main>
    );
};

export default CategoriesListingPage;
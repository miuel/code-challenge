"use client";
import { getCategories } from '@/api/pages/route';
import React, { useEffect } from 'react';
import CategoryItem from '../components/categoryItem/CategoryItem';

export interface Category {
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
    const [categoriesCopy, setCategoriesCopy] = React.useState<Category[]>([]);


    const fetchCategories = async () => {
        const data = await getCategories();
        if (data && data.categories) {
            setCategories(data.categories);
            setCategoriesCopy(data.categories);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);


    useEffect(() => {

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                filterQuery();
            }
        };

        addEventListener('keydown', handleKeyDown);
        return () => {
            removeEventListener('keydown', handleKeyDown);
        };
    }, [query]);

    const filterQuery = () => {
        if (query === '') {
            setCategories(categoriesCopy);
        } else {
            const filteredCategories = categoriesCopy.filter((category) => {
                return category.pageTitle.toLowerCase().includes(query.toLowerCase());
            });
            setCategories(filteredCategories);
        }
    }

    return (
        <main className="min-h-screen w-screen p-4">
            <section id="categories" className="relative my-[30vh]">
                <h1 className="text-4xl sm:text-8xl font-bold text-left pt-8 pb-4">Categories List</h1>
                <p className="text-xl font-bold pt-8 pb-4">Filter by Title</p>
                <div className='flex'>
                    <input type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="bg-[#D9D9D9] w-[614px] h-10 pl-4 border border-black" placeholder="Search..." />
                    <button className='size-10 bg-black border border-black text-white'
                        onClick={filterQuery}
                    >Go</button>
                </div>



                <div className="flex justify-between pt-8 pb-4 pl-4">
                    <p className="text-base font-normal flex-1">Title</p>
                    <p className="text-base font-normal flex-1">Category</p>
                    <p className="text-base font-normal flex-1"
                        onClick={() => categories.sort((a, b) => a.content.localeCompare(b.content))}
                    >Description</p>
                </div>

                {categories.length === 0 &&
                    <div className='grid place-items-center mt-28'>
                        <svg className='size-24 animate-spin' viewBox="-25 -25 250 250" >
                            <circle r="90" cx="100" cy="100" fill="transparent" stroke="#e0e0e0" stroke-width="16px"></circle>
                            <circle r="90" cx="100" cy="100" stroke="#000" stroke-width="16px" stroke-linecap="round" stroke-dashoffset="215px" fill="transparent" stroke-dasharray="565.48px"></circle>
                        </svg>
                    </div>}

                <ul>
                    {categories.map((category) => (
                        <CategoryItem key={category.id.toString()} {...category} />
                    ))}
                </ul>

            </section>
        </main>
    );
};

export default CategoriesListingPage;
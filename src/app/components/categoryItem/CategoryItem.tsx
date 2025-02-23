import { Category } from '@/app/categoriesListingPage/page';
import React from 'react';


const CategoryItem: React.FC<Category> = ({ id, pageTitle,
    pageType,
    content }) => {
    return (
        <li key={id}>
            <a href={`/categoriesListingPage/${pageTitle}`} className=''>
                <div className="flex justify-between border-y border-[#dadada] py-4 hover:bg-black hover:text-white pl-4">
                    <p className="text-base font-bold flex-1">{pageTitle}</p>
                    <p className="text-base font-bold flex-1">{pageType}</p>
                    <p className="text-base font-normal flex-1">{content}</p>
                </div>
            </a>
        </li>
    );
};

export default CategoryItem;
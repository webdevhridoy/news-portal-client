import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../shared/NewsCard/NewsCard';

const Category = () => {
    const catNews = useLoaderData();
    return (
        <div>
            <h2>Category page {catNews.length}</h2>
            <div>
                {
                    catNews.map(news => <NewsCard
                        key={news.category_id}
                        news={news}
                    ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Category;
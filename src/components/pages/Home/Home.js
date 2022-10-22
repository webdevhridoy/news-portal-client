import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../shared/NewsCard/NewsCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>Dragon news {allNews.length}</h2>
            <div className='gap-3'>
                {
                    allNews.map(news => <NewsCard

                        key={news._id}
                        news={news}

                    ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Home;
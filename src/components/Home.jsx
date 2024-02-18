import React from 'react';

const Home = (props) => {
    return (
        <div className=' bg-gray-100 min-h-screen'>
            <h2 className="text-3xl font-bold m-2 mb-8">Top Headlines</h2>

            <div className="min-h-screenpy-6 flex flex-col justify-center sm:py-12">

                <div className="relative py-3 asm:max-w-xl sm:mx-auto">

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {props.data.map((article, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4">
                                <img
                                    src={article.urlToImage ? article.urlToImage : "https://d3aa3603f5de3f81cb9fdaa5c591a84d5723e3cb.hosting4cdn.com/wp-content/uploads/2020/11/404-poster-not-found-CG17701-1.png"}
                                    alt=""
                                    className="w-full h-48 object-cover mb-4 rounded-lg"
                                />
                                <h3 className="text-xl font-semibold mb-2">{article.title ? article.title : "404 Title not found"}</h3>
                                <p className="text-gray-500 mb-4">
                                    {article.description ? article.description : "404 Description not found"}</p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md">Read more</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

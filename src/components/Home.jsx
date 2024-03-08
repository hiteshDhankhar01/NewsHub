import React from 'react';
import LoadingSkeleton from './LoadingSkeleton';

const NewsList = (props) => {
    return (
        <div className=' bg-gray-100 min-h-screen px-2 sm:px-6'>
            <h2 className="text-3xl font-bold m-2 amb-8">Top Headlines</h2>

            <div className="min-h-screenpy-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 asm:max-w-xl sm:mx-auto">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {props.loading ? (
                            // Render loading skeletons while data is being fetched
                            Array.from({ length: 6 }).map((_, index) => (
                                <div href={index} target="_blank" rel="noopener noreferrer" key={index} className="bg-white rounded-lg shadow-md p- hover:cursor-pointer newsItem w-full">
                                    <img
                                        src=""
                                        alt=""
                                        className="w-full bg-green-600 h-48 object-cover mb-4 rounded-tr-lg rounded-tl-lg"
                                    />
                                    <h3 className="h-[2rem] w-full text-xl font-semibold mb-2 px-2 bg-red-700">
                                    </h3>
                                    <p className="text-gray-500 mb-4 px-2">
                                        404 Description not found</p>
                                </div>
                            ))
                        ) : (
                            // Render actual data
                            props.data.map((article, index) => (
                                <a href={article.url} target="_blank" rel="noopener noreferrer" key={index} className="bg-white rounded-lg shadow-md p- hover:cursor-pointer newsItem">
                                    <img
                                        src={article.urlToImage ? article.urlToImage : "https://d3aa3603f5de3f81cb9fdaa5c591a84d5723e3cb.hosting4cdn.com/wp-content/uploads/2020/11/404-poster-not-found-CG17701-1.png"}
                                        alt=""
                                        className="w-full h-48 object-cover mb-4 rounded-tr-lg rounded-tl-lg"
                                    />
                                    <h3 className="text-xl font-semibold mb-2 px-2">{article.title ? article.title : "404 Title not found"}</h3>
                                    <p className="text-gray-500 mb-4 px-2">
                                        {article.description ? article.description : "404 Description not found"}</p>
                                </a>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsList;



// import React from 'react';

// const Home = (props) => {
//     return (
//         <div className=' bg-gray-100 min-h-screen px-2 sm:px-6'>
//             <h2 className="text-3xl font-bold m-2 amb-8">Top Headlines</h2>

//             <div className="min-h-screenpy-6 flex flex-col justify-center sm:py-12">

//                 <div className="relative py-3 asm:max-w-xl sm:mx-auto">

//                     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                         {props.data.map((article, index) => (
//                             <a href={article.url} target="_blank" rel="noopener noreferrer"  key={index} className="bg-white rounded-lg shadow-md p- hover:cursor-pointer newsItem">
//                                 <img
//                                     src={article.urlToImage ? article.urlToImage : "https://d3aa3603f5de3f81cb9fdaa5c591a84d5723e3cb.hosting4cdn.com/wp-content/uploads/2020/11/404-poster-not-found-CG17701-1.png"}
//                                     alt=""
//                                     className="w-full h-48 object-cover mb-4 rounded-tr-lg rounded-tl-lg"
//                                 />
//                                 <h3 className="text-xl font-semibold mb-2 px-2">{article.title ? article.title : "404 Title not found"}</h3>
//                                 <p className="text-gray-500 mb-4 px-2">
//                                     {article.description ? article.description : "404 Description not found"}</p>
//                                 {/* <div className='w-full flex justify-end items-end'>
//                                     <a href={article.url} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md justify-end">Read more</a>
//                                 </div> */}

//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;

import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="bg-green-500 rounded-lg shadow-md p-4 animate-pulse ">
      <div className="w-full h-48 bg-gray-300 mb-4 rounded-tr-lg rounded-tl-lg"></div>
      <div className="h-6 w-3/4 bg-gray-300 mb-2"></div>
      <div className="h-4 w-full bg-gray-300 mb-2"></div>
      <div className="h-4 w-2/3 bg-gray-300"></div>
    </div>
  );
};

export default LoadingSkeleton;

import React from 'react';

const Task = ({ title, description, location, points, completed = false}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-5 w-1">
      <h2 className="text-xl pl-4 font-semibold mt-4 mb-4">{title}</h2>
      <p className="text-gray-700 pl-4 mb-4">{description}</p>
      <div className="flex items-center pl-2 justify-between">
        <p className="text-gray-700 pl-4 mr-2">
          <span className="text-gray-600 mr-1"></span> {location}
        </p>
        <p className="text-gray-700">
          <span className="text-gray-600">Points:</span> {points}
        </p>
      </div>
    </div>
  );
};

export default Task;

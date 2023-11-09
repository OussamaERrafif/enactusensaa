import React from 'react';

const Card = ({ title, description, donationAmount, donationGoal, tags, imageUrl }) => {
  const progress = Math.floor((donationAmount / donationGoal) * 100);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-500 ease-in-out hover:scale-105">
      <img
        className="w-full h-32 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        src={imageUrl}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              className="bg-yellow-500 transition-all duration-500 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-600">
            <span>{donationAmount} USD raised</span>
            <span>{donationGoal} USD goal</span>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 transition-all duration-500 ease-in-out transform hover:-translate-y-1 active:translate-y-0"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
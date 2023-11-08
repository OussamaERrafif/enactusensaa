import React from 'react';
import Button from './Button';

const Card = ({ imageSrc, title, description, tags, donationAmount, donationGoal }) => {
  const donationPercentage = Math.round((donationAmount / donationGoal) * 100);

  return (
    <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-lg transform hover:-translate-y-1 active:translate-y-0 transition duration-300 ease-in-out">
      <div className="relative">
        <img className="w-full" src={imageSrc} alt={title} />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Button text="View More" className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0" />
        </div>
      </div>
      <div className="px-6 py-4 bg-yellow-500">
        <div className="font-bold text-xl mb-2 text-white text-center">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
            <div style={{ width: `${donationPercentage}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-500 ease-in-out"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-600">
            <span>{donationAmount} USD raised</span>
            <span>{donationGoal} USD goal</span>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag) => (
          <span key={tag} className="inline-block bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 transition-all duration-500 ease-in-out transform hover:-translate-y-1 active:translate-y-0">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
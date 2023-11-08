import React from 'react';

const Button = ({ text, spanText }) => {
  return (
    <button className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0">
      {text} <span className="text-gray-400">{spanText}</span>
    </button>
  );
};

export default Button;
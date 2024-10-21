import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-4">{description}</p>
    </div>
  );
};

export default Card;


import React from 'react';

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      {children}
    </div>
  );
};

export default Card;

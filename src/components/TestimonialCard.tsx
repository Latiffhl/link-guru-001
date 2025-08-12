import React from 'react';

interface TestimonialProps {
  name: string;
  major: string;
  quote: string;
  photo: string;
}

const TestimonialCard = ({ name, major, quote, photo }: TestimonialProps) => {
  return (
    <div className="glass-card rounded-xl p-4 text-center">
      <img 
        src={photo}
        alt={name}
        className="w-12 h-12 rounded-full mx-auto mb-3 object-cover border-2 border-text-pink"
      />
      <p className="text-sm italic text-foreground mb-2 font-poppins">
        "{quote}"
      </p>
      <div className="text-xs">
        <p className="font-montserrat font-semibold text-text-purple">{name}</p>
        <p className="text-text-pink">{major}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
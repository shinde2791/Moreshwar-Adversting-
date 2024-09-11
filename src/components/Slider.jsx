import React, { useEffect, useRef } from 'react';

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const moveSlide = () => {
      const max = slider.scrollWidth - slider.clientWidth;
      const left = slider.clientWidth;

      if (max === slider.scrollLeft) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left, behavior: 'smooth' });
      }
    };

    const interval = setInterval(moveSlide, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-[33vh] w-full overflow-hidden flex flex-nowrap text-center"
      ref={sliderRef}
    >
      <div className="bg-blue-600 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl max-w-md">Your Big Idea</h2>
        <p className="max-w-md">It's fast, flexible, and reliable — with zero-runtime.</p>
      </div>
      <div className="bg-pink-400 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl max-w-md">Tailwind CSS works by scanning all of your HTML</h2>
        <p className="max-w-md">It's fast, flexible, and reliable — with zero-runtime.</p>
      </div>
      <div className="bg-teal-500 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl max-w-md">React, Vue, and HTML</h2>
        <p className="max-w-md">Accessible, interactive examples for React and Vue powered by Headless UI, plus vanilla HTML if you’d rather write any necessary JS yourself.</p>
      </div>
    </div>
  );
};

export default Slider;

import React, { useState, useEffect } from 'react';
import upArrow from "../pictures/upArrow.svg"
export default function TopBtn() {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100); // Adjust the value based on when you want the button to appear
    };
  
    // Attach the scroll event listener when the component mounts
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    // Create a function to scroll to the top
    function scrollToTop(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
    
    return (
      <div>
        {isVisible && (
          <button onClick={scrollToTop} className="bg-black rounded fixed bottom-20 right-10 p-1 cursor-pointer z-3">
            <img className='h-[60px] bg-white' src={upArrow} alt="" />
          </button>
        )}
      </div>
    );
}

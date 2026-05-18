"use client";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 2500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Inline styles as fallback
  const buttonStyle = {
    backgroundColor: '#F26522',
    color: 'white',
    padding: '10px 16px',
    borderRadius: '24px',
    border: '2px solid #F26522',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  };

  const hoverStyle = {
    backgroundColor: 'white',
    color: '#F26522',
  };

  return (
    <>
      {/* Test buttons - always visible for debugging */}
      <div className=" hidden top-0 right-4 z-50 space-y-2 ">
      
        <button
          onClick={scrollToTop}
          className="py-2.5 px-4 bg-transparent text-transparent rounded-3xl shadow-2xl  text-xl font-bold transition-all duration-300"
        >
          Test 1 (Tailwind)
        </button>
        
       
        <button
          onClick={scrollToTop}
          style={buttonStyle}
          onMouseEnter={(e) => {
            const target = e.target as HTMLButtonElement;
            Object.assign(target.style, hoverStyle);
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLButtonElement;
            Object.assign(target.style, buttonStyle);
          }}
        >
          Test 2 (Inline)
        </button>
        
       
        <button
          onClick={scrollToTop}
          className="py-2.5 px-4 bg-transparent text-transparent rounded-3xl shadow-2xl hover:bg-white text-xl font-bold transition-all duration-300"
        >
          Test 3 (Orange)
        </button>
      </div>
      
      {/* Original scroll to top button */}
      <div
        className={`fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 transition-all rounded-full duration-1000 shadow-2xl transform ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="py-2.5 px-4 bg-transparent text-transparent rounded-3xl shadow-2xl  text-xl font-bold transition-all duration-300"
            >
            ↑
          </button>
        )}
      </div>
    </>
  );
};

export default ScrollToTop;

import React, { useRef, useEffect } from 'react';
import './ArrowTransition.css'

function ArrowTransition({ href, text }) {
    const iconRef = useRef(null);
    const arrowRef = useRef(null);
  
    useEffect(() => {
      const $icon = iconRef.current;
      const $arrow = arrowRef.current;
  
      const handleClick = () => {
        $arrow.animate(
          [
            { left: '0' },
            { left: '10px' },
            { left: '0' }
          ],
          {
            duration: 700,
            iterations: Infinity
          }
        );
      };
  
      $icon.addEventListener('click', handleClick);
  
      return () => {
        $icon.removeEventListener('click', handleClick);
      };
    }, []);

    return (
        <div className="arrowContainer">
            <a href={href} className="arrowContent">
                {text}
                <div ref={iconRef} className="iconArrow">
                    <div ref={arrowRef} className="arrow"></div>
                </div>
            </a>
        </div>
    );
}

export default ArrowTransition;
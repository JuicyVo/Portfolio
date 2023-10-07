import React, { useRef, useEffect } from 'react';
import './styles.css'; // Import your CSS file if needed
import inosukeHead from './inosukeHead.png'; 
import inosukeBody from './inosukeBody.png'; 

const InosukeHead = () => {
  const headPieceRef = useRef(null);

  useEffect(() => {
    const body = document.getElementById('body');
    const head = document.querySelector('.head');

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const headRect = headPieceRef.current.getBoundingClientRect();
      const headCenterX = headRect.left + headRect.width / 2;
      const headCenterY = headRect.top + headRect.height / 2;

      if (mouseX < headCenterX) {
        headPieceRef.current.classList.add('flipped');
        const angle = Math.atan2(headCenterY - mouseY, headCenterX - mouseX) * (180 / Math.PI);
        headPieceRef.current.style.transform = `rotate(${angle}deg)`;
      } else {
        headPieceRef.current.classList.remove('flipped');
        const angle = Math.atan2(mouseY - headCenterY, mouseX - headCenterX) * (180 / Math.PI);
        headPieceRef.current.style.transform = `rotate(${angle}deg)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="inosuke">
      <img id="body" src={inosukeBody} alt="Inosuke Body" />
      <div id="headPiece" ref={headPieceRef}>
        <img className="head" src={inosukeHead} alt="Inosuke Head" />
      </div>
    </div>
  );
};

export default InosukeHead;

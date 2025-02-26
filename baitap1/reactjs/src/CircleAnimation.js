import React, { useEffect, useRef, useState } from 'react';

const CircleAnimation = () => {
  const canvasRef = useRef(null);
  const [size, setSize] = useState(10);
  const maxSize = 200;
  const minSize = 10;

  // Hàm để vẽ hình tròn trên canvas
  const drawCircle = (size) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Vẽ lại background
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Vẽ hình tròn mới
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = 'yellow';
    ctx.fill();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (size < maxSize) {
        setSize((prevSize) => prevSize + 10); 
      } else {
        setSize(minSize);  
      }
    }, 100);

    return () => clearInterval(intervalId);  
  }, [size]);

  useEffect(() => {
    drawCircle(size);  
  }, [size]);

  return (
    <canvas 
      ref={canvasRef} 
      width="600" 
      height="600" 
      style={{ backgroundColor: 'blue' }} 
    ></canvas>
  );
};

export default CircleAnimation;

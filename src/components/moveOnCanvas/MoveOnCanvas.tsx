import { useEffect, useRef, useState } from 'react';
import './moveOnCanvas.css';

const headerHeight = 85;
const stepSize = 20;

export const MoveOnCanvas = () => {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onArrowClick = (moveX: number, moveY: number) => {
    context!.clearRect(x, y, 100, 100);
    let newX = 0;
    let newY = 0;

    if (x + moveX <= 0) {
      newX = 0;
    } else if (x + moveX >= window.innerWidth) {
      newX = window.innerWidth;
    } else if (Math.abs(x + moveX) >= 0 && x + moveX <= window.innerWidth) {
      newX = x + moveX;
    }

    if (y + moveY + headerHeight <= headerHeight) {
      newY = 0;
    } else if (y + moveY >= window.innerHeight) {
      newY = window.innerHeight;
    } else if (Math.abs(y + moveY) >= 0 && y + moveY <= window.innerHeight) {
      newY = y + moveY;
    }
    context!.fillRect(newX, newY, 100, 100);
    setX(newX);
    setY(newY);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLCanvasElement>) => {
    if (e.key === 'ArrowUp') onArrowClick(0, -stepSize);
    if (e.key === 'ArrowDown') onArrowClick(0, stepSize);
    if (e.key === 'ArrowLeft') onArrowClick(-stepSize, 0);
    if (e.key === 'ArrowRight') onArrowClick(stepSize, 0);
  };

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight - headerHeight;
      canvasRef.current.focus();
      const ctx = canvasRef.current.getContext('2d');
      ctx!.fillRect(0, 0, 100, 100);
      setContext(ctx);
    }
  }, []);

  return (
    <div className='move-canvas-container'>
      <canvas
        tabIndex={1}
        className='canvas'
        onKeyDown={onKeyDownHandler}
        ref={canvasRef}
      ></canvas>
      <div className='canvas-btns'>
        <div className='canvas-btns-container'>
          <button
            className='canvas-btn'
            onClick={() => onArrowClick(0, -stepSize)}
          >
            Up
          </button>
        </div>
        <div className='canvas-btns-container'>
          <button
            className='canvas-btn'
            onClick={() => onArrowClick(-stepSize, 0)}
          >
            Left
          </button>
          <button
            className='canvas-btn'
            onClick={() => onArrowClick(0, stepSize)}
          >
            Down
          </button>
          <button
            className='canvas-btn'
            onClick={() => onArrowClick(stepSize, 0)}
          >
            Right
          </button>
        </div>
      </div>
    </div>
  );
};

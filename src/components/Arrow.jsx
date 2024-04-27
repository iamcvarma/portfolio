import React, { useRef, useEffect,useState } from "react";
function Arrow({ dur, color,scale }) {
  const arrowRef = useRef();
  const [duration, setDuration] = useState(0);

  const calculateduration = (centerX,centerY) => {
    if (!arrowRef.current) return;
    const divRect = arrowRef.current.getBoundingClientRect();
    const divX = divRect.left + divRect.width / 2;
    const divY = divRect.top + divRect.height / 2;
    const durationX = Math.abs(centerX - divX);
    const durationY = Math.abs(centerY - divY);
    const duration = Math.sqrt(Math.pow(durationX, 2) + Math.pow(durationY, 2));
    setDuration(duration);
  };

  useEffect(() => {
    setTimeout(() => {
      if (arrowRef) {
        arrowRef.current.setAttribute("stroke", color);
        arrowRef.current.style.width = scale
      }
    }, duration);
  }, [color,scale]);

  useEffect(() => {
    function handleMouseMove(event) {
      const rect = arrowRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      calculateduration(event.clientX,event.clientY)

      const angle =
        (Math.atan2(y - rect.height / 2, x - rect.width / 2) * 180) / Math.PI;

      arrowRef.current.style.transform = `rotate(${angle}deg)`;
    }

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="rounded-full grid place-content-center " 
    >
      <svg
        viewBox="0 0 24 24"
        ref={arrowRef}
        width="14px"
        className="transition-colors transition-stroke-width duration-200 ease-in-out"
      >
        <path
          d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
          fill="none"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}

export default Arrow;

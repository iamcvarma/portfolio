import React, { useRef, useEffect } from "react";

function Arrow({dur,color}) {
  const arrowRef = useRef();

  useEffect(()=>{
    setTimeout(()=>{
      if (arrowRef) 
      {arrowRef.current.setAttribute('stroke', color)
    console.log(arrowRef.current)
    console.log(color)
    }

    },dur)
  },[color])

  useEffect(() => {
    function handleMouseMove(event) {
      const rect = arrowRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

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
    <div className="rounded-full grid place-content-center ">
      <svg viewBox="0 0 24 24" ref={arrowRef} width="50px" className="transition-colors duration-200 ease-in-out">
        <path
          d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
          fill="none"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default Arrow;

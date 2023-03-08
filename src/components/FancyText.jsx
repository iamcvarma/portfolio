import React, { useState, useEffect } from 'react';

const letters = 'abcdefghijklmnopqrstuvwxyz@#?!';

function FancyText({ text }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    let interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join('')
      );
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return <h1 className="font-[Be Vietnam Pro] text-slate-500">{displayText}</h1>;
}

export default FancyText;

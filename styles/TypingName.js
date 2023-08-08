import React, { useState, useEffect } from 'react';
import { Name } from './indexStyle';

const TypingName = ({ text }) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let direction = 1; // 1 para digitar, -1 para apagar

    const typingInterval = setInterval(() => {
      if (direction === 1) {
        if (currentIndex <= text.length) {
          setTypedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          direction = -1;
        }
      } else if (direction === -1) {
        if (currentIndex >= 0) {
          setTypedText(text.slice(0, currentIndex));
          currentIndex--;
        } else {
          direction = 1;
          currentIndex = 0;
        }
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);

  return <Name>{typedText}</Name>;
};

export default TypingName;

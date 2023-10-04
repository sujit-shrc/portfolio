"use client"

import { useEffect, useState } from 'react';

const TyperComponent: React.FC = () => {
  const [nameIndex, setNameIndex] = useState<number>(-1);
  const [surnameIndex, setSurnameIndex] = useState<number>(-1);
  const [phraseText, setPhraseText] = useState<string>('');
  const [phase, setPhase] = useState<number>(-1);
  const name = 'Sujit';
  const surname = 'Kumar';

  // Initial Delay to Start Typer
  useEffect(() => {
    if (phase === -1) {
      const initialDelay = setTimeout(() => {
        setPhase(0);
      }, 200);

      return () => clearTimeout(initialDelay);
    }
  }, [phase]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (phase === 0) {
        if (nameIndex < name.length || surnameIndex < surname.length) {
          setNameIndex(nameIndex + 1);
          setSurnameIndex(surnameIndex + 1);
        }
        if (nameIndex === name.length && surnameIndex === surname.length) {
          setTimeout(() => setPhase(1), 2000)
        }
      } else if (phase === 1) {
        if (nameIndex > 0 || surnameIndex > 0) {
          setNameIndex(nameIndex - 1);
          setSurnameIndex(surnameIndex - 1);
        }
        if (nameIndex === 0 && surnameIndex === 0) {
          setTimeout(() => setPhase(2), 100);
        }
      }
    }, 300);

    return () => clearInterval(interval);
  }, [nameIndex, surnameIndex, phase, name.length, surname.length]);

  useEffect(() => {
    // Moved phrases here
    const phrases = ["A Glimpse into My Stack"];

    if (phase === 2) {
      const interval = setInterval(() => {
        const phraseToDisplay = phrases[0].slice(0, phraseText.length + 1);
        setPhraseText(phraseToDisplay);

        if (phraseToDisplay === phrases[0]) {
          clearInterval(interval);
        }
      }, 200);

      return () => clearInterval(interval);
    }
  }, [phase, phraseText]);

  return (
    <div className="font-limelight text-center text-3xl md:text-4xl lg:text-5xl font-semibold min-h-[calc(100vh-250px)] md:min-h-[calc(100vh-300px)] flex items-center p-4">
      <span className='text-4xl sm:text-6xl'>
        {name.substring(0, nameIndex)}&nbsp;{surname.substring(0, surnameIndex)}
      </span>
      {phase === 2 && (
        <span>{phraseText}</span>
      )}
    </div>
  );
};

export default TyperComponent;

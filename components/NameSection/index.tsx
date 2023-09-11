"use client"
import React, { useEffect, useState } from 'react';

const TyperComponent: React.FC = () => {
  const [nameText, setNameText] = useState<string>('');
  const [surnameText, setSurnameText] = useState<string>('');
  const [phraseText, setPhraseText] = useState<string>('');
  const [phase, setPhase] = useState<number>(0);
  const name = 'Sujit';
  const surname = 'Kumar';
  const phrases = ['Nucleus Stack Showcase'];

  useEffect(() => {
    const interval = setInterval(() => {
      if (phase === 0) {
        const nameToDisplay = name.slice(0, nameText.length + 1);
        const surnameToDisplay = surname.slice(0, surnameText.length + 1);
        setNameText(nameToDisplay);
        setSurnameText(surnameToDisplay);

        if (nameToDisplay === name && surnameToDisplay === surname) {
          setPhase(1);
        }
      } else if (phase === 1) {
        const nameToRemove = nameText.slice(0, nameText.length - 1);
        const surnameToRemove = surnameText.slice(0, surnameText.length - 1);
        setNameText(nameToRemove);
        setSurnameText(surnameToRemove);

        if (nameToRemove === '' && surnameToRemove === '') {
          setPhase(2);
        }
      }
    }, 200);

    return () => clearInterval(interval);
  }, [nameText, surnameText, phase]);

  useEffect(() => {
    if (phase === 2) {
      const interval = setInterval(() => {
        const phraseToDisplay = phrases[0].slice(0, phraseText.length + 1);
        setPhraseText(phraseToDisplay);

        if (phraseToDisplay === phrases[0]) {
          clearInterval(interval); // Stop the interval when the phrase is fully displayed
        }
      }, 200);

      return () => clearInterval(interval);
    }
  }, [phase, phraseText, phrases]);

  return (
    <div className="text-4xl font-bold p-4">
      <span className={`text-purple-600 transition-opacity ${phase === 0 ? 'opacity-100' : 'opacity-0'}`}>{nameText}</span>
      <span className="mx-1"> </span>
      <span className={`text-purple-600 transition-opacity ${phase === 0 ? 'opacity-100' : 'opacity-0'}`}>{surnameText}</span>
      {phase === 2 && (
        <span className={`text-green-600 ml-4 transition-opacity duration-1000 ${phase === 2 ? 'opacity-100' : 'opacity-0'}`}>{phraseText}</span>
      )}
    </div>
  );
};

export default TyperComponent;

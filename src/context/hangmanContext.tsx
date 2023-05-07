import { createContext, useState, useEffect, useCallback } from 'react';
import { HangmanContextType, ChildrenProps } from '../@types/hangman.ts';
import { wordList } from '../data/hangman.tsx';

const hangmanContext = createContext<HangmanContextType | null>(null);

const HangmanProvider = ({ children }: ChildrenProps) => {
  const [guessWord, setGuessWord] = useState('');
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [incorrectLetters, setIncorrectLetters] = useState<string[]>([]);
  const [gameStart, setGameStart] = useState(false);
  const [customWord, setCustomWord] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const errorAttemps = incorrectLetters.length;
  const didLose = errorAttemps >= 6;

  const handleChangeIsCustom = () => {
    setIsCustom((value) => !value);
  };

  const handleChangeCustomWord = (customWord: string) => {
    setCustomWord(customWord.toLocaleLowerCase());
  };

  const handleChangeGuessWord = useCallback(() => {
    if (customWord.length > 0) {
      setGuessWord(customWord);
      return;
    }
    setGuessWord(wordList[Math.floor(Math.random() * wordList.length)]);
  }, [customWord]);

  const handleSelectedLetters = useCallback(
    (letter: string): void => {
      if (selectedLetters.includes(letter)) return;
      setSelectedLetters((array: string[]) => [...array, letter.toLowerCase()]);
    },
    [selectedLetters]
  );

  const handleChangeGameStart = () => {
    setGameStart(true);
  };

  const handleChangeIsCorrect = useCallback(() => {
    setIsCorrect(() =>
      guessWord.split('').every((letter) => selectedLetters.includes(letter))
    );
  }, [guessWord, selectedLetters]);

  const restartGame = () => {
    setGuessWord(wordList[Math.floor(Math.random() * wordList.length)]);
    setSelectedLetters([]);
    setIncorrectLetters([]);
    setGameStart(false);
    setCustomWord('');
    setIsCorrect(false);
  };

  useEffect(() => {
    handleChangeGuessWord();
  }, [handleChangeGuessWord]);

  useEffect(() => {
    setIncorrectLetters(() =>
      selectedLetters.filter((letter) => !guessWord.includes(letter))
    );
    if (guessWord.length > 0) handleChangeIsCorrect();
  }, [selectedLetters, guessWord, handleChangeIsCorrect]);

  useEffect(() => {
    const keywordLetterHandler = (e: KeyboardEvent): void => {
      if (!isCustom) {
        const key = e.key;
        if (!key.toLowerCase().match(/^[a-z]$/)) return;

        e.preventDefault();
        handleSelectedLetters(key);
      }
    };
    document.addEventListener('keypress', keywordLetterHandler);

    return () => {
      if (!isCustom)
        document.removeEventListener('keypress', keywordLetterHandler);
    };
  }, [handleSelectedLetters, isCustom]);

  return (
    <hangmanContext.Provider
      value={{
        guessWord,
        selectedLetters,
        handleSelectedLetters,
        incorrectLetters,
        errorAttemps,
        isCorrect,
        didLose,
        gameStart,
        handleChangeGameStart,
        handleChangeIsCustom,
        isCustom,
        handleChangeCustomWord,
        customWord,
        restartGame,
      }}
    >
      {children}
    </hangmanContext.Provider>
  );
};

export { HangmanProvider };

export default hangmanContext;

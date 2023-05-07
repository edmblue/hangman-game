import hangmanContext from '../context/hangmanContext';
import { useContext } from 'react';
import { HangmanContextType } from '../@types/hangman.ts';

const useHangman = () => {
  return useContext(hangmanContext) as HangmanContextType;
};

export default useHangman;

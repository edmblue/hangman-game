import { alphabet } from '../data/hangman';
import useHangman from '../hooks/useHangman';

const HangmanKeyword = () => {
  const { handleSelectedLetters, incorrectLetters, selectedLetters, didLose } =
    useHangman();

  return (
    <div className="grid grid-cols-[repeat(8,minmax(10px,1fr))] lg:grid-cols-[repeat(13,minmax(10px,1fr))] gap-3 mx-auto my-8 justify-center">
      {alphabet.map((letter: string, i: number) => {
        const isInactive = incorrectLetters.includes(letter.toLowerCase());
        const isSelected = selectedLetters.includes(letter.toLowerCase());
        return (
          <button
            key={i}
            className={`${isInactive ? 'opacity-50' : ''} ${
              isSelected && !isInactive ? 'bg-blue-200' : ''
            } text-xl md:text-3xl border-2 hover:bg-blue-200 hover:border-gray-500 focus:bg-blue-200 focus:border-gray-500`}
            onClick={() => handleSelectedLetters(letter)}
            disabled={isInactive || isSelected || didLose}
          >
            <span>{letter}</span>
          </button>
        );
      })}
    </div>
  );
};

export default HangmanKeyword;

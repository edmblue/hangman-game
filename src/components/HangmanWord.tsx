import useHangman from '../hooks/useHangman';

const HangmanWord = () => {
  const { guessWord, selectedLetters, didLose } = useHangman();

  return (
    <div className=" text-2xl md:text-4xl font-black uppercase mt-6 mx-auto">
      {guessWord.split('').map((letter: string, i: number) => {
        return (
          <span
            key={i}
            className={`${
              !selectedLetters.includes(letter) ? 'text-red-400' : ''
            } border-b-4 border-black mx-3 w-3 md:w-8 inline-block`}
          >
            <span
              className={`w-full ${
                selectedLetters.includes(letter) || didLose
                  ? 'visible'
                  : 'invisible'
              }`}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default HangmanWord;

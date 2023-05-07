import { useBouncyText } from 'use-bouncy-text';
import HangmanFigure from './components/HangmanFigure';
import HangmanKeyword from './components/HangmanKeyword';
import HangmanWord from './components/HangmanWord';
import useHangman from './hooks/useHangman';
import InitialConf from './components/InitialConf';
import { useRef } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

function App() {
  const { isCorrect, didLose, gameStart, restartGame } = useHangman();

  const bounceRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useBouncyText(bounceRef, 'bouncy-text');

  return (
    <div className=" w-4/5 md:w-3/5 mx-auto flex flex-col min-h-screen align-center justify-center text-center gap-6">
      {isCorrect && (
        <ConfettiExplosion
          className="mx-auto"
          duration={6000}
          particleCount={200}
          width={1600}
        />
      )}
      <header>
        <h1
          className={`text-5xl font-black ${gameStart ? '' : 'bouncy-text'} "`}
        >
          Hangman Game
        </h1>
      </header>
      {(didLose || isCorrect) && (
        <>
          <div
            className={`text-2xl uppercase font-bold text-white ${
              didLose ? 'bg-red-400' : 'bg-green-600'
            }`}
          >
            {didLose ? 'You lose' : 'You won'}
          </div>
          <div>
            <button
              onClick={restartGame}
              className="mt-2 text-2xl font-black uppercase border-2 rounded-md px-3 hover:bg-violet-100"
            >
              Restart
            </button>
          </div>
        </>
      )}
      {gameStart ? (
        <div>
          <HangmanFigure />
          <HangmanWord />
          <HangmanKeyword />
        </div>
      ) : (
        <InitialConf />
      )}
    </div>
  );
}

export default App;

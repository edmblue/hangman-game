import useHangman from '../hooks/useHangman';
import { useState } from 'react';

const InitialConf = () => {
  const {
    handleChangeGameStart,
    handleChangeIsCustom,
    isCustom,
    handleChangeCustomWord,
    customWord,
  } = useHangman();

  const [init, setInit] = useState<boolean>(false);

  const error = customWord.length < 3;

  const handleStart = () => {
    if (error) return;

    handleChangeGameStart();
    handleChangeIsCustom();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 ">
      {isCustom ? (
        <>
          <form
            onSubmit={handleStart}
            className="flex justify-center items-center flex-col"
          >
            <label className="text-xl uppercase font-bold" htmlFor="word">
              Your Word
            </label>
            <input
              className="border-b-4 outline-none"
              type="text"
              name="word"
              id="word"
              value={customWord}
              onChange={(e) => handleChangeCustomWord(e.target.value)}
            />
            <button
              className={`mt-2 text-2xl font-black uppercase border-2 rounded-md px-3 hover:bg-orange-100 ${
                error ? 'cursor-not-allowed opacity-50' : ''
              }`}
              type="submit"
              disabled={error}
            >
              Let's start
            </button>
          </form>
        </>
      ) : init ? (
        <>
          <button
            onClick={handleChangeGameStart}
            className="text-2xl font-black uppercase w-auto border-2 rounded-md px-3 hover:bg-yellow-100"
          >
            Random Word
          </button>
          <button
            onClick={handleChangeIsCustom}
            className="text-2xl font-black uppercase border-2 rounded-md px-3 hover:bg-blue-100"
          >
            Custom Word
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            setInit(true);
          }}
          className="text-2xl font-black uppercase border-2 rounded-md px-3 hover:bg-green-100"
        >
          Start
        </button>
      )}
    </div>
  );
};

export default InitialConf;

export type HangmanContextType = {
  guessWord: string;
  selectedLetters: string[];
  handleSelectedLetters: (letter: string) => void;
  incorrectLetters: string[];
  errorAttemps: number;
  isCorrect: boolean;
  didLose?: boolean;
  gameStart: boolean;
  handleChangeGameStart: () => void;
  handleChangeIsCustom: () => void;
  isCustom: boolean;
  handleChangeCustomWord: (customWord: string) => void;
  customWord: string;
  restartGame: () => void;
};

export type ChildrenProps = {
  children: React.ReactNode;
};

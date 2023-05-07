import useHangman from '../hooks/useHangman';

const HEAD = (
  <div
    key="head"
    className="h-[40px] w-[40px] rounded-full border-[7px] border-black absolute top-[45px] left-[225px]"
  />
);

const BODY = (
  <div
    key="body"
    className="h-[120px] w-[6px] bg-black absolute top-[85px] right-[-48px]"
  />
);

const RIGHT_ARM = (
  <div
    key="rightArm"
    className="h-[60px] w-[6px] bg-black absolute top-[95px] right-[-70px] -rotate-45"
  />
);

const LEFT_ARM = (
  <div
    key="leftArm"
    className="h-[60px] w-[6px] bg-black absolute top-[95px] right-[-26px] rotate-45"
  />
);

const RIGHT_LEG = (
  <div
    key="rightLeg"
    className="h-[60px] w-[6px] bg-black absolute top-[190px] right-[-70px] -rotate-45"
  />
);

const LEFT_LEG = (
  <div
    key="leftLeg"
    className="h-[60px] w-[6px] bg-black absolute top-[190px] right-[-26px] rotate-45"
  />
);

const HangmanFigure = () => {
  const { errorAttemps } = useHangman();

  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

  return (
    <div className="mx-auto flex sm:justify-center">
      <div className="relative">
        {BODY_PARTS.slice(0, errorAttemps)}
        <div className="h-[35px] w-[10px] bg-black absolute top-[10px] left-[240px]" />
        <div className="h-[10px] w-[150px] bg-black absolute left-[100px]" />
        <div className="h-[300px] w-[10px] bg-black mx-auto" />
        <div className="h-[10px] w-[200px] bg-black mx-auto" />
      </div>
    </div>
  );
};

export default HangmanFigure;

import React from "react";
import Countdown from "../components/countdown";
import LoopInput from "../components/loopInput";
import TimeStepsMenu from "../components/timeStepsMenu/timeStepsMenu";
import { useMainContext } from "../contexts/mainContext";
import { componentBackgrounds, stateBasedClassName } from "../data/data";

const App = () => {
  const { state } = useMainContext();

  return (
    <main id="main" className={"flex " + stateBasedClassName[state]}>
      <div className="h-screen">
        <div className="relative mb-5 md:mb-20">
          <svg
            className="w-[320px] md:w-[350px] lg:w-96"
            viewBox="0 0 561 193"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M560.998 0C542.786 25.3702 503.491 59.1282 432.5 104C333.891 166.328 194.128 190.002 48.2148 193H0V0H560.998Z"
              fill={componentBackgrounds[state]}
            />
          </svg>
          <div className="absolute top-9">
            <h1 className="text-3xl md:text-4xl lg:text-[40px] pl-5 primary-color">
              PomodorX
            </h1>
          </div>
        </div>
        <div className="flex md:hidden h-[172px] w-full justify-center items-center mb-5">
          {state === 0 ? <LoopInput /> : <Countdown isSecond={false} />}
        </div>

        <TimeStepsMenu />
      </div>

      <div className="hidden md:flex w-full h-screen justify-center items-center">
        {state === 0 ? <LoopInput /> : <Countdown isSecond={true} />}
      </div>
    </main>
  );
};

export default App;

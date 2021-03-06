import React, { useEffect, useState } from "react";
import { useMainContext } from "../contexts/mainContext";

const LoopInput = () => {
  const { setLoopData, startNextStep, loopData } = useMainContext();
  const [pastLoopCount, setPastLoopCount] = useState(0);
  const [loopCount, setLoopCount] = useState(
    loopData.loopCount >= 0 ? loopData.loopCount : 0
  );
  const [isDisabled, setIsDisabled] = useState(false);

  //* Updating the steps data if the loop count changes
  useEffect(() => {
    if (loopData.loopCount != loopCount) {
      setLoopData({
        pastLoopCount: pastLoopCount,
        loopCount: loopCount,
      });
    }
    setPastLoopCount(loopCount);

    // Setting isDisabled to disable the user inputs for the business layer to have valid values
    if (loopCount <= 0) {
      setIsDisabled(true);
    } else if (isDisabled) {
      setIsDisabled(false);
    }
  }, [loopCount]);

  return (
    <div>
      <div className="flex items-center mb-2">
        <label
          className="text-2xl md:text-[1.625rem] lg:text-3xl mr-2 mb-0"
          htmlFor="loopCount"
        >
          Loop Count:
        </label>
        <div className="relative flex items-center">
          <input
            value={loopCount}
            min={0}
            max={12}
            onChange={(e) => {
              setLoopCount(
                parseInt(e.target.value)
                  ? parseInt(e.target.value) > 12
                    ? 12
                    : parseInt(e.target.value)
                  : 0
              );
            }}
            placeholder="Number of times you want to do the loop"
            type="number"
            id="loopCount"
            className="main-border"
          />
          <div className="loopButtons absolute right-3">
            <button
              onClick={() => {
                setLoopCount(loopCount + 1);
              }}
              className="loopButton"
              id="up"
            >
              <div className="arr" />
            </button>
            <button
              disabled={isDisabled}
              onClick={() => {
                setLoopCount(loopCount - 1);
              }}
              className="loopButton"
              id="down"
            >
              <div className="arr" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:mt-2 lg:mt-3">
        <button
          className="primary-bg main-border rounded-[1.25rem] text-xl  md:text-2xl lg:text-3xl px-5 md:px-6 py-1 lg:py-1.5 lg:px-10"
          id="startButton"
          disabled={isDisabled}
          onClick={() => {
            startNextStep();
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default LoopInput;

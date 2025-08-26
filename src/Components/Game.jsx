import { useState } from "react";
import RoleDice from "./RoleDice";

const Game = () => {
  const [currNumber, setCurrNumber] = useState(1); 
  const [score, setScore] = useState(0); // new state for total score

  // function to handle roll
  const handleRoll = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setCurrNumber(randomNum);
    setScore((prev) => prev + randomNum); // increase score
  };

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col items-center p-4 mx-4 gap-3">
          <h1 className="text-6xl">{score}</h1> {/* show score */}
          <p className="text-2xl font-bold">Total Score</p>
        </div>
      </div>

      {/* Pass props down */}
      <RoleDice currNumber={currNumber} handleRoll={handleRoll} />
    </div>
  );
};

export default Game;

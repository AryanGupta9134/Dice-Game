import { useState } from "react";

const Game = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const [selected, setSelected] = useState();

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col items-center p-4 mx-4 gap-3">
          <h1 className="text-6xl">0</h1>
          <p className="text-2xl font-bold">Total Score</p>
        </div>
        <div className="flex flex-col items-center mx-4">
          <div className="flex gap-2">
            {arr.map((num, index) => (
              <button
                key={index}
                className={`border p-5 rounded font-bold ${
                  selected === num ? "bg-black text-white" : ""
                }`}
                onClick={() => setSelected(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <p className="mt-2 font-bold">Select Number</p>
        </div>
      </div>
    </div>
  );
};

export default Game;

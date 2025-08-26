const RoleDice = ({ currNumber, handleRoll }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex justify-center items-center mt-10" onClick={handleRoll}>
        <img
          src={`dice_${currNumber}.png`}
          alt={`Dice-${currNumber}`}
          className="transition-transform duration-300 cursor-pointer"
        />
      </div>

    </div>
  );
};

export default RoleDice;

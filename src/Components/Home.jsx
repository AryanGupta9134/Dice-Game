import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/next");
  }
  return (
    <div className="flex justify-around items-center h-screen">
      <div className="w-1/2">
        <img src="HomeImage.png" alt="HomeImage" />
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-8xl">Dice Game</h1>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-2xl hover:bg-blue-700 transition duration-300" onClick={handleClick}>
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Home;

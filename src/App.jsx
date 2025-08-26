import { Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Game from "./Components/Game";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/next" element={<Game />} />
    </Routes>
  );
};

export default App;

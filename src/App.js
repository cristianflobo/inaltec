import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Data } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Data />} />
    </Routes>
  );
}

export default App;

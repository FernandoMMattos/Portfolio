import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Preset from "./pages/Preset";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Preset />}>
          <Route index element={<Home />}></Route>
          <Route path="about-me" element={<AboutMe />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

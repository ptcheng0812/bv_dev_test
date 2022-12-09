import { BrowserRouter, Routes, Route } from "react-router-dom";

import style from './App.module.scss';
import Home from './pages/Home';
import Data from './pages/Data';
import Hero from './components/Hero';
import SideBar from "./components/SideBar";

const App = () => (
  <div className={style.main}>
    {/* <Hero /> */}
    <SideBar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Hero /><Home /></>} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;

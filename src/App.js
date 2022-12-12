import { BrowserRouter, Routes, Route } from "react-router-dom";

import style from './App.module.scss';
import Home from './pages/Home';
import Data from './pages/Data';
import SideBar from "./components/SideBar";
import Nav from "./components/Nav";

const App = () => (
  <div className={style.main}>
    <Nav/>
    <SideBar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/data" element={<Data />} />
        <Route path="/data/:dataId" element={<Data />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;

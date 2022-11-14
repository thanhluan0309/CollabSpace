import React from "react";
import { Luan } from "./component/luan/luan";
import "./App.css";
import { Dang } from "./component/dang/dang";
import { Tuan } from "./component/tuan/tuan";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./component/DashBoard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/luan" element={<Luan></Luan>}></Route>
        <Route path="/dang" element={<Dang></Dang>}></Route>
        <Route path="/tuan" element={<Tuan></Tuan>}></Route>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

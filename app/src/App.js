import React from "react";
import { Routes, Route } from "react-router-dom";
import FixEffect from "./pages/FixEffect/FixEffect";
import Home from "./pages/Home/Home";
import Panel from "./pages/Panel/Panel";

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/fix-effect" element={<FixEffect />} />
      </Routes>
    </main>
  );
}

export default App;

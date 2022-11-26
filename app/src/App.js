import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Panel from "./pages/Panel/Panel";

function App() {
  return (
    <main className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </Layout>
    </main>
  );
}

export default App;

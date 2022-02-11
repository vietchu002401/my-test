import Header from "./components/header/Header";
import "./global-style/App.scss"
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TextShadow from "./components/pages/text-shadow/TextShadow";
import NotFound from "./components/pages/not-found/NotFound";
import Home from "./components/pages/home/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/text-shadow" element={<TextShadow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

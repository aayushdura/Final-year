import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Answer from "./pages//Answer";
import Topics from "./pages/Topics";
import Container from "./pages/Container";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/explore" element={<Explore />}></Route>
        <Route exact path="/answer" element={<Answer />}></Route>
        <Route exact path="/topics" element={<Topics />}></Route>
        <Route exact path="/container" element={<Container />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

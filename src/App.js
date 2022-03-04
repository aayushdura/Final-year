import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Answer from "./pages//Answer";
import Topics from "./pages/Topics";
import Container from "./pages/Container";
import Header from "./components/Header";
import LeftNavBar from "./components/LeftNavBar";
import RightNavBar from "./components/RightNavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="primary-section">
          <div className="leftnav-body">
            <LeftNavBar />
          </div>
          <div className="routing-section">
            <Routes>
              <Route exact path="/" element={<Container />}></Route>
              <Route exact path="/explore" element={<Explore />}></Route>
              <Route exact path="/answer" element={<Answer />}></Route>
              <Route exact path="/topics" element={<Topics />}></Route>
            </Routes>
          </div>
          <div className="rightnav-body">
            <RightNavBar />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

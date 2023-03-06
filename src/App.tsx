import React from "react";
import Home from "./Pages/Home/Home";
import { GlobalStyle } from "./global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from "./Pages/SignIn/SignIn";
import { SignUp } from "./Pages/SignUp/SignUp";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

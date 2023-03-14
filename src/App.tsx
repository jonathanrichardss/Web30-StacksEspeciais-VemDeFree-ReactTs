import React from "react";
import Home from "./Pages/Home/Home";
import { GlobalStyle } from "./global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from "./Pages/SignIn/SignIn";
import { SignUp } from "./Pages/SignUp/SignUp";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { UserPage } from "./Pages/UserPage/UserPage";
import { Jobs } from "./Pages/Jobs/Jobs";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/signin"
              element={
                <RequireAuth>
                  <SignIn />
                </RequireAuth>
              }
            ></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <UserPage />
                </RequireAuth>
              }
            ></Route>
            <Route path="/jobs" element={<Jobs />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

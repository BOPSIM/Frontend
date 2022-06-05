import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "Views/Login";
import LoginForm from "Views/Login/login_form";
import SignUp from "Views/Login/signup_form";
import SignSucceed from "Views/Login/signup_succeed";

function App() {
  return (
    <div
      className="App"
      style={{
        marginLeft: -10,
        marginTop: -10,
        marginRight: 0,
        marginBottom: 0,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/succeed" element={<SignSucceed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

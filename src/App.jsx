import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "Views/Login";
import EmailLogin from "Views/Login/email_login";
import KakaoLogin from "Views/Login/kakao_login";
import LoginForm from "Views/Login/login_form";
import SignUp from "Views/Login/sign_up";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/klogin" element={<KakaoLogin />} />
          <Route path="/elogin" element={<EmailLogin />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

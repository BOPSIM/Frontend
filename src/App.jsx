import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "Views/Login";
import EmailLogin from "Views/Login/email_login";
import KakaoLogin from "Views/Login/kakao_login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<KakaoLogin />} />
          <Route path="/login" element={<EmailLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

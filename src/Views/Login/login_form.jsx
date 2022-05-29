import React from "react";
import styled from "styled-components";
import login_box from "/Users/juhee/Frontend/src/images/login_box.png";
import main_logo from "/Users/juhee/Frontend/src/images/main_logo.png";
import LOGIN from "/Users/juhee/Frontend/src/images/LOGIN.png";
import EmailLogin from "Views/Login/email_login";
import KakaoLogin from "Views/Login/kakao_login";

function LoginForm() {
  return (
    <Container>
      <Div>
        {KakaoLogin()}
        {EmailLogin()}
      </Div>
      <img src={login_box} alt="box" />
      <img src={main_logo} alt="bopsim logo" style={logoStyle} />
      <img src={LOGIN} alt="login copy" style={loginStyle} />
    </Container>
  );
}

const Container = styled.div`
  padding-top: 20px;
  text-align: center;
  background-color: #e9e3cf;
`;

const logoStyle = {
  position: "absolute",
  marginLeft: "-560px",
  marginTop: "80px",
};

const loginStyle = {
  position: "absolute",
  marginLeft: "-560px",
  marginTop: "150px",
};

const Div = styled.div`
  postion: absolute;
  margin-top: 100px;
`;

export default LoginForm;

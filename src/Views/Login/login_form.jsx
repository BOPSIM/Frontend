import React from "react";
import styled from "styled-components";
import main_logo from "/Users/juhee/Frontend/src/images/main_logo.png";
import LOGIN from "/Users/juhee/Frontend/src/images/LOGIN.png";
import EmailLogin from "Views/Login/email_login";
import KakaoLogin from "Views/Login/kakao_login";
import login_bg from "images/login_bg.png";

function LoginForm() {
  return (
    <>
      <Container>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "30px",
            padding: "80px 110px",
            width: "500px",
            margin: "0 auto",
          }}
        >
          <img
            src={main_logo}
            alt="bopsim logo"
            style={{ display: "block", marginBottom: "22px" }}
          />
          <img
            src={LOGIN}
            alt="login copy"
            style={{ display: "block", marginBottom: "0px" }}
          />
          {KakaoLogin()}
          <hr
            style={{
              marginTop: 40,
              marginBottom: 40,
              width: 450,
            }}
          ></hr>
          {EmailLogin()}
        </div>
      </Container>
      <img
        src={login_bg}
        alt="background"
        style={{
          width: "100%",
          height: "1000px",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          objectFit: "cover",
        }}
      ></img>
    </>
  );
}

const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
`;

export default LoginForm;

import React from "react";
import styled from "styled-components";
import SIGNIN from "/Users/juhee/Frontend/src/images/SIGN IN.png";
import EmailSignUp from "Views/Login/email_signup";
import KakaoSignUp from "Views/Login/kakao_signup";
import login_bg from "images/login_bg.png";

function SignUp() {
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
          <img src={SIGNIN} alt="signin copy" style={{ display: "block" }} />
          <h1
            style={{
              color: "#F64F00",
              fontSize: "24px",
              marginTop: "30px",
              display: "block",
              marginLeft: "-270px",
            }}
          >
            아직 회원이 아니신가요?
          </h1>
          {KakaoSignUp()}
          <hr
            style={{
              marginTop: 40,
              marginBottom: 20,
              width: 450,
            }}
          ></hr>
          {EmailSignUp()}
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

export default SignUp;

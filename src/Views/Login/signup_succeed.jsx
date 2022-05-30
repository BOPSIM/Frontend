import React from "react";
import styled from "styled-components";
import main_logo from "/Users/juhee/Frontend/src/images/main_logo.png";
import Hi from "/Users/juhee/Frontend/src/images/Hi.png";
import login_bg from "images/login_bg.png";

function SignSucceed() {
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
            src={Hi}
            alt="hi"
            style={{ display: "block", marginBottom: "0px" }}
          />
          <h1
            style={{
              display: "block",
              marginBottom: "150px",
              color: "#f64f00",
              marginLeft: "-140px",
            }}
          >
            회원이 되신 것을 환영합니다!
          </h1>

          <a href="/" style={{ textDecorationLine: "none" }}>
            <button
              type="text"
              id="backHome_btn"
              style={{
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "60px",
                display: "block",
                width: "446px",
                height: "60px",
                margin: "auto",
                marginTop: "10px",
                cursor: "pointer",
                textAlign: "center",
                color: "#f64f00",
                border: "solid 2px #f64f00",
                borderRadius: "30px",
                backgroundColor: "white",
                postion: "absolute",
              }}
            >
              홈 화면으로 돌아가기
            </button>
          </a>

          <a href="/login" style={{ textDecorationLine: "none" }}>
            <button
              type="text"
              id="backHome_btn"
              style={{
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "60px",
                display: "block",
                width: "446px",
                height: "60px",
                margin: "auto",
                marginTop: "10px",
                cursor: "pointer",
                textAlign: "center",
                color: "white",
                border: "none",
                borderRadius: "30px",
                backgroundColor: "#f64f00",
                postion: "absolute",
              }}
            >
              로그인 하기
            </button>
          </a>
        </div>
      </Container>
      <img
        src={login_bg}
        alt="background"
        style={{
          width: "100%",
          height: "950px",
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

export default SignSucceed;

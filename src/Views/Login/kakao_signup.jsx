import React from "react";
import styled from "styled-components";
import kLogo from "/Users/juhee/Frontend/src/images/kLogo.png";

export default function KakaoSignUp() {
  return (
    <>
      <Button as={"a"} href={KAKAO_AUTH_URL}>
        <img
          src={kLogo}
          alt="kakaoimage"
          style={{
            width: "33px",
            height: "30px",
            marginLeft: "-135px",
            marginTop: "15px",
          }}
        />
        <p
          style={{
            color: "black",
            fontWeight: 700,
            marginLeft: 120,
            marginTop: 20,
          }}
        >
          카카오로 회원가입 하기
        </p>
      </Button>
    </>
  );
}

const Button = styled.button`
  background-color: #ffe812;
  border-radius: 30px;
  width: 480px;
  height: 60px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  text-decoration-line: none;
`;

// 로그인 세팅이니까 가입에 맞게 변경하기
const CLIENT_ID = "http://localhost:3000";
const REDIRECT_URI = "http://localhost:8080/join/info"; // 프론트로 할 수도 있고 백엔드로 할 수도 있음.

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

import React from "react";
import styled from "styled-components";
import white_arrow from "/Users/juhee/Frontend/src/images/white_arrow.png";

function EmailSignUp() {
  return (
    <form
      action="/Users/juhee/Frontend/src/Views/Login/index.jsx"
      name="Elogin"
      method="get"
    >
      <Container>
        <Input
          id="username"
          name="username"
          type="email"
          placeholder="이메일 주소를 입력해주세요"
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <A href="#">비밀번호 찾기</A>
        <Button type="submit">
          <img
            src={white_arrow}
            alt="white_arrow"
            style={{
              width: "20px",
              marginLeft: "-10px",
              marginRight: "15px",
              marginBottom: "-5px",
            }}
          ></img>
          이메일로 회원가입 하기
        </Button>
      </Container>
    </form>
  );
}

const Container = styled.div`
  padding-top: 20px;
  // display: block;
  margin: 0 auto;
  text-align: center;
`;

const Input = styled.input`
  display: block;
  overflow: hidden;
  width: 400px;
  height: 50px;
  margin: auto;
  margin-bottom: 18px;
  margin-left: 40px;
  padding: 5px 45px 5px 20px;
  border: none;
  border-bottom: solid 2px #f64f00;
  background: #fff;
  box-sizing: border-box;
  postion: absolute;
  font-size: 15px;
`;

const A = styled.a`
  color: #f64f00;
  font-weight: 600;
`;

const Button = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 60px;
  display: block;
  width: 446px;
  height: 60px;
  margin: auto;
  margin-top: 10px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 30px;
  background-color: #f64f00;
  postion: absolute;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;

export default EmailSignUp;

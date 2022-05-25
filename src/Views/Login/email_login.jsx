import React from "react";
import styled from "styled-components";

function LoginForm() {
  return (
    <Container>
      <Input
        id="id"
        name="id"
        type="email"
        placeholder="이메일 주소를 입력해주세요"
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
      />
      <A href="#">아직 회원이 아니신가요?</A>
      <Button>이메일로 로그인하기</Button>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 100px;
  padding-top: 20px;
  text-align: center;
`;

const Input = styled.input`
  display: block;
  position: relative;
  overflow: hidden;
  width: 446px;
  height: 50px;
  margin: auto;
  margin-bottom: 18px;
  padding: 5px 45px 5px 20px;
  border: solid 1px #f64f00;
  border-radius: 30px;
  background: #fff;
  box-sizing: border-box;
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
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;

export default LoginForm;

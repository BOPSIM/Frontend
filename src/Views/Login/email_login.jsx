import React from "react";
import styled from "styled-components";

function EmailLogin() {
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
          // value={username_inputValue}
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          // value={password_inputValue}
        />
        <A href="signup">아직 회원이 아니신가요?</A>
        <Button type="submit" id="login_btn">
          이메일로 로그인하기
        </Button>
      </Container>
      <script type="text/javascript" src="email_condition.js"></script>
    </form>
  );
}

// const isActiveLogin = () => {
//   let idValue = username_inputValue;
//   let pwValue = password_inputValue;

//   if (idValue && pwValue && pwValue.length > 4) {
//     login_btn.classList.add("login_active");
//   } else {
//     login_btn.classList.remove("login_active");
//   }
// };

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

export default EmailLogin;

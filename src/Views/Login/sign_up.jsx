import React from "react";
import styled from "styled-components";
import mini_box from "/Users/juhee/Frontend/src/images/minibox.png";
import SIGNIN from "/Users/juhee/Frontend/src/images/SIGN IN.png";
import EmailLogin from "Views/Login/email_login";

// style={boxStyle}

function SignUp() {
  return (
    <>
      {EmailLogin()}
      <Container>
        <img src={mini_box} alt="box" />
        <img src={SIGNIN} alt="signin copy" style={signinStyle} />
        <h1 style={h1style}>아직 회원이 아니신가요?</h1>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding-top: 20px;
  text-align: center;
  background-color: #e9e3cf;
`;

const signinStyle = {
  position: "absolute",
  marginLeft: "-560px",
  marginTop: "70px",
};

const h1style = {
  //   positon: "absolute",
  marginLeft: "-220px",
  marginTop: "-425px",
  color: "#F64F00",
  fontSize: "24px",
};

export default SignUp;

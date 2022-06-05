import React from "react";
import styled from "styled-components";
import main_logo from "/Users/juhee/Frontend/src/images/main_logo.png";
import home from "/Users/juhee/Frontend/src/images/home.png";

export default function Login() {
  return (
    <>
      {/* 상단 메뉴바 */}
      <nav>
        <img
          src={main_logo}
          alt="bopsim logo"
          style={{
            position: "absolute",
            marginLeft: 324,
            marginTop: 56,
          }}
        ></img>

        <input
          type="search"
          style={{
            position: "absolute",
            marginTop: 56,
            marginLeft: "43%",
            marginRight: "50%",
            width: 486,
            height: 43,
            border: "solid 2px #FE8C00",
            borderRadius: 30,
            textAlign: "center",
          }}
          placeholder="서울특별시 광진구 화양동 능동로 120"
        ></input>

        <span
          style={{
            position: "absolute",
            marginLeft: "85%",
            marginTop: 56,
          }}
        >
          <a
            href="login"
            style={{ color: "black", textDecorationLine: "none" }}
          >
            로그인/
          </a>
          <a
            href="signup"
            style={{ color: "black", textDecorationLine: "none" }}
          >
            회원가입{" "}
          </a>
        </span>
      </nav>

      <h1
        style={{
          position: "absolute",
          marginLeft: 324,
          marginTop: 180,
          borderBottom: "5px solid #FE8C00",
        }}
      >
        Menu
      </h1>

      <div
        style={{
          position: "absolute",
          marginLeft: 324,
          marginTop: 269,
          backgroundColor: "#FFEBD4",
          width: 220,
          height: 220,
          borderRadius: 30,
        }}
      >
        <h2 style={{ fontSize: 24, marginLeft: 25 }}>양식</h2>
      </div>

      <div
        style={{
          position: "absolute",
          marginLeft: 570,
          marginTop: 269,
          backgroundColor: "#FFEBD4",
          width: 220,
          height: 220,
          borderRadius: 30,
        }}
      >
        {" "}
        <h2 style={{ fontSize: 24, marginLeft: 25 }}>한식</h2>
      </div>

      <div
        style={{
          position: "absolute",
          marginLeft: 815,
          marginTop: 269,
          backgroundColor: "#FFF4D2",
          width: 220,
          height: 220,
          borderRadius: 30,
        }}
      >
        {" "}
        <h2 style={{ fontSize: 24, marginLeft: 25 }}>일식/회</h2>
      </div>

      <div
        style={{
          position: "absolute",
          marginLeft: 1055,
          marginTop: 269,
          backgroundColor: "#FDDBD9",
          width: 220,
          height: 220,
          borderRadius: 30,
        }}
      >
        {" "}
        <h2 style={{ fontSize: 24, marginLeft: 25 }}>중식</h2>
      </div>

      <div
        style={{
          position: "absolute",
          marginLeft: 324,
          marginTop: 510,
          backgroundColor: "#FFF4D2",
          width: 220,
          height: 220,
          borderRadius: 30,
        }}
      >
        {" "}
        <h2 style={{ fontSize: 24, marginLeft: 25 }}>카페/디저트</h2>
      </div>

      <div
        style={{
          position: "absolute",
          marginLeft: 569,
          marginTop: 510,
          backgroundColor: "#FDDBD9",
          width: 220,
          height: 220,
          borderRadius: 30,
        }}
      >
        {" "}
        <h2 style={{ fontSize: 24, marginLeft: 25 }}>분식</h2>
      </div>

      <div
        style={{
          position: "absolute",
          marginLeft: 815,
          marginTop: 510,
          backgroundColor: "#FFEBD4",
          width: 220,
          height: 220,
          borderRadius: 30,
        }}
      >
        {" "}
        <h2 style={{ fontSize: 24, marginLeft: 25 }}>아시안</h2>
      </div>

      <div
        style={{
          position: "absolute",
          marginLeft: 1055,
          marginTop: 510,
          backgroundColor: "#FFEBD4",
          width: 220,
          height: 220,
          borderRadius: 30,
        }}
      >
        {" "}
        <h2 style={{ fontSize: 24, marginLeft: 25 }}>야식</h2>
      </div>

      {/* 구분점*/}
      <hr
        style={{
          position: "absolute",
          marginTop: 771,
          marginLeft: "324px",
          width: 1200,
        }}
      ></hr>

      <h1
        style={{
          position: "absolute",
          marginLeft: 324,
          marginTop: 826,
          borderBottom: "5px solid #FE8C00",
        }}
      >
        Lastest
      </h1>

      {/* 왼쪽 메뉴바 */}
      <nav
        style={{
          width: 191,
          height: 1200,
          marginRight: 0,
          padding: 0,
          boxShadow: "4px 4px 15px #D9D9D9",
        }}
      >
        <div
          style={{
            backgroundColor: "#FE8C00",
            width: 191,
            height: 180,
            marginBottom: 60,
          }}
        >
          <img
            src={home}
            style={{ width: 31, height: 30, marginTop: 76, marginLeft: 80 }}
          ></img>
        </div>
        <ul
          style={{
            margin: 0,
            padding: 0,
            width: "191px",
          }}
        >
          <li style={liStyle}>
            <Button as={"a"} href="#">
              검색하기
            </Button>
          </li>
          <hr align="left" style={{ width: "154px", marginLeft: 16 }}></hr>
          <li style={liStyle}>
            <Button as={"a"} href="#">
              주문내역
            </Button>
          </li>
          <hr align="left" style={{ width: "154px", marginLeft: 16 }}></hr>
          <li style={liStyle}>
            <Button as={"a"} href="#">
              찜하기
            </Button>
          </li>
          <hr align="left" style={{ width: "154px", marginLeft: 16 }}></hr>
          <li style={liStyle}>
            <Button as={"a"} href="#">
              장바구니
            </Button>
          </li>
          <hr align="left" style={{ width: "154px", marginLeft: 16 }}></hr>
          <li style={liStyle}>
            <Button as={"a"} href="#">
              마이페이지
            </Button>
          </li>
        </ul>
      </nav>
    </>
  );
}

const liStyle = {
  display: "block",
  textAlign: "center",
};

const Button = styled.button`
  text-decoration-line: none;
  color: black;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
  padding-top: 30px;
  width: 160px;
  height: 46px;
  border: none;
  background-color: white;
  border-radius: 20px;
  &:hover {
    background: linear-gradient(45deg, #f64f00, #fe8c00);
    color: white;
  }
`;

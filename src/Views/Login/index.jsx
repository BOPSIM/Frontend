import React from "react";
import styled from "styled-components";
import main_logo from "/Users/juhee/Frontend/src/images/main_logo.png";
import home from "/Users/juhee/Frontend/src/images/home.png";
import hb from "/Users/juhee/Frontend/src/images/hamburger.png";
import jf from "/Users/juhee/Frontend/src/images/japan.png";
import cf from "/Users/juhee/Frontend/src/images/china.png";
import df from "/Users/juhee/Frontend/src/images/dessert.png";
import sf from "/Users/juhee/Frontend/src/images/snack.png";
import af from "/Users/juhee/Frontend/src/images/asian.png";
import ex_1 from "/Users/juhee/Frontend/src/images/포케.png";
import ex_2 from "/Users/juhee/Frontend/src/images/샐러드.png";
import ex_3 from "/Users/juhee/Frontend/src/images/라멘.png";
import ex_4 from "/Users/juhee/Frontend/src/images/햄버거.png";
import ex_5 from "/Users/juhee/Frontend/src/images/피자.png";
import moveScrollLeft from "/Users/juhee/Frontend/src/Views/Login/scrollLeft";

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
      {/*메뉴 목록*/}
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
      <a href="#">
        <div
          style={{
            position: "absolute",
            marginLeft: 324,
            marginTop: 269,
            backgroundColor: "#FFEBD4",
            width: 220,
            height: 220,
            borderRadius: 30,
            color: "black",
          }}
        >
          <h2 style={{ fontSize: 24, marginLeft: 25 }}>양식</h2>
          <img
            src={hb}
            alt="hamburger"
            style={{ marginLeft: 88, marginTop: 20, borderRadius: 30 }}
          ></img>
        </div>
      </a>
      <a href="#">
        <div
          style={{
            position: "absolute",
            marginLeft: 570,
            marginTop: 269,
            backgroundColor: "#FFEBD4",
            width: 220,
            height: 220,
            borderRadius: 30,
            color: "black",
          }}
        >
          {" "}
          <h2 style={{ fontSize: 24, marginLeft: 25 }}>한식</h2>
        </div>
      </a>
      <a href="#">
        <div
          style={{
            position: "absolute",
            marginLeft: 815,
            marginTop: 269,
            backgroundColor: "#FFF4D2",
            width: 220,
            height: 220,
            borderRadius: 30,
            color: "black",
          }}
        >
          {" "}
          <h2 style={{ fontSize: 24, marginLeft: 25 }}>일식/회</h2>
          <img
            src={jf}
            alt="japanese food"
            style={{ marginLeft: 55, marginTop: -10, borderRadius: 30 }}
          ></img>
        </div>
      </a>
      <a href="#">
        <div
          style={{
            position: "absolute",
            marginLeft: 1055,
            marginTop: 269,
            backgroundColor: "#FDDBD9",
            width: 220,
            height: 220,
            borderRadius: 30,
            color: "black",
          }}
        >
          {" "}
          <h2 style={{ fontSize: 24, marginLeft: 25 }}>중식</h2>
          <img
            src={cf}
            alt="chinese food"
            style={{ marginLeft: 60, marginTop: -10, borderRadius: 30 }}
          ></img>
        </div>
      </a>
      <a href="#">
        <div
          style={{
            position: "absolute",
            marginLeft: 324,
            marginTop: 510,
            backgroundColor: "#FFF4D2",
            width: 220,
            height: 220,
            borderRadius: 30,
            color: "black",
          }}
        >
          {" "}
          <h2 style={{ fontSize: 24, marginLeft: 25 }}>카페/디저트</h2>
          <img
            src={df}
            alt="dessert"
            style={{ marginLeft: 55, marginTop: 20, borderRadius: 30 }}
          ></img>
        </div>
      </a>
      <a href="#">
        <div
          style={{
            position: "absolute",
            marginLeft: 569,
            marginTop: 510,
            backgroundColor: "#FDDBD9",
            width: 220,
            height: 220,
            borderRadius: 30,
            color: "black",
          }}
        >
          {" "}
          <h2 style={{ fontSize: 24, marginLeft: 25 }}>분식</h2>
          <img
            src={sf}
            alt="snack"
            style={{ marginLeft: 51, marginTop: -10, borderRadius: 30 }}
          ></img>
        </div>
      </a>
      <a href="#">
        <div
          style={{
            position: "absolute",
            marginLeft: 815,
            marginTop: 510,
            backgroundColor: "#FFEBD4",
            width: 220,
            height: 220,
            borderRadius: 30,
            color: "black",
          }}
        >
          {" "}
          <h2 style={{ fontSize: 24, marginLeft: 25 }}>아시안</h2>
          <img
            src={af}
            alt="asian"
            style={{ marginLeft: 51, marginTop: -6, borderRadius: 30 }}
          ></img>
        </div>
      </a>
      <a href="#">
        <div
          style={{
            position: "absolute",
            marginLeft: 1055,
            marginTop: 510,
            backgroundColor: "#FFEBD4",
            width: 220,
            height: 220,
            borderRadius: 30,
            color: "black",
          }}
        >
          {""}
          <h2 style={{ fontSize: 24, marginLeft: 25 }}>야식</h2>
        </div>
      </a>
      {/* 구분점*/}
      <hr
        style={{
          position: "absolute",
          marginTop: 771,
          marginLeft: "324px",
          width: 1200,
        }}
      ></hr>
      {/*최근 메뉴*/}
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
      <div
        className="lastest"
        style={{
          position: "absolute",
          marginTop: 900,
          marginLeft: 324,
          width: 890,
          overflowX: "scroll",
          display: "flex",
        }}
      >
        <div>
          <img src={ex_1} style={{ marginRight: 10 }}></img>
          <div>
            <h3
              style={{
                fontWeight: 500,
                fontSize: 24,
                marginTop: 10,
                marginBottom: 0,
              }}
            >
              00 포케
            </h3>
            <h4
              style={{
                fontWeight: 400,
                fontSize: 14,
                marginTop: 8,
                marginBottom: 0,
              }}
            >
              최소주문금액 | 12000원
            </h4>
            <button
              type="button"
              style={{
                fontWeight: 350,
                fontSize: 10,
                marginTop: 5,
                paddingTop: 5,
                paddingBottom: 5,
                border: "1px solid #FE8C00",
                borderRadius: 30,
                backgroundColor: "white",
              }}
            >
              배달팁 0원 ~ 1500원
            </button>
          </div>
        </div>

        <div>
          <img src={ex_2} style={{ marginRight: 10 }}></img>
          <div>
            <h3
              style={{
                fontWeight: 500,
                fontSize: 24,
                marginTop: 10,
                marginBottom: 0,
              }}
            >
              00 샐러드
            </h3>
            <h4
              style={{
                fontWeight: 400,
                fontSize: 14,
                marginTop: 8,
                marginBottom: 0,
              }}
            >
              최소주문금액 | 12000원
            </h4>
            <button
              type="button"
              style={{
                fontWeight: 350,
                fontSize: 10,
                marginTop: 5,
                paddingTop: 5,
                paddingBottom: 5,
                border: "1px solid #FE8C00",
                borderRadius: 30,
                backgroundColor: "white",
              }}
            >
              배달팁 0원 ~ 1500원
            </button>
          </div>
        </div>

        <div>
          <img src={ex_3} style={{ marginRight: 10 }}></img>
          <div>
            <h3
              style={{
                fontWeight: 500,
                fontSize: 24,
                marginTop: 10,
                marginBottom: 0,
              }}
            >
              00 라멘
            </h3>
            <h4
              style={{
                fontWeight: 400,
                fontSize: 14,
                marginTop: 8,
                marginBottom: 0,
              }}
            >
              최소주문금액 | 12000원
            </h4>
            <button
              type="button"
              style={{
                fontWeight: 350,
                fontSize: 10,
                marginTop: 5,
                paddingTop: 5,
                paddingBottom: 5,
                border: "1px solid #FE8C00",
                borderRadius: 30,
                backgroundColor: "white",
              }}
            >
              배달팁 0원 ~ 1500원
            </button>
          </div>
        </div>

        <div>
          <img src={ex_4} style={{ marginRight: 10 }}></img>
          <div>
            <h3
              style={{
                fontWeight: 500,
                fontSize: 24,
                marginTop: 10,
                marginBottom: 0,
              }}
            >
              00 햄버거
            </h3>
            <h4
              style={{
                fontWeight: 400,
                fontSize: 14,
                marginTop: 8,
                marginBottom: 0,
              }}
            >
              최소주문금액 | 12000원
            </h4>
            <button
              type="button"
              style={{
                fontWeight: 350,
                fontSize: 10,
                marginTop: 5,
                paddingTop: 5,
                paddingBottom: 5,
                border: "1px solid #FE8C00",
                borderRadius: 30,
                backgroundColor: "white",
              }}
            >
              배달팁 0원 ~ 1500원
            </button>
          </div>
        </div>

        <div>
          <img src={ex_5} style={{ marginRight: 10 }}></img>
          <div>
            <h3
              style={{
                fontWeight: 500,
                fontSize: 24,
                marginTop: 10,
                marginBottom: 0,
              }}
            >
              00 피자
            </h3>
            <h4
              style={{
                fontWeight: 400,
                fontSize: 14,
                marginTop: 8,
                marginBottom: 0,
              }}
            >
              최소주문금액 | 12000원
            </h4>
            <button
              type="button"
              style={{
                fontWeight: 350,
                fontSize: 10,
                marginTop: 5,
                paddingTop: 5,
                paddingBottom: 5,
                border: "1px solid #FE8C00",
                borderRadius: 30,
                backgroundColor: "white",
              }}
            >
              배달팁 0원 ~ 1500원
            </button>
          </div>
        </div>
      </div>

      <button
        onclick={moveScrollLeft()}
        style={{
          position: "absolute",
          marginTop: 900,
          marginLeft: 1230,
          width: 48,
          height: 176,
          backgroundColor: "#FE8C00",
          border: "none",
          borderRadius: 10,
        }}
      >
        button
      </button>

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

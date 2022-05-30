import React from "react";
import styled from "styled-components";
import kLogo from "/Users/juhee/Frontend/src/images/kLogo.png";

export default function KakaoLogin() {
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
          카카오로 로그인하기
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

const CLIENT_ID = "http://localhost:3000";
const REDIRECT_URI = "http://localhost:8080/join/info"; // 프론트로 할 수도 있고 백엔드로 할 수도 있음.

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

// var express = require("express");
// var router = express.Router();
// const KAKAO_OAUTH_TOKEN_API_URL = "https://kauth.kakao.com/oauth/token";
// const KAKAO_GRANT_TYPE = "authorization_code";
// const KAKAO_CLIENT_id = "http://localhost:3000";
// const KAKAO_REDIRECT_URL = "http://localhost:8080/join/info";

// router.get("/kakao/code", function (req, res, next) {
//   let code = req.query.code;
//   try {
//     axios
//       .post(
//         `${KAKAO_OAUTH_TOKEN_API_URL}?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}`,
//         {
//           headers: {
//             "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
//           },
//         },
//       )
//       .then((result) => {
//         console.log(result.data["access_token"]);
//         // 토큰을 활용한 로직을 적어주면된다.
//       })
//       .catch((e) => {
//         console.log(e);
//         res.send(e);
//       });
//   } catch (e) {
//     console.log(e);
//     res.send(e);
//   }
// });

// const { Kakao } = window;

// function SocialLogin() {
//   const history = useHistory();
//   const kakaoLoginClickHandler = () => {
//     Kakao.Auth.login({
//       success: function (authObj) {
//         fetch(`${KAKAO_LOGIN_API_URL}`, {
//           method: "POST",
//           body: JSON.stringify({
//             access_token: authObj.access_token,
//           }),
//         })
//           .then((res) => res.json())
//           .then((res) => {
//             localStorage.setItem("Kakao_token", res.access_token);
//             if (res.access_token) {
//               alert("Bopsim에 오신걸 환영합니다!");
//               history.push("/login");
//             }
//           });
//       },
//       fail: function (err) {
//         alert(JSON.stringify(err));
//       },
//     });
//   };

//   return (
//     <article className="socialLogin">
//       <Button
//         fill
//         className="btn kakao"
//         onclick={kakaoLoginClickHandler}
//       ></Button>
//     </article>
//   );
// }

// export default SocialLogin;

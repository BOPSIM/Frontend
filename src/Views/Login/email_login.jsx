import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function EmailLogin() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const password = useRef();
  password.current = watch("password");
  const onSubmit = (data) => {
    console.log("data", data);
    // 백엔드에 전달 axios.post('/', date)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label
        style={{
          fontSize: 12,
          display: "block",
          textAlign: "Left",
          marginLeft: 50,
        }}
      >
        이메일
      </label>
      <Input
        name="email"
        type="email"
        {...register("email", {
          required: true,
          pattern: /^\S+@\S+$/i,
        })}
        placeholder="이메일 주소를 입력해 주세요..."
      />
      {errors.email && (
        <p
          style={{
            color: "#f64f00",
            fontWeight: 600,
            fontSize: 12,
            display: "block",
            textAlign: "Left",
            marginLeft: 55,
            marginTop: -35,
          }}
        >
          필수 입력 사항입니다.
        </p>
      )}
      {/*register 해주면 console창에 입력한 내용 뜸. 유효성 체크를 위해 조건 넣고, 에러메세지 정함. errors는 위에서 formState: {errors} 해줘야 에러 안남.*/}

      <label
        style={{
          fontSize: 12,
          display: "block",
          textAlign: "Left",
          marginLeft: 50,
        }}
      >
        비밀번호
      </label>
      <Input
        name="password"
        type="password"
        {...register("password", { required: true })}
        placeholder="비밀번호를 입력해 주세요..."
      />
      {errors.password && errors.password.type === "required" && (
        <p
          style={{
            color: "#f64f00",
            fontWeight: 600,
            fontSize: 12,
            display: "block",
            textAlign: "Left",
            marginLeft: 55,
            marginTop: -35,
          }}
        >
          필수 입력 사항입니다.
        </p>
      )}

      <button
        type="submit"
        style={{
          fontSize: 16,
          fontWeight: 600,
          LineHeight: 60,
          display: "block",
          width: 446,
          height: 60,
          margin: "auto",
          marginTop: 10,
          marginBottom: 40,
          cursor: "pointer",
          textAlign: "center",
          color: "#fff",
          border: "none",
          borderRadius: 30,
          backgroundColor: "#f64f00",
        }}
      >
        이메일로 로그인하기
      </button>

      <A href="#">비밀번호 찾기</A>
      <span
        className="v-line"
        style={{ borderLeft: "solid 2px #FF8951", height: 10 }}
      ></span>
      <A href="signup">회원가입</A>
    </form>
  );
}

const Input = styled.input`
  display: block;
  overflow: hidden;
  width: 400px;
  height: 50px;
  margin: auto;
  margin-bottom: 40px;
  border: none;
  border-bottom: solid 2px #f64f00;
  box-sizing: border-box;
  font-size: 15px;
`;

const A = styled.a`
  color: #f64f00;
  font-weight: 600;
  margin-right: 30px;
  margin-left: 30px;
  display: inline;
  text-decoration: none;
`;

export default EmailLogin;

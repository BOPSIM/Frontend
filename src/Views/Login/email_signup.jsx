import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function EmailSignUp() {
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
        {...register("password", { required: true, minLength: 6 })}
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
      {errors.password && errors.password.type === "minlength" && (
        <p>Password must have at least 6 characters</p>
      )}
      <input
        type="submit"
        value="이메일로 회원가입 하기"
        style={{
          fontSize: 16,
          fontWeight: 600,
          LineHeight: 60,
          display: "block",
          width: 446,
          height: 60,
          margin: "auto",
          marginTop: 10,
          cursor: "pointer",
          textAlign: "center",
          color: "#fff",
          border: "none",
          borderRadius: 30,
          backgroundColor: "#f64f00",
        }}
      ></input>
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

export default EmailSignUp;

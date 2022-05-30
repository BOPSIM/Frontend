document.forms[0].addEventListener("submit", function (e) {
  // 폼 전송 이벤트 취소하기 : 기본 이벤트를 취소할 때는 이벤트 객체의 preventDefault() 사용.
  e.preventDefault();
  const idEl = document.forms[0].username;
  const idValue = idEl.value.trim(); // trim(): 문자열 좌우 공백 제거
  const pwEl = document.forms[0].password;
  const pwValue = pwEl.value.trim();

  // 아이디 입력됐나 확인하고 안됐으면 경고창 표시 + 포커스 이동 : 아이디/비밀번호의 값은 노드를 선택해서 value 속성으로 가져올 수 있음.
  if (idValue === "") {
    alert("아이디를 입력해 주세요.");
    idEl.focus(); // 아이디창에 포커스
    return;
  }

  // 아이디 값에 @ 가 없으면 경고창 표시 + 포커스 이동 : -1은 없다는 의미. -1보다 크면 있다는 의미.
  if (idValue.indexOf("@") === -1) {
    alert("아이디는 이메일 형식으로 입력해 주세요.");
    idEl.focus();
    return;
  }

  // 비밀번호 입력됐나 확인하고 안됐으면 경고창 표시 + 포커스 이동
  if (pwValue === "") {
    alert("비밀번호를 입력해 주세요.");
    pwEl.focus();
    return;
  }

  // 비밀번호에 영어,숫자,특수문자 있는지 확인하기
  // var pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9])$/
  // if (!pwCheck.test(pwValue.value)) {
  //   alert('비밀번호는 영어,숫자,특수문자 조합으로 해주세요.')
  //   pwEl.focus()
  //   return false
  // }

  // 비밀번호 자릿수가 5~12사이가 아니면 경고창 표시 + 포커스 이동
  if (pwValue.trim().length < 5 || pwValue.trim().length > 12) {
    alert("비밀번호는 5~12자 이내로 입력해 주세요.");
    pwEl.focus();
    return false;
  }

  // 모든 검증이 끝나면 폼 전송하기
  this.submit();
});

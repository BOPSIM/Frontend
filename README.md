# Frontend

### import React from "react"

- jsx 문법을 사용하기 위해서 react 모듈을 import 해야 함
- 모든 리액트 컴포넌트에 필수적인 코드

### import App from "./App"

- App 이라는 react 컴포넌트를 가져오는 코드

### react-dom

```javascript
ReactDOM.render(element, container[, callback])
```

### yarn

- 우리 프로젝트는 yarn 을 사용하도록 합니다
- 같은 프로젝트 내에서는 npm 과 yarn 을 혼용하지 않도록 합니다!
- package.json 의 scripts 의 명령어를 참고합니다
- 예) yarn start 를 사용하여 프로젝트를 실행합니다

### yarn vs npm

- yarn 은 페이스북에서 만든 자바스크립트 패키지 매니저
- npm 과 같은 기능을 수행하나, npm 의 단점을 보완한 매니저 툴
- npm 의 단점: 속도, 안정성, 보안성

- 속도
  yarn 은 다운 받은 패키지 데이터를 캐시에 저장하며, 중복된 데이터는 다운로드하지 않고, 캐시에 저장된 파일을 활용함으로써
  이론적으로 npm 에 비해 패키지 속도가 매우 빠릅니다.
  또한 여러개의 패키지를 설치할 때 병렬로 처리하기 때문에 performance와 speed가 증가 됩니다. (npm은 순차적)

- 안정성/보안성
  npm 은 패키지가 설치될 때 자동으로 코드와 의존성을 실행할 수 있도록 허용했습니다.
  이 특징은 편리한 기능이지만 안정성을 위협할 수 있습니다.
  특히나 보장된 정책 없이 등록한 패키지가 존재할 수 있다는 점에서 더욱 위험도가 높습니다.
  반면 yarn은 yarn.lock이나 package.json으로 부터 설치만 하며, yarn.lock은 모든 디바이스에 같은 패키지를 설치하는 것을 보장하기 때문에 버전의 차이로 인해 생기는 버그를 방지해줄 수 있습니다.

### package.json

- 패키지 관리를 위해 npm을 사용하든 yarn을 사용하든 해당 프로젝트의 메타 정보는 package.json 파일을 통해 관리가 됩니다.
- 이 package.json 파일에는 해당 프로젝트가 의존하고 있는 모든 패키지 이름과 버전이 나열되어 있습니다.
- 일반적으로 설치되어야 하는지 패키지들은 dependencies 항목에, 그리고 개발할 때만 필요한 패키지들은 devDependencies 항목에 명시됩니다.
- package.json 파일에 등록되어 있는 모든 패키지가 npm registry로 부터 다운받아져 node_modules 디렉터리에 저장됩니다.
- package.json 파일만 있으면 해당 프로젝트가 의존하고 있는 모든 패키지를 설치할 수 있기 때문에, node_modules 디렉터리는 Git 저장소에 올라가지 않도록 보통 .gitignore 파일에 추가합니다.

## node JS

자바스크립트 실행 프로그램
javascript는 브라우저에서만 동작했지만,
Nodejs덕분에 브라우저 밖에서도 javascript를 사용

---

## npm

npm : Node Package Manager
javascript 프로젝트에서 필요한 패키지(라이브러리, 도구)를
설치하고 관리하는 데 사용하는 명령어

npx : 일회성 실행 - 설치하지 않고 패키지를 바로 실행할 때 사용

---

## 기본세팅

npx create-react-app@latest ./
(폴더이름은 영문자소문자 + 숫자로만 구성)
(상위폴더도 마찬가지)
(react라는 폴더명 금지)
(영문자소문자로 시작)

---

## 버전변경
npm i react@18 
npm i react-dom@18

npm i react@18 react-dom@18

---

## tailwindCSS

1. https://v3.tailwindcss.com/
버전 3사용!!!!!
2. DOCS로 이동
3. npm i -D tailwindcss@3
4. npx tailwindcss init
5. tailwind.config.js에 './src/**/*.{js,jsx,ts,tsx}',
6. index.css에 
@tailwind base;
@tailwind components;
@tailwind utilities;

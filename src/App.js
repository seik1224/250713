import './App.css';
import Step01 from './step/step01';

function App() {
  return (
    <div>
      {/* 
        컴포넌트 : 재사용가능한 코드조각(버튼, 텍스트, 이미지 등등...)
      */}
      <Comp></Comp>
      <Comp></Comp>
      <Step01></Step01>
    </div>
    
  );
}

// 같은 파일에서 컴포넌트 생성
// 긴 HTML을 한 단어로 깔끔하게 치환할 수 있는 문법,
// 작명시 영어대문자로 시작!!!!!!!!!
// 함수표현식, 함수선언식 둘 다 가능

function Comp() {
  return <div>컴포넌트</div>
}

export default App;

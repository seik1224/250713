import React from 'react'
import styleName from './step.module.css'; 
// 모듈 사용 : 이름 작명

const Step02 = () => {
    console.log(styleName);

  return (
    <>
        {/* 1. 인라인방식 : camelCase사용 */}
        <div style={{ color : 'red', backgroundColor : 'blue'}}>인라인방식</div>
        {/* 2. className 사용 */}
        <div className='red'>App.css에 작성한 스타일</div>
        {/* 3. 모듈CSS 사용 */}
        <div className={styleName.blue}>모듈 사용</div>
        {/* 4. TailwindCSS사용 */}
        <div className='bg-red-500 text-white p-4 rounded-md'>TailwindCSS</div>
    </>
  )
}

export default Step02
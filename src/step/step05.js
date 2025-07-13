import React, { useState } from 'react'

const Step05 = () => {
    /*
        [ useState ]
        상태값을 저장하는 변수
        
        - 변수대신 쓰는 이유 : 상태값이 변경되면 그 상태값을
        사용하는 html부분만 재렌더링

        - 자바스크립트 ? : 변수를 재할당하면 html 전체 재렌더링

        const [값, 함수] = useState(초기값)
        함수? 상태값을 변경하는 함수
    */
    // let [a,b] = [10,20]
    const [ count, setCount ] = useState(0);

    const [ like, setLike ] =useState([0,0]);

    console.log(like)
    // const like = [0,0]  ->  [1,0]  

  return (
    <>
        <div>
            <p>현재 카운트 : {count}</p>
            <button onClick={()=> setCount(count+1)}>카운트증가</button>    
        </div>    
        {/* 배열에서 state값 변경 */}
        <div className='border border-red-500'>
            <p>게시물1</p>
            <p>현재 좋아요 : {like[0]}</p>
            <button onClick={()=> {
                const copy = [...like];
                copy[0] = copy[0] + 1;
                setLike(copy);
            }}>좋아요증가</button>
        </div>
        <div className='border border-red-500'>
            <p>게시물2</p>
            <p>현재 좋아요 : {like[1]}</p>
            <button>좋아요증가</button>
        </div>
    </>
  )
}

export default Step05
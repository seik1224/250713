import React, { useState } from 'react'

// 클릭이벤트, 마우스오버 마우스아웃
const Event01 = () => {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState('마우스올려보세요');

    const handelClick = () => {
        setCount(count+1);
    }
    const handleMouseOver = () => setMsg('마우스HOVER')
    const handlEMoustOut = () => setMsg('마우스OUT')
    return (
        <>
            <p>클릭횟수 : {count}</p>
            <button onClick={handelClick}>클릭</button>

            {/* 버블링발생 */}
            <p onMouseOver={handleMouseOver} onMouseOut={handlEMoustOut}>{msg}</p>
            {/* 버블링발생안함 */}
            <p onMouseEnter={handleMouseOver} onMouseLeave={handlEMoustOut}>{msg}</p>
        </>
    )
}

export default Event01
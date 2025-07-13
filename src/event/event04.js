import React, { useState } from 'react'

// 체인지 이벤트
const Event04 = () => {
    const [ key, setKey ] = useState('');

    const handleChange = (e) => {
        console.log(e.target.value);
        setKey(e.target.value)
    }
    const resetInput = () => setKey('');
    return (
        <>
            <input type='text' onChange={handleChange} placeholder='키 눌러보세요' />
            <p>{key}</p>
            <button onClick={resetInput}>RESET</button>
        </>
    )
}

export default Event04
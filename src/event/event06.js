import React, { useState } from 'react'

// 폼 제출
const Event06 = () => {
    const [val, setVal] = useState('');
    const [msg, setMsg] = useState('');

    const handleSumbit = (e) => {
        e.preventDefault();
        setMsg(`제출된값 : ${val}`)
    }
    return (
        <form onSubmit={handleSumbit}>
            <input onChange={(e) => setVal(e.target.value)} type='text' value={val} placeholder='값입력' />
            <button type='submit'>제출</button>
            <p>{msg}</p>
        </form>
    )
}

export default Event06
import React from 'react'

const Step06 = () => {
    const isLoggedIn = true;
    // if문 사용가능
    return (
        <>
            {/* if문 사용불가 : 삼항연산자 사용 */}
            {isLoggedIn ? <h1>로그인됨</h1> : <h1>로그인하세요.</h1>}
            {/* &&연산자 사용 */}
            {isLoggedIn && <h1>로그인됨</h1>}
        </>
    )
}

export default Step06
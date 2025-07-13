import React from 'react'
import img from './logo192.png';

const Step08 = () => {
  return (
    <>
        {/* 1. public폴더에 있는 이미지 불러오기 */}
        <img src='/logo192.png' alt="이미지" />

        {/* 2. public에서 불러올때 꼭 이렇게 불러오기! */}
        <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="이미지" />
    
        {/* 3. CSS이미지 파일불러오기 */}
        <div className='bg-main'></div>

        <div className='w-40 h-40 bg-cover' style={{
            backgroundImage : `url(${process.env.PUBLIC_URL}/logo192.png)`
        }}></div>

        <img src={img} alt='이미지' />
    </>
  )
}

export default Step08
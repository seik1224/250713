import React, { useState } from 'react'

// 마우스무브
const Event02 = () => {
    const [mouseP, setMouseP] = useState({x:0, y:0});
    const handleMouseMove = (e) => setMouseP({x:e.clientX, y:e.clientY})
    return (
        <>
            <div onMouseMove={handleMouseMove} className='h-[200px] bg-yellow-300 flex items-center justify-center'>
                <p>x: {mouseP.x}, y: {mouseP.y}</p>
            </div> 
        </>
    )
}

export default Event02
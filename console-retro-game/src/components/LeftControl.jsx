import React from 'react';

function LeftControl ({ handleDirection }) {
  return (
    <>
      <div className="w-[200px] h-[500px] rounded-l-4xl rounded-r-xl bg-purple-500 pt-10 pb-10">
        {/* <button className="w-[100px] h-[100px] rounded-full bg-black m-auto"></button> */}
        <button onClick={() => handleDirection('left')} className="w-[50px] h-[50px] rounded-full bg-black">L</button>
        <button onClick={() => handleDirection('right')} className="w-[50px] h-[50px] rounded-full bg-black">R</button>
      </div>
    </>
  )
};

export default LeftControl
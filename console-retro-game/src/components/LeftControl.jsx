import React from 'react';

function LeftControl ({ handleDirection }) {
  return (
    <>
      <div className="w-[183px] h-[420px] rounded-l-4xl rounded-r-xl bg-purple-500 pt-10 pb-10 text-white">
        {/* <button className="w-[100px] h-[100px] rounded-full bg-black m-auto"></button> */}
        <button onClick={() => handleDirection('up')} className="w-[60px] h-[60px] rounded-full bg-black">▲</button>
        <div>
          <button onClick={() => handleDirection('left')} className="w-[60px] h-[60px] rounded-full bg-black mr-4">◀</button>
          <button onClick={() => handleDirection('right')} className="w-[60px] h-[60px] rounded-full bg-black ml-4">▶</button>
        </div>
        <button onClick={() => handleDirection('down')} className="w-[60px] h-[60px] rounded-full bg-black">▼</button>
      </div>
    </>
  )
};

export default LeftControl
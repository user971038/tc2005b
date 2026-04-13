import React from 'react';

const RightControl = ({ handleSelection, goBack, handleHP }) => {
  return (
    <>
      <div className="w-[183px] h-[420px] rounded-l-xl rounded-r-4xl bg-orange-500 pt-10 pb-10">
        <button className="rounded-full bg-black w-[60px] h-[60px] text-blue-500">X</button>
        <div>
          <button onClick={handleHP} className="rounded-full bg-black w-[60px] h-[60px] text-green-500 mr-4">Y</button>
          <button onClick={handleSelection} className="rounded-full bg-black w-[60px] h-[60px] text-red-500 ml-4">A</button>
        </div>
        <button onClick={goBack} className="rounded-full bg-black w-[60px] h-[60px] text-yellow-500">B</button>
        {/* <button className="w-[100px] h-[100px] rounded-full bg-black m-auto"></button> */}
      </div>
    </>
  )
};

export default RightControl
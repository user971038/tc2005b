import React from 'react';

const RightControl = ({handleSelection}) => {
  return (
    <>
      <div className="w-[200px] h-[500px] rounded-l-xl bg-orange-500 pt-10 pb-10">
        <button onClick={handleSelection} className="rounded-full bg-black">A</button>
        {/* <button className="w-[100px] h-[100px] rounded-full bg-black m-auto"></button> */}
      </div>
    </>
  )
};

export default RightControl
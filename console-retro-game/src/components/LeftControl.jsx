import React from "react";

function LeftControl ({ handleDirection }) {
  return (
    <>
      <div className="w-[200px] h-[500px] rounded-r-xl bg-purple-500 pt-10 pb-10">
        // Joystick
        <button className="w-[100px] h-[100px] rounded-full bg-black m-auto"></button>
        <button></button>
      </div>
    </>
  )
};

export default LeftControl
const RightControl = ({}) => {
  return (
    <>
      <div className="w-[200px] h-[500px] rounded-l-xl bg-orange-500 pt-10 pb-10">
        // Botón A
        <button className="absolute" onClick={handleSelection}>A</button>
      </div>
    </>
  )
};

export default RightControl
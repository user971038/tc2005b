const GameScreen = ({ myPoke, pcPoke }) => {
  
  return (
    <>
      <div className="w-[600px] h-[500px] overflow-y-auto border-15 rounded-xl border-solid">
        <div className="flex flex-wrap items-center justify-center">
            <p>{myPoke.name}</p>
            <img src={myPoke.sprites.front_default} alt={myPoke.name} className="w-25 h-25" />
            <p>{pcPoke.name}</p>
            <img src={pcPoke.sprites.front_default} alt={pcPoke.name} className="w-25 h-25" />
        </div>
      </div>
    </>
  );
};

export default GameScreen;
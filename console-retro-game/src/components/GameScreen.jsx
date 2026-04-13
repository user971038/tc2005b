const GameScreen = ({ myPoke, pcPoke, myHP, pcHP }) => {
  return (
    <>
      <div className="w-[600px] h-[420px] overflow-x-auto border-15 rounded-xl border-solid bg-green-200 py-15">
        <div className="flex justify-between flex-wrap items-center px-15">
            <img src={myPoke.sprites.back_default} alt={myPoke.name} className="w-55 h-55" />
            <img src={pcPoke.sprites.front_default} alt={pcPoke.name} className="w-40 h-40" />
        </div>
        <div className="flex justify-between flex-wrap items-center px-15">
            <p class="uppercase">{myPoke.name}</p>
            <p class="uppercase">{pcPoke.name}</p>
        </div>
        <div className="flex justify-between flex-wrap items-center px-15">
            <p>HP: {myHP}/100</p>
            <p>HP: {pcHP}/100</p>
        </div>
      </div>
    </>
  );
};

export default GameScreen;
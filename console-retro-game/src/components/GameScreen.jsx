import './Background.css';

const GameScreen = ({ myPoke, pcPoke, myHP, pcHP, myDamage, pcDamage }) => {
  return (
    <>
      <div id="GameScreen" className="w-[600px] h-[420px] overflow-x-auto border-15 rounded-xl border-solid p-5">
        {/* Nombres y HP */}
        <div className="uppercase text-md font-bold p-5 bg-white rounded-xl">
          <div className="flex justify-between flex-wrap items-center">
              <p>{myPoke.name}</p>
              <p>{pcPoke.name}</p>
          </div>
          <div className="flex justify-between flex-wrap items-center">
              <p>HP: {myHP}/100</p>
              <p>HP: {pcHP}/100</p>
          </div>
        </div>
        {/* Sprites */}
        <div className="flex justify-between flex-wrap items-center h-[180px]">
            <img src={myPoke.sprites.back_default} alt={myPoke.name} className="w-55 h-55" />
            <img src={pcPoke.sprites.front_default} alt={pcPoke.name} className="w-40 h-40" />
        </div>
        {/* Movimientos */}
        <div className="uppercase text-md font-bold p-5 bg-white rounded-xl my-5">
          <div className="flex justify-between flex-wrap items-center">
              { myHP === 100 && myHP === pcHP ? (
                <p>Battle Start! Press Y to fight!</p>
              ) : myHP === 0 || pcHP === 0 || (myHP === 0 && pcHP === 0) ? (
                <p>Battle's Over!</p>
              ) : (
                <>
                <p><span className="uppercase">{myPoke.name} did {myDamage} damage!</span></p>
                <p><span className="uppercase">{pcPoke.name} did {pcDamage} damage!</span></p>
                </>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameScreen;
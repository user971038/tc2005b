const GameScreen = ({ player, cpu }) => {
  
  return (
    <>
      <div className="w-[600px] h-[500px] overflow-y-auto border-15 rounded-xl border-solid">
        <div className="flex flex-wrap items-center justify-center">
          {pokemones?.map((pokemon, index) => (
            <div key={index}
              style={{color: position === pokemon.id ? "red" : "white"}}
              className="flex flex-col border-2" >
              <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon.name}
                className="w-25 h-25"
              />
              <p>{pokemon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GameScreen;
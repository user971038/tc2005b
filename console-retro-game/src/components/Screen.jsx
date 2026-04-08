const Screen = ({ pokemones }) => {
  return (
    <>
      <div className="w-[650px] h-[500px] overflow-y-auto border-15 border-solid rounded-lg">
        <div className="flex flex-wrap justify-center">
          {pokemones?.map((pokemon, index) => (
            <div key={index} className="flex flex-col border-2" >
              <p>{pokemon.name}</p>
              <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon.name}
                className="w-25 h-25"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Screen;
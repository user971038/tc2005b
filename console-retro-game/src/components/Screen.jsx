const Screen = ({ pokemones }) => {
  return (
    <>
      <div className="w-[450px] h-[200px] border-4 border-solid">
        <div>
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
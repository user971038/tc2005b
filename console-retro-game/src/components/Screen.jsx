const Screen = ({ pokemones, position }) => {
  
  return (
    <>
      <div className="w-[600px] h-[420px] overflow-y-auto border-15 rounded-xl border-solid pt-5 pb-5">
        <div className="flex flex-wrap items-center justify-center">
          {pokemones?.map((pokemon, index) => (
            <div key={index}
              style={{color: position === pokemon.id ? "purple" : "white"}}
              className="flex flex-col border-2" >
              <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon.name}
                className="w-25 h-25"
              />
              <p class="uppercase">{pokemon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Screen;
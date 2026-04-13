import './Background.css';

const Screen = ({ pokemones, position }) => {
  
  return (
    <>
      <div id="Screen" className="w-[600px] h-[420px] overflow-y-auto border-15 rounded-xl border-solid pt-5 pb-5">
        <div className="flex flex-wrap items-center justify-center">
          {pokemones?.map((pokemon, index) => (
            <div key={index}
              style={{background: position === pokemon.id ? "rgba(255, 255, 255, 0.5)" : "rgba(0,0,0,0)"}}
              className="flex flex-col">
              <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon.name}
                className="w-25 h-25"
              />
              <p class="uppercase black">{pokemon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Screen;
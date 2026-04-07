const Screen = ({pokemones}) => {
  return (
    <>
      <div className="w-[650px] h-[500px] border-20 border-solid rounded-xl">
        {pokemones?.map((pokemon) => (
          <>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites?.front_default} className="w-40 h-40"/>
          </>
        ))}
      </div>
    </>
  )
};

export default Screen
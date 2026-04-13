const Details = ({ myPoke }) => {
  
  return (
    <>
      <div className="overflow-y-auto bg-blue-100 color-white p-5 rounded-xl">
        <div className="flex flex-col items-center justify-center">
            <p>Pokémon No. <span>{myPoke.id}</span>: <span class="uppercase">{myPoke.name}</span></p>
            <p className="flex items-center justify-center gap-5">
            <img src={myPoke.sprites.front_default} alt={myPoke.name} className="w-25 h-25" />
            <img src={myPoke.sprites.back_default} alt={myPoke.name} className="w-25 h-25" />
            </p>
            <p>Moves: {myPoke.move}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
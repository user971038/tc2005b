import { useEffect, useState } from 'react';
import './App.css';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import Screen from './components/Screen';
import GameScreen from './components/GameScreen';
import useFetch from './hooks/useFetch';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0';
  const { data, loading, error } = useFetch(url);

  const [pokemones, setPokemones] = useState([]);

  const getListPokemones = () => {
    const list = data?.results?.filter((p) => p.url);
    const plist = list?.map((l) => fetch(l.url).then((res) => res.json()));
    Promise.all(plist).then((values) => {
      const saniData = values?.map((e) => {
        return {
          name: e.name,
          moves: e.moves.map((e) => {
            return {
              ...e,
              attack: getRandomInt(1, 400),
            };
          }),
          sprites: e.sprites,
        };
      });

      console.log({ saniData });
      setPokemones(values);
    });
  };

  useEffect(() => {
    getListPokemones();
  }, [data]);

  // Manejar dirección
  const [position, setPosition] = useState(1);

  const [myPokeSelection, setMyPokeSelection] = useState([]);
  const [pcPokeSelection, setPcPokeSelection] = useState([]);

  const handleDirection = (direction) => {
    if(direction === 'right'){
      setPosition((prev) => (prev < 1025 ? prev + 1 : prev));
    } else if(direction === 'left'){
      setPosition((prev) => (prev > 1 ? prev - 1 : prev));
    } else if(direction === 'up'){
      setPosition((prev) => (prev > 5 ? prev - 5 : prev));
    } else if(direction === 'down'){
      setPosition((prev) => (prev < 1020 ? prev + 5 : prev));
    };

    console.log({direction});
  };

  const computerSelection = () => {
    const rnd = getRandomInt(1, 1025);
    const pc = pokemones.filter((p) => p.id === rnd);
    console.log(pc);
    setPcPokeSelection(pc);
  };

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  const handleSelection = () => {
    const selectPokemon = pokemones.filter((p) => p.id === position);
    console.log({selectPokemon});
    setMyPokeSelection(selectPokemon);
    computerSelection();
  };

  const goBack = () => {
    setMyPokeSelection([]);
    setPcPokeSelection([]);
  };

  return (
    <div className="text-center mt-10 items-center">
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <p className="text-xl">Current Position: {position}</p>
      <p className="text-xl">My Pokémon: {myPokeSelection[0]?.name}</p>
      <p className="text-xl">PC Pokémon: {pcPokeSelection[0]?.name}</p>
      <div className="flex mt-10">
        <LeftControl handleDirection={handleDirection} />
        { myPokeSelection.length > 0 && pcPokeSelection.length > 0 ? (
          <GameScreen myPoke={myPokeSelection[0]} pcPoke={pcPokeSelection[0]} />
        ):(
          <Screen pokemones={pokemones} position={position} />
        )}
        <RightControl handleSelection={handleSelection} goBack={goBack} />
      </div>
    </div>
  );
}

export default App;
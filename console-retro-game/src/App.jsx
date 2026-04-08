import { useEffect, useState } from 'react';
import './App.css';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import Screen from './components/Screen';
import useFetch from './hooks/useFetch';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  const { data, loading, error } = useFetch(url);

  const [pokemones, setPokemones] = useState([]);
  const getListPokemones = () => {
    const list = data?.results?.filter((p) => p.url);
    const plist = list?.map((l) => fetch(l.url).then((res) => res.json()));
    Promise.all(plist).then((values) => {
      console.log('promesa values', values);
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
      setPosition((prev) => prev + 1);
    } else {
      setPosition((prev) => prev - 1);
    }
    console.log({direction});
  };

  const computerSelection = () => {
    const rnd = getRandomInt(1, 100)
    const pc = pokemones.filter((p) => p.id === rnd);
    console.log(pc);
  };

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  const handleSelection = () => {
    const selectPokemon = pokemones.filter((p) => p.id === position);
    console.log({selectPokemon});
    computerSelection();
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <div className="flex mt-10">
        <LeftControl />
        <Screen pokemones={pokemones} />
        <RightControl />
      </div>
    </div>
  );
}

export default App;
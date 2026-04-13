import { useEffect, useState } from 'react';
import './App.css';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import Screen from './components/Screen';
import GameScreen from './components/GameScreen';
import Details from './components/Details';
import useFetch from './hooks/useFetch';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=251&offset=0';
  const { data, loading, error } = useFetch(url);

  const [pokemones, setPokemones] = useState([]);

  const [inBattle, setInBattle] = useState(false);

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
              attack: getRandomInt(1, 30),
            };
          }),
          sprites: e.sprites,
        };
      });

      console.log({ saniData });
      setPokemones(saniData);
    });
  };

  useEffect(() => {
    getListPokemones();
  }, [data]);

  // Manejar dirección
  const [position, setPosition] = useState(1);

  const [myPokeSelection, setMyPokeSelection] = useState([]);
  const [pcPokeSelection, setPcPokeSelection] = useState([]);

  const [winner, setWinner] = useState('');

  const handleDirection = (direction) => {
    if(inBattle) return;
    if(direction === 'right'){
      setPosition((prev) => (prev < 251 ? prev + 1 : prev));
    } else if(direction === 'left'){
      setPosition((prev) => (prev > 1 ? prev - 1 : prev));
    } else if(direction === 'up'){
      setPosition((prev) => (prev > 5 ? prev - 5 : prev));
    } else if(direction === 'down'){
      setPosition((prev) => (prev < 251 ? prev + 5 : prev));
    };

    console.log({direction});
  };

  const computerSelection = () => {
    const rnd = getRandomInt(1, 251);
    const pc = pokemones.filter((p) => p.id === rnd);
    console.log(pc);
    setPcPokeSelection(pc);
  };

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  const [myHP, setMyHP] = useState(100);
  const [pcHP, setPcHP] = useState(100);

  const handleSelection = () => {
    if(inBattle) return;
    const selectPokemon = pokemones.filter((p) => p.id === position);
    console.log({selectPokemon});
    setMyPokeSelection(selectPokemon);
    computerSelection();
    setMyHP(100);
    setPcHP(100);
    setWinner('');
    setInBattle(true);
  };

  const goBack = () => {
    setMyPokeSelection([]);
    setPcPokeSelection([]);
    setInBattle(false);
  };

  const [lastDamage, setLastDamage] = useState({ player: 0, pc: 0 });

  const handleHP = () => {

    if(myHP === 0 || pcHP === 0) return;

    const newMyDamage = getRandomInt(1, 30);
    const newPcDamage = getRandomInt(1, 30);

    setLastDamage({ player: newMyDamage, pc: newPcDamage });

    const nextMyHP = Math.max(0, myHP - newPcDamage);
    const nextPcHP = Math.max(0, pcHP - newMyDamage);

    setMyHP(nextMyHP);
    setPcHP(nextPcHP);

    if(winner===''){
      if(nextPcHP===0 && nextMyHP > 0){
        setWinner('You win!');
      } else if(nextMyHP===0 && nextPcHP > 0){
        setWinner('You lose!');
      } else if(nextMyHP===0 && nextPcHP === 0){
        setWinner('It\'s a tie!');
      }
    };
  };

  return (
    <div className="text-center mt-10 items-center">
      <h1 className="text-3xl font-bold underline uppercase">Pokémon Battle!</h1>
      <p className="text-xl">My Pokémon: No. {position} <span class="uppercase">{pokemones?.find((p) => p.id === position)?.name}</span></p>
      {/*<p className="text-xl">My Pokémon: {myPokeSelection[0]?.name}</p>
      <p className="text-xl">PC Pokémon: {pcPokeSelection[0]?.name}</p>*/}

      {winner && (
        <p className="text-xl">Winner: {winner}</p>
      )}

      <div className="flex mt-10 items-center justify-center">
        <LeftControl handleDirection={handleDirection} />
        { myPokeSelection.length > 0 && pcPokeSelection.length > 0 ? (
          <GameScreen myPoke={myPokeSelection[0]} pcPoke={pcPokeSelection[0]} myHP={myHP} pcHP={pcHP} myDamage={lastDamage.player} pcDamage={lastDamage.pc} />
        ):(
          <Screen pokemones={pokemones} position={position} />
        )}
        <RightControl handleSelection={handleSelection} goBack={goBack} handleHP={handleHP} />
      </div>

      <div className="flex mt-10 items-center justify-center">
        { myPokeSelection.length > 0 && pcPokeSelection.length > 0 ? (
          <Details myPoke={myPokeSelection[0]} />
        ):(
          <p className="text-xl">Select a Pokémon to see details</p>
        )}
      </div>

    </div>
  );
}

export default App;
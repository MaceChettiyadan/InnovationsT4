import './App.css';
import { useState, useEffect} from 'react';

function App() {
  const [ready, setReady] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [money, setMoney] = useState(0);
  const [storedWheat, setStoredWheat] = useState(0);
  const [wheatStoreBonus, setWheatStoreBonus] = useState(0);
  console.log(money)

  useEffect(() => {
    for (let x = 0; x < storedWheat; x++) {
      setWheatStoreBonus(wheatStoreBonus + (storedWheat * 0.1));
    }
    setMoney(money + wheatStoreBonus);
  }, [currentRound]);

  return (
    <div class="flex h-screen">
      <div class="m-auto">
        {ready === false ? (
        <>
        <h1 class="text-2xl text-center font-bold">Innovations Mace Henry Choyu T4</h1>
        <p class="text-center m-10 text-l">You will play <b>3</b> games of a game of risk. In this game, you will play multiple rounds as a farmer. In each round, you can <b>save</b> your farmed crops in a silo, where the crops increase in value each turn. Or, you can <b>sell</b> your wheat the day you farm it and earn assured money. There is a <b>random chance your silo breaks</b> and you lose all your crops and saved money. For this reason, you must balance risk with profit.</p>
        <div class="flex items-center justify-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setReady(true)}>
            I'm Ready
          </button>
        </div>
        </>
        ) : (
          <>
          <b class="text-center text-xl">Round {currentRound}</b>
          <p class="text-center text-l">${money} <span class="text-green">(incl. +{wheatStoreBonus} Wheat Stored Bonus)</span>, {storedWheat} stored crops</p>
          <p>You have earned 5 wheat. What do you do with it?</p>
          <div class="flex items-center justify-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"onClick={() => {
            setMoney(money + 10);
            setCurrentRound(currentRound + 1)}
          }>
            Sell
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={() => {
            setStoredWheat(storedWheat + 5);
            setCurrentRound(currentRound + 1)}
          }>
            Store
          </button>
        </div>
        </>
        )}
      </div>  
    </div>
  )
}

export default App;
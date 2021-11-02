import './App.css';
import { useState } from 'react';

function App() {
  const [ready, setReady] = useState(false);

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
        ) : (<p>No</p>)}
      </div>  
    </div>
  )
}

export default App;
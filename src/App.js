import { useEffect, useState } from 'react';
import './App.css';
//this is so crap and inefficient but i couldnt be bothered to make it better
function App() {
  const [money, setMoney] = useState(0);
  const [wheat, setWheat] = useState(0);
  const [day, setDay] = useState(1);

  const increaseConst = 10;

  useEffect(() => {
    document.getElementById('sell').style.display = 'none';
    document.getElementById('store').style.display = 'none';
  }, []);

  function farm() {
    setWheat(wheat + increaseConst);
    document.getElementById('sell').style.display = 'block';
    document.getElementById('store').style.display = 'block';
    document.getElementById('farm').style.display = 'none';
  }

  function sell() {
    setMoney(money + 10);
    setWheat(wheat - increaseConst);
    setDay(day + 1);
    document.getElementById('sell').style.display = 'none';
    document.getElementById('farm').style.display = 'block';
  }

  function sellSiloWheat() {
    setWheat(0);
    setMoney(wheat**2);
    console.log("game over");
  }

  function store() {
    setWheat(wheat + 10);
    setDay(day + 1);
    document.getElementById('store').style.display = 'none';
    document.getElementById('sell').style.display = 'none';
    document.getElementById('farm').style.display = 'block';
  }

  return (
    <div>
      <b>Day {day}</b>
      <p>Money: ${money}</p>
      <p>Wheat: {wheat} tonnes</p>
      <button id="farm" class="m-1 px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:ring-gray-300" onClick={farm}>Farm</button>
      <button id="sell" class="m-1 px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:ring-gray-300" onClick={sell}>Sell Farmed Wheat</button>
      <button id="store" class="m-1 px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:ring-gray-300" onClick={store}>Store wheat in Silo</button>
      <button class="m-1 px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:ring-gray-300" onClick={sellSiloWheat}>Sell Silo Wheat</button>
    </div>
  );
}

export default App;

//macw
import "./assets/app.css";
import { useState, useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";
import app from "./assets/main";

function randomString(n) {
  var result = "";
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < n; i++)
    result += chars.charAt(Math.floor(Math.random() * 62));
  return result;
}

const rounds = [10, 16, 21];

function App() {
  const [ready, setReady] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [money, setMoney] = useState(0);
  const [wheatStoreBonus, setWheatStoreBonus] = useState(0);
  const [end, setEnd] = useState(false);
  const [alerting, setAlerting] = useState(false);

  useEffect(() => {
    if (rounds.includes(currentRound)) {
      setAlerting(true);
      rounds.splice(rounds.indexOf(currentRound), 1);
      setCurrentRound(0);
      setMoney(0);
      setWheatStoreBonus(0);
      if (rounds.length === 0) {
        setEnd(true);
        const db = getDatabase();
        set(ref(db, "users/" + randomString(35)), {
          money: 0,
          wheatStoreBonus: 0,
          firstStore: 0,
          numberOfStores: 0,
        });
      }
    }
  }, [currentRound]);

  return (
    <div>
      {alerting ? (
        <div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div className="flex flex-col ml-3">
                <div className="font-medium leading-none">Silo Destroyed, Game Over!</div>
                <p className="text-sm text-gray-600 leading-none mt-1">
                  Your silo was destroyed, and you lost all wheat stored in it. You are now starting a new game ({3 - rounds.length}/3 rounds).
                </p>
              </div>
            </div>
            <button
              className="flex-no-shrink bg-blue-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-blue-500 text-white rounded-full"
              onClick={() => {
                setAlerting(false);
              }}
            >
              Ok
            </button>
          </div>
        </div>
      ) : null}
      <div className="flex h-screen">
        <div className="m-auto">
          {end === false ? (
            <>
              {ready === false ? (
                <>
                  <h1 className="text-2xl text-center font-bold">
                    Innovations Mace Henry Choyu T4
                  </h1>
                  <p className="text-center m-10 text-l">
                    You will play <b>3</b> games of a game of risk. In this
                    game, you will play multiple rounds as a farmer. In each
                    round, you can <b>save</b> your farmed crops in a silo,
                    where the crops increase in value each turn. Or, you can{" "}
                    <b>sell</b> your wheat the day you farm it and earn assured
                    money. There is a <b>random chance your silo breaks</b> and
                    you lose all your crops and saved money. For this reason,
                    you must balance risk with profit.
                  </p>
                  <div className="flex items-center justify-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => setReady(true)}
                    >
                      I'm Ready
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <b className="text-center text-xl">Round {currentRound}</b>
                  <p className="text-center text-l">
                    ${money}{" "}
                    <span className="text-green-900">
                      (+{wheatStoreBonus} Potential Wheat Profit)
                    </span>
                  </p>
                  <p>You have earned 5 wheat. What do you do with it?</p>
                  <div className="flex items-center justify-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                      onClick={() => {
                        setMoney(money + 10);
                        setCurrentRound(currentRound + 1);
                      }}
                    >
                      Sell
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                      onClick={() => {
                        setWheatStoreBonus(
                          wheatStoreBonus +
                            5 * (wheatStoreBonus === 0 ? 1 : wheatStoreBonus)
                        );
                        setCurrentRound(currentRound + 1);
                      }}
                    >
                      Store
                    </button>
                  </div>
                </>
              )}
            </>
          ) : (
            <p>
              Game Over! Thanks for playing. Your results have been recorded.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

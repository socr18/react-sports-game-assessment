import React from "react";
import "./App.css";
import Game from "./components/game/Game";
import raccoon from "./assets/images/raccoon.png";
import bunny from "./assets/images/bunny.png";
import hound from "./assets/images/hound.png";
import squirrel from "./assets/images/squirrel.png";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: raccoon,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: squirrel,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: bunny,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: hound,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

export default App;

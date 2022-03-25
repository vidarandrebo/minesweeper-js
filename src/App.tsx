import React from 'react';
import './App.css';
import {Game} from "./models/game";

function App() {
    let game = new Game(9);
    return (
        <body>
        <table>
            {game.board.map(function (row, index) {
                return <tr key={index}>{row.map(function (item, index) {
                    return <td key={index}>{item}</td>;
                })}</tr>;
            })}
        </table>

        </body>
    );
}

export default App;

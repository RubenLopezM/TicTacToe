import React, { useEffect, useState } from "react";
import Tictac from "./TicTac.jsx";

import Row from "react-bootstrap/Row";

const Home = () => {
	const [Turn, SetTurn] = useState("X");
	const [isfinished, SetIsfinished] = useState(false);

	const WinnerLines = [
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	const isWinner = arr => {
		for (let index = 0; index < WinnerLines.length; index++) {
			const [a, b, c] = WinnerLines[index];
			if (arr[a] && arr[a] == arr[b] && arr[a] == arr[c]) {
				return true;
			}
		}
	};

	const [Game, SetGame] = useState(Array(9).fill(null));
	const [Winner, SetWinner] = useState("");
	let squares = [...Game];

	const handleGame = Position => {
		squares[Position] = Turn;
		SetGame(squares);
		if (isWinner(squares) == true) {
			SetWinner(Turn);
			SetIsfinished(true);
		} else {
			if (Turn == "X") {
				SetTurn("O");
			} else {
				SetTurn("X");
			}
		}
	};

	let Board = [];
	for (let index = 0; index < 9; index++) {
		Board.push(
			<Tictac
				key={index.toString()}
				Element={Turn}
				Position={index}
				Click={handleGame}
				Finish={isfinished}
			/>
		);
	}

	return (
		<div className="TableGame">
			{Winner != "" && <p>{Turn} is the winner!!</p>}
			<Row>
				{Board[0]}
				{Board[1]}
				{Board[2]}
			</Row>
			<Row>
				{Board[3]}
				{Board[4]}
				{Board[5]}
			</Row>
			<Row>
				{Board[6]}
				{Board[7]}
				{Board[8]}
			</Row>
		</div>
	);
};

export default Home;

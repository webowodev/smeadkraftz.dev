'use client';

import { useState } from "react";

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [xPositions, setXPositions] = useState<number[]>([]);
    const [oPositions, setOPositions] = useState<number[]>([]);

    const handleClick = (index: number) => {
        if (board[index] || calculateWinner(board)) return;

        const newBoard = board.slice();
        const newXPositions = [...xPositions];
        const newOPositions = [...oPositions];

        if (isXNext) {
            if (xPositions.length === 3) {
                const oldestX = newXPositions.shift();
                if (oldestX !== undefined) {
                    newBoard[oldestX] = null;
                }
            } else if (xPositions.length === 2) {
                const oldestX = newXPositions[0];
                if (oldestX !== undefined) {
                    document.getElementById(`cell-${oldestX}`)?.classList.add("opacity-50");
                }
            }
            newBoard[index] = "X";
            newXPositions.push(index);
            setXPositions(newXPositions);
        } else {
            if (oPositions.length === 3) {
                const oldestO = newOPositions.shift();
                if (oldestO !== undefined) {
                    newBoard[oldestO] = null;
                }
            } else if (oPositions.length === 2) {
                const oldestO = newOPositions[0];
                if (oldestO !== undefined) {
                    document.getElementById(`cell-${oldestO}`)?.classList.add("opacity-50");
                }
            }
            newBoard[index] = "O";
            newOPositions.push(index);
            setOPositions(newOPositions);
        }

        setBoard(newBoard);
        setIsXNext(!isXNext);

        // Remove opacity from the previous oldest item
        if (xPositions.length === 2 || oPositions.length === 2) {
            const previousOldest = isXNext ? xPositions[0] : oPositions[0];
            if (previousOldest !== undefined) {
                document.getElementById(`cell-${previousOldest}`)?.classList.remove("opacity-50");
            }
        }
    };

    const handleRetry = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setXPositions([]);
        setOPositions([]);
    };

    const calculateWinner = (squares: (string | null)[]) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (const line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(board);
    const status = winner
        ? `Winner: ${winner}`
        : `Next player: ${isXNext ? "X" : "O"}`;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4">TicTacToe</h1>
            <div className="grid grid-cols-3 gap-2">
                {board.map((value, index) => {
                    let textClassName = '';

                    if (value === 'X') {
                        textClassName = 'text-blue-500';

                        if (isXNext && xPositions.length === 3 && index === xPositions[0]) {
                            textClassName += ' opacity-60';
                        }
                    } else if (value === 'O') {
                        textClassName = 'text-red-500';

                        if (!isXNext && oPositions.length === 3 && index === oPositions[0]) {
                            textClassName += ' opacity-60';
                        }
                    }
                    return (
                        <button
                            key={index}
                            id={`cell-${index}`}
                            className="w-16 h-16 text-xl font-bold border border-gray-400 flex items-center justify-center"
                            onClick={() => handleClick(index)}
                        >
                            <span className={textClassName}>{value}</span>
                        </button>
                    );
                })}
            </div>
            <p className="mt-4 text-lg">{status}</p>
            <div className="mt-4">
                {winner && (
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={handleRetry}
                    >
                        Retry Game
                    </button>
                )}
            </div>
        </div>
    );
}

export const data = {
  games: [
    {
      name: 'Tic-Tac-Toe',
      id: 'tic-tac-toe',
      options: [
        { name: 'Normal mode', id: 'normal-mode' },
        { name: 'Hard mode', id: 'hard-mode' },
        { name: 'Two Players', id: 'two-players' }
      ],
      gameData: {
        squares: [],
        unplayedSquares: [],
        buttons: [],
        winningCombinations: [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ]
      }
    }
    // {}
  ]
};

export const data = {
  games: [
    {
      name: 'Tic-Tac-Toe',
      id: 'tic-tac-toe',
      function: 'ticTacToe',
      options: [
        {
          name: 'Normal mode',
          id: 'normal-mode',

          mode: 'normal'
        },
        {
          name: 'Hard mode',
          id: 'hard-mode',

          mode: 'hard'
        },
        {
          name: 'Two Players',
          id: 'two-players',

          mode: 'two'
        }
      ],
      endMenu: {
        winMessage: ['', 'wins the game!'],
        drawMessage: "It's a draw!",
        subMessage: 'Play again?'
      },
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
        ],
        result: ''
      }
    },
    {
      name: 'Animal Memory',
      id: 'memory',
      function: 'memory',
      options: [
        { name: 'Easy mode', id: 'easy-mode', mode: 'easy' },
        { name: 'Hard mode', id: 'hard-mode', mode: 'hard' }
      ],
      endMenu: {
        winMessage: ['You win with', '', 'moves!'],
        subMessage: 'Play again?'
      },
      gameData: {
        cards: [
          { id: 'dog', emoji: '🐶' },
          { id: 'cat', emoji: '🐱' },
          { id: 'mouse', emoji: '🐭' },
          { id: 'rabbit', emoji: '🐰' },
          { id: 'fox', emoji: '🦊' },
          { id: 'bear', emoji: '🐻' },
          { id: 'panda', emoji: '🐼' },
          { id: 'tiger', emoji: '🐯' },
          { id: 'lion', emoji: '🦁' },
          { id: 'cow', emoji: '🐮' },
          { id: 'pig', emoji: '🐷' },
          { id: 'frog', emoji: '🐸' }
        ],
        cardsInPlay: [],
        flippedCards: [],
        movesMade: 0
      }
    },
    {
      name: 'Hangman',
      id: 'hangman',
      function: 'hangman',
      options: [
        { name: 'Easy mode', id: 'easy-mode', mode: 'easy' },
        { name: 'Hard mode', id: 'hard-mode', mode: 'hard' }
      ],
      endMenu: {
        winMessage: 'You guessed correctly, you saved the man',
        loseMessage: 'You lose, the man died',
        subMessage: 'Play again?'
      },
      gameData: {
        levels: {
          easy: [
            {
              word: 'planet',
              description: 'Not quite a star, but still in orbit'
            },
            {
              word: 'bridge',
              description: 'You use it to cross without getting wet'
            },
            { word: 'forest', description: 'Where the trees whisper' },
            { word: 'castle', description: 'Fit for royalty, made of stone' },
            { word: 'camera', description: 'It captures but never speaks' }
          ],
          hard: [
            { word: 'pyramid', description: 'Sharp edges, ancient mystery' },
            {
              word: 'oxygen',
              description: 'Invisible, but you’d miss it in seconds'
            },
            { word: 'galaxy', description: 'A neighborhood of stars' },
            {
              word: 'microscope',
              description: 'It reveals what eyes cannot see'
            },
            { word: 'volcano', description: 'Looks calm, but can explode' }
          ]
        },
        characterParts: {
          game: ['🪢', '🤠', '🧥', '👖', '🤚', '🤚', '👞', '👞'],
          end: '💀'
        },
        partIndex: 0,
        levelLetters: []
      },
      IMGs: {
        gallow: { src: '/assets/IMGs/hangman_gallows.png', alt: 'gallow' }
      }
    }
  ]
};

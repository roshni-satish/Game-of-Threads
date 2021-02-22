# Game-of-Threads
Microsoft Mentorship Mission
Tic-Tac-Toe Game - Technical Documentation
By Team: Game-of-Threads
The project is about building a new version of the Tic Tac Toe game. This design of the
game gives the player options for a two or multiplayer game as well as the choice to the
single player to play against the AI BOT. The game design, algorithms and strategies
used are documented below.
Tic-tac-toe standard Game Design
This game is very popular and is fairly simple by itself. Anyone can play Tic-tac-toe
almost everywhere with only pen and paper, making this a very casual game.
Players: Two Players
Time estimation: one or two minutes
● Game Methodology & Set-Up:

1.A 3x3 grid is used to play the simplest version which has nine possible spaces as
below.
2. The first player chooses to draw or place a symbol (say ‘O’) in one selected
space, then the second player will draw or place a second symbol (say ‘X’) in
another space,
3. Thus each player takes turns to draw their symbol on an empty space from
those nine possible spaces.
4. The player who meets the winning condition first wins. If all nine possible
spaces are used up and no one wins, that game is a draw.
● Goal & Winning Condition
In this game, the goal of each player is to be the first one to draw three of the
player’s symbols to form one of the following winning conditions.
The acceptable win conditions:
Horizontal win:
O O O
X X
X
The player who controls the O symbol won by drawing the three symbols in a
horizontal line.
Vertical win:
O
O X X
O X
The player who controls the O symbol won by drawing the three symbols in a
vertical line.
Diagonal win:
O X
O X
X O
The player who controls the O symbol won by drawing the three
symbols in a diagonal line.
● Strategy:
With the goal in mind and only nine possible spaces to play, the player must think
about defense and offense on the same move.
The one who plays first has a big advantage if he/she takes the middle space
because this space connects to every other space.
● Other versions:
The Grid: A bigger nxn(n>3) grid can be used instead of a 3x3 grid explained
above
Multiplayer Version: Three players can play the game if the grid is a bigger
one like 4x4 or 3x5 etc.,this expands the winning probability for each player.
Project Contents: The project is divided in three packages. They are all called
from the main module located at the root of the project. The core package
provides the core classes of the program, which represent a game, the board,
basic players etc.
Development Tools and Programming Languages;
(a) JavaScript
(b) Html
(c) Css
● Detailed Code description:
The main module, the starting point!
This is the entry point of the program, the first module executed.
There are 3 main packages;
1. TTT package
2. T-UB package
3. TTM package
Each of these packages has a html, css and a javascript file, See the commented
source code to configure the simulation and launch the program.
● Packages and their working
Core package - TTT package (stands for Tic-Tac-Toe )
This package is the one that appears initially, this page takes input of how one wants
to play and how many players are playing, it accordingly diverts the user to those
packages.
The working of the manual and Ai bot(level one) movements happen in this package
and the following are some important functions used;
Rules(game)
Represents the rules of the game, saves the present state of the game and checks
that the players follow the rules.
Variables .
• board (BoardState) – Represents the present physical board.
board()
Returns a copy of the self.board that will not be updated when a new
movement is made
Return type BoardState
Player_move()
Verifies that the movement of the player follows the rules and writes it on the
board.
Also sets Movement.turn and registers the movement in the list
Game.movements Registers boardS in Game.states
Parameters mvt (Movement) – The Movement the player wants to play
Returns True if the movement is possible, else False
Return type bool
resetBoard()
Resets the state for a new game
Checkwinner()
Sets Game.winner if there is one.
Returns True if there is a winner (ie if 3 dots are aligned), else False
Return type bool
T-UB package (stands for Tic-Tac-Toe unbeatable AI BOT version)
 This package basically contains the Aibot movements in level 2 game which is the
unbeatable version of Tic-tac-toe.
Minimax Algorithm Explanation:
To apply the minimax algorithm in tic-tac-toe, we are going to assume that X is a
maximizing player and O is a minimizing player. The maximizing player will try to
maximize its score or in other words choose the move with the highest value. The
minimizing player will try to minimize the value for the maximizing player, thus choosing
the move with the minimum value.
In order to calculate the values mentioned above, we need to decide on some
assumptions. We call these values heuristic values. In tic-tac-toe we have 3
possibilities:
● The state of the board is a draw: We will give this board a value of 0;
● X wins in a board state: We will give this board a value of 100;
● O wins in a board state: We will give this board a value of -100;
So we calculate the score for each empty space in the grid and then return the index of
the space with the highest score.
Important functions here are;
Turn, newBoard: registers the Board and the Players.
Variables
• board (Board) – Reference to the main Board instance
• and player2 (player1) – References to the players
• and nextPlayer (lastPlayer) – References to player1 and player2, are exchanged between the turns
• movements (list of Movement) – the chronological list of Movement() played
• states (list of BoardStates) – the chronological list of BoardStates()
• turn (int) – The present turn of the game, initialised at 0, first turn must be 1 (modified in
start() )
• movements – the list of all the Movements made
• states – the list of the different BoardState of the game
• winner (Player or None) – Defined by BoardAndRules.thereIsAWinner(), stays None is
there is none
• interactionLevel (InteractionLevel) – used to define the level of printed outputs
Warning: movements and states must be updated by boardAR.play()
reset()
Resets the game for a new game
Resets turn, movements, sates, winner, next and last player Calls boardAR.reset()
start()
Plays a game until it is over, i.e. there is a winner or the game is even
How it is working:
As long as the game is not over (ie self.turn < 9 and thereIsAWinner == False) there is a
loop where:
•turn is incremented,
•nextPlayer.play() is called and then next and last player are inverted,
•if wanted, the board is printed.
When it is over, meth:.Player.endOfGame() of player1 and player2 is called - if wanted, the
result is printed.
core.Movement module
class Movement(player, place)
Represents a movement played by a player.
Variables
• place (2-list of int) – The place [line, column].
• turn (int) – Must be set in board.play().
• player (Player) – The player playing.
TTM package (stands for Tic-Tac-Mo - multi-player version)
 This package basically contains the player movements in the game with the turns
given to 3 players with an animation showing which player has to take the turn.
Additional functions in this case;
Rules() This opens up the rules of the game before starting the game.
Zoomin(); & Zoomout(); These functions have been used in the Animations to zoom in
the player whose turn it is to play!
reset()
Resets the game for a new game
Resets turn, movements, sates, winner, next and last player Calls board.reset()
Player_move()
Verifies that the movement of the player follows the rules and writes it on the board.
Also sets Movement.turn and registers the movement in the list Game.movements
Registers boardS in Game.states
Parameters mvt (Movement) – The Movement the player wants to play
Checkwinner()
Sets Game.winner if there is one.
Returns True if there is a winner (ie if 3 dots are aligned), else False
Return type boolean.

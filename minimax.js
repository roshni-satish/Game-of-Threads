
var board1 = [
  ["","",""],
  ["","",""],
  ["","",""]
]
function bestMove(board) {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        board1[i][j] =  board[i][j];
      }
    }
  // AI to make its turn
  var bestScore = -1000;
  var row1,col1;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      // Is the spot available?
      if (board1[i][j] == "") {
        board1[i][j] = computer;
        var score = minimax(board1, 0, false);
        board1[i][j] = "";
        if (score > bestScore) {
          bestScore = score;
        row1=  i;
        col1=j;
        }
      }
    }
  }
  var m = row1*3+col1;
  $("#"+m).text(computer);
  board[row1][col1] =computer;
    turn = user;
  console.log(board);
}

//var scores = {'X': 10,'O': -10,'tie': 0};





function minimax(board1, depth, isMaximizing) {
  var result = checkWinner(board1);
  if (result != null) {
    if (result== 'X')
    {return 10;}
    else if (result=='O') {
      return (-10);
    }
    else {
      return 0;
    }
  }

  if (isMaximizing) {
    var bestScore = -1000;
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        // Is the spot available?
        if (board1[i][j] == "") {
          board1[i][j] = computer;
          bestScore = max(bestScore,minimax(board1, depth + 1, false));
          board1[i][j] = "";
        }
      }
    }
    return bestScore;
  } else {
    var bestScore = 1000;
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        // Is the spot available?
        if (board1[i][j] == "") {
          board1[i][j] = user;
            bestScore = min(bestScore,minimax(board1, depth + 1, true));
          board1[i][j] = "";
        }
      }
    }
    return bestScore;
  }
}

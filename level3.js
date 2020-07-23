var board = [
	["","",""],
	["","",""],
	["","",""]
]

var turn, sqId, user, computer, row, col, cw;
const ARR_LENGTH = 3;

$(document).ready(function() {
	//1 checkbox event listener
	$(".checkbox").click(function() {
		if($(this).is(":checked")) {
			user = $(this).val();
			turn = user;
			computer = (user == 'X') ? 'O' : 'X';
		}
	})
	//2 square event listener
	$(".square").click(function() {

    sqId = $(this).attr("id");
		PlayerMove();
			bestMove(board);


		 var result = checkWinner(board);
		 if (result != null) {
		 if (result == 'tie') {
			alert("It's a Draw!");
		 } else {
			alert(result+" Won the Game!!!");
		 }
		 }

});
	//reset board
	$(".reset").click(function() {
		resetboard();
	})

	});
	function PlayerMove() {
		if($("#"+sqId).text() == ""){
			$("#"+sqId).text(user);
			row = getRow(sqId);
			col = getCol(sqId);
			board[row][col] = user;
			turn=computer;
			console.log(board);
		}
		else {
			alert("Wrong move");
		}
	}


	//getting row number
	function getRow(sqId1) {
		return Math.floor(sqId1 / ARR_LENGTH) ;
	}

	//getting col number
	function getCol(sqId1) {
		return sqId1 % ARR_LENGTH;
	}

	//check who won
	function checkWinner(board2) {
		var winner = null;
			var os=0;
		//checking rows
		for(var i = 0; i < ARR_LENGTH; i++){
			if(board2[i][0] != "" && board2[i][0] == board2[i][1] && board2[i][1] == board2[i][2])
				winner= board2[i][0];
		}
		//checking columns
		for(var i = 0; i < ARR_LENGTH; i++){
			if(board2[0][i] != "" && board2[0][i] == board2[1][i] && board2[1][i] == board2[2][i])
				winner= board2[0][i];
		}
		//checking diagonals
		if(board2[0][0] != "" && board2[0][0] == board2[1][1] && board2[1][1] == board2[2][2])
			winner= board2[0][0];
		if(board2[0][2] != "" && board2[0][2] == board2[1][1] && board2[1][1] == board2[2][0])
			winner= board2[0][2];
	// check Draw
	for(var i=0; i<ARR_LENGTH; i++) {
		for(var j=0; j<board2[i].length; j++) {
			if(board2[i][j] == "")
			 {os=os+1;
					}
		}
	}
	if (winner == null && os == 0) {
    return 'tie';
  } else {
    return winner;
  }
	}

	//resetting the board for new game
	function resetboard() {
		$(".square").text("");
		$(".checkbox").prop("checked", false);
		user = "";
		turn = "";
		computer = "";
		for(var i = 0; i < ARR_LENGTH; i++) {
			for(var j = 0; j < board[i].length; j++) {
				board[i][j] = "";
			}
		}
	}

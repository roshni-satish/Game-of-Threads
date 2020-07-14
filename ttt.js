var board = [
	["","",""],
	["","",""],
	["","",""]
]

var turn, sqId, user, computer, row, col;
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
		ComputerMove();
		if(checkWinner()){
			alert(turn+" Won the Game!!!");
		}
		if(!checkDraw()){
			alert("It's a Draw!");
		}
		turn = (turn == user) ? computer : user;
	});

	//reset board
	$(".reset").click(function() {
		resetboard();
	})

});

//player move
function PlayerMove() {
	if($("#"+sqId).text() == ""){
		$("#"+sqId).text(user);
		row = getRow();
		col = getCol();
		board[row][col] = user;
		console.log(board);
	}
	else {
		alert("Wrong move");
	}
}

//Random move by computer
function ComputerMove() {
	var random;
	var min = 0, max = 8;
	do{
		random = Math.floor(Math.random() * (max+min));
	}while($("#"+random).text() != "")
	$("#"+random).text(computer);
	row = getRow();
	col = getCol();
	board[row][col] = computer;
}

//checking for a draw
function checkDraw() {
	for(var i=0; i<ARR_LENGTH; i++) {
		for(var j=0; j<board[i].length; j++) {
			if(board[i][j] == "")
				return true;
		}
	}
	return false; 
}

//getting row number
function getRow() {
	return Math.floor(sqId / ARR_LENGTH) ;
}

//getting col number
function getCol() {
	return sqId % ARR_LENGTH;
}

//check who won
function checkWinner() {
	//checking rows
	for(var i = 0; i < ARR_LENGTH; i++){
		if(board[i][0] != "" && board[i][0] == board[i][1] && board[i][1] == board[i][2])
			return true;
	}
	//checking columns
	for(var i = 0; i < ARR_LENGTH; i++){
		if(board[0][i] != "" && board[0][i] == board[1][i] && board[1][i] == board[2][i])
			return true;
	}
	//checking diagonals
	if(board[0][0] != "" && board[0][0] == board[1][1] && board[1][1] == board[2][2])
		return true;
	if(board[0][2] != "" && board[0][2] == board[1][1] && board[1][1] == board[2][0])
		return true;

	// if reached this point then return false
	return false;

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


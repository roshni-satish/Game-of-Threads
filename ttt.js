var board = [0,1,2,3,4,5,6,7,8]
var trialboard = [0,1,2,3,4,5,6,7,8]
var bestscore = [0,1,2,3,4,5,6,7,8]
var turn, sqId, user, computer, row, col, level, wrong_move, score;
level=0;
wrong_move=0;
const ARR_LENGTH = 9;

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
		if(wrong_move==0){
			if(checkWinner(board)){
				Win(turn);
			}
			else if(checkDraw()){
				Draw();
			}
			else if(level!=0){
				ComputerMove();
				if(checkWinner(board)){
					Win(turn);
				}
			}
		}
		if(level==0){
			turn = (turn == 'X' ) ? 'O' : 'X';
		}
	});

	//reset board
	$(".reset").click(function() {
		resetboard();
	})

	$(".option1").click(function() {
		unWin();
	})

	$(".option3").click(function() {
		unDraw();
	})

	$(".1player").click(function() {
		Closeshift();
		overlay.classList.add('active')
		shift2.classList.add('active')
		level=1;
	})

	$(".2players").click(function() {
		Closeshift();
		level=0;
		player2.classList.remove('active')
		player2human.classList.add('active')
	})

	$(".easy").click(function() {
		Closeshift2();
		level=1;
	})

});

//player move
function PlayerMove() {
	if($("#"+sqId).text() == ""){
		if(level!=0) turn = user;
		$("#"+sqId).text(turn);
		board[sqId] = turn;
		console.log(board);
		wrong_move=0;
	}
	else {
		alert("Wrong move");
		wrong_move=1;
	}
}

//Random move by computer
function ComputerMove() {
	if(level==1){
		var random;
		var min = 0, max = 8;
		do{
			random = Math.floor(Math.random() * (max+min));
		}while($("#"+random).text() != "")
		$("#"+random).text(computer);
		board[random] = computer;
	}
	turn = computer;
	console.log(board);
}

//checking for a draw
function checkDraw() {
	for(var i=0; i<ARR_LENGTH; i++) {
			if(board[i] != 'X' && board[i] != 'O')
				return false;
		} 
		return true;
}

//check who won
function checkWinner(board) {
	//checking for winning combinations
	if(
	(board[0] == turn && board[1] == turn && board[2] == turn) ||
	(board[3] == turn && board[4] == turn && board[5] == turn) ||
	(board[6] == turn && board[7] == turn && board[8] == turn) ||
	(board[0] == turn && board[3] == turn && board[6] == turn) ||
	(board[1] == turn && board[4] == turn && board[7] == turn) ||
	(board[2] == turn && board[5] == turn && board[8] == turn) ||
	(board[0] == turn && board[4] == turn && board[8] == turn) ||
	(board[6] == turn && board[4] == turn && board[2] == turn)){
		return true;}
	//if reached here
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
		board[i] = "";
	}
}

function Win(turn) {
	if(level!=0) {
	if(turn==user){
	document.getElementById("win_popup_text").innerHTML = "You Won the game!";
	win_popup.classList.add('active')
	overlay.classList.add('win')}
	else{
	document.getElementById("win_popup_text").innerHTML = "You Lost :( ";
	win_popup.classList.add('active')}}
	else if(level==0){
		document.getElementById("win_popup_text").innerHTML = turn+" Won the game!";
		win_popup.classList.add('active')
		overlay.classList.add('win')
	}
}

function Closeshift() {
	shift.classList.remove('active')
	overlay.classList.remove('active')
}

function Closeshift2() {
	shift2.classList.remove('active')
	overlay.classList.remove('active')
}

function unWin() {
	win_popup.classList.remove('active')
	overlay.classList.remove('win')
	resetboard();
}

function Draw() {
	draw_popup.classList.add('active')
	overlay.classList.add('active')
}

function unDraw() {
	draw_popup.classList.remove('active')
	overlay.classList.remove('active')
	resetboard();
}


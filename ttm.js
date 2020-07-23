var board = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

var turn, sqId, user, computer, row, col, wrong_move;
const ARR_LENGTH = 15;
wrong_move=0;

$(document).ready(function() {
	user = "player1";
	turn = 'X';
	zoomin();
	// square event listener
	$(".square").click(function() {
		sqId = $(this).attr("id");
		PlayerMove();
		if(checkWinner(board)){
			//alert(turn+" Won the Game!!!");
			Win(turn);
		}
		else if(checkDraw(board)){
			//alert("It's a Draw!");
			Draw();
		}
		else if(wrong_move==0){
			if(turn == 'X'){
				zoomout();
				turn = 'O';
				user = "player2";
				zoomin();
			}
			else if(turn == 'O'){
				zoomout();
				turn = 'Y';
				user = "player3";
				zoomin();
			}
			else{
				zoomout();
				turn= 'X';
				user = "player1";
				zoomin();
			}
		}
	});

	//reset board
	$(".reset").click(function() {
		resetboard();
	})
	
	$(".option1").click(function() {
		unWin();
	})

	$(".option2").click(function() {
		unWin();
	})

	$(".option3").click(function() {
		unDraw();
	})

	$(".close-button").click(function() {
		CloseRules();
	})

});

//player move
function PlayerMove() {
	if($("#"+sqId).text() == ""){
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

//check who won
function checkWinner(board) {
	//checking for winning combinations
	if (
 /*horizontal winning cases*/		
 (board[0] == turn && board[1] == turn && board[2] == turn) ||
 (board[1] == turn && board[2] == turn && board[3] == turn) ||
 (board[2] == turn && board[3] == turn && board[4] == turn) || 
 (board[5] == turn && board[6] == turn && board[7] == turn) ||
 (board[6] == turn && board[7] == turn && board[8] == turn) ||
 (board[7] == turn && board[8] == turn && board[9] == turn) ||
 (board[10] == turn && board[11] == turn && board[12] == turn) ||
 (board[11] == turn && board[12] == turn && board[13] == turn) ||
 (board[12] == turn && board[13] == turn && board[14] == turn) ||
 /*vertical winning cases*/
 (board[0] == turn && board[5] == turn && board[10] == turn) ||
 (board[1] == turn && board[6] == turn && board[11] == turn) ||
 (board[2] == turn && board[7] == turn && board[12] == turn) ||
 (board[3] == turn && board[8] == turn && board[13] == turn) ||
 (board[4] == turn && board[9] == turn && board[14] == turn) ||    
 /*slant winning cases*/ 
 (board[0] == turn && board[6] == turn && board[12] == turn) ||
 (board[1] == turn && board[7] == turn && board[13] == turn) ||
 (board[2] == turn && board[8] == turn && board[14] == turn) ||
 (board[2] == turn && board[6] == turn && board[10] == turn) ||
 (board[3] == turn && board[7] == turn && board[11] == turn) ||     
 (board[4] == turn && board[8] == turn && board[12] == turn)) {
 return true; }

	// if reached this point then return false
	return false;

}

//checking for a draw
function checkDraw(board) {
	for(var i=0; i<board.length; i++) {
			if(board[i] != 'X' && board[i] != 'O' && board[i] != 'Y')
				return false;
		}
		return true; 
}

//resetting the board for new game
function resetboard() {
	$(".square").text("");
	$(".checkbox").prop("checked", false);
	turn = "X";
	zoomout();
	user = "player1";

	for(var i = 0; i < ARR_LENGTH; i++) {
		board[i]= "";
	}
}

//zoom the player
function zoomin(){
	var myImg = document.getElementById(user);
	var currWidth = myImg.clientWidth;
	myImg.style.width = (currWidth + 30)+"px";
	var currHeight = myImg.clientHeight;
	myImg.style.height = (currHeight + 30)+"px";
}

//zoom out after the player's move
function zoomout(){
	var myImg = document.getElementById(user);
	var currWidth = myImg.clientWidth;
	var currHeight = myImg.clientHeight;
	if(currWidth==150){
	myImg.style.width = (currWidth - 30)+"px";
	myImg.style.height = (currHeight - 30)+"px";
	}
}

function CloseRules() {
	rules.classList.remove('active')
	overlay.classList.remove('active')
}


function Win(turn) {
	document.getElementById("win_popup_text").innerHTML = turn+" Won the game!";
	win_popup.classList.add('active')
	overlay.classList.add('win')
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




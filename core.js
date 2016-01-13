
/*** Reuse code ***/
//Set background in different colour 
function setBackgroundColour(name, backColour){
	var color = backColour;
	$("#"+name).css({'background-color':color});
}


function insertImage(name, img){
	var str = '';
	str = "<img src='"+img+".gif' width='30px' height='40px' vertical-align='bottom' />";
	$("."+name).html(str);
}

function displayMessageById(name, message){
	var str = message;
	$("#"+name).html(str);
	$("#"+name).show();
}

function clickById(name){
	var clicked = "";
	$("#"+name).click(function(){ 
		clicked  = name;
	});
	return clicked;
}

//display non
function displayNoneById(name){
	$('#'+name).hide();
}

//display
function displayById(name){
	$('#'+name).show();
}

// for computer picking rock, paper or scissors
function computerPick(){
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	} else if(computerChoice <= 0.67) {
	    computerChoice = "paper";
	} else {
	    computerChoice = "scissors";
	} 
	return computerChoice;
}
	
function whoWin(user1, choice1, user2, choice2){
	var winner = "";
	if (choice1==choice2){
    	winner = "";
    }
	else if (choice1=="rock") {
        if (choice2==="scissors"){	     
           winner=user1;	          
        }
       else {
           winner=user2;
        }
	} 
	else if (choice1=="paper") {
    	if (choice2=="rock"){
        	 winner=user1;	 
        }
      	else {
        	winner=user2;
        }
	} 
	else if (choice1=="scissors") {
    	if (choice2=="rock") {
        	winner=user2;
        }
    	else {
        	 winner=user1;	
        }
    }
    return winner;
}






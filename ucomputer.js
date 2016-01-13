/*
$("#compareBtn").click(function(){
		
	alert("dd");
			//var choice1 = computerPick();

			//pick one and set up user choick

			alert(choice1);
			var choice2 = computerPick();
			alert(choice2);
			var winner = whoWin("com1",choice1,"com2",choice2);
			alert(winner);
});

*/

/*** get user choice ***/
function getUserChoic(name){
	$("#"+name).click(function(){ 
	userChoice  = name;
	//the style to set it up with all none
	
	return userChoice;
});

console.log("we are up!");

$(document).ready(function() {

	var buttonClicks = 0;

	//main button functionality
	$(".primarybutton").on('click', function() {
		buttonClicks++;
		$(".testDiv").append("<div class='greenDiv' data-button-toggle='1'><button class='colorChanger'>Change color</button><br><p>Here are the number of clicks: " + buttonClicks + "</p><button class='removebutton'>remove</button></div>");
	});

	//function for change color button
	$(".testDiv").on("click", ".colorChanger", function(){
		$(".greenDiv").css("background-color", "red");
		$(".greenDiv").data("buttonToggle", "2");
		console.log("this is a test: " + $(".greenDiv").data("buttonToggle"));
	});

	//function for remove button
	$(".testDiv").on("click", ".removebutton", function(){
		$(".greenDiv").remove();
	});

});
	var test = false;
	var arrayButtons = ["cat", "dog", "squirel"];


	

	//This Function Generate Buttons And New Buttons
	function buttonGenerator(){
		//Next Line Prevent Duplicated Buttons In The Browser
		$("#buttons").empty();
		//Create Buttons
		for (var i = 0; i < arrayButtons.length; i++) {
			var a = $("<button>");
			a.attr("class","btn btn-success");
			a.text(arrayButtons[i]);
			$("#buttons").append(a);
		}
	};

	$("#addButton").on("click", function(event){
		event.preventDefault();
		var element = $("#newElement").val();
		// This Condition Will Prevent Create An Empty Button
		
		var test = arrayButtons.indexOf(element);
		//This COndition Prevents Duplicated Buttons In The Browser
		if(test >= 0){test = true;}
		if(element==="" || test === true){
			$("#newElement").val("");
		}
		// This Condition Will Create A New Button
		else{
		arrayButtons.push(element);
		buttonGenerator();
		// Empty Input Box
		$("#newElement").val("");
		}
	})




	buttonGenerator();
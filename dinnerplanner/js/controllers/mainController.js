var MainController = function(view, model){
	view.searchButton.click(function(){
		

		view.update(view.searchInput.val());

		// if view.searchInput.val() in view.dishes
		// 	getselecteddish
		// else
		// 	console.log("gick inte");
	});

	
}

 // view.plusButton.click(function(){
 // model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 // });
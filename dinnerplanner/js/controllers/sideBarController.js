var SideBarController = function(view, model, appController){
	
	view.plusGuest.click(function(){
		var n = model.getNumberOfGuests();
		n = n + 1;
		model.setNumberOfGuests(n);
	});
	view.minusGuest.click(function(){
		var n = model.getNumberOfGuests();
		n = n - 1;
		model.setNumberOfGuests(n);

	});

	view.dishContainer.on('click', '.remove-button', function(){
		var dishId = $(this).attr("id")
		model.removeDishFromMenu(dishId);
	});

}
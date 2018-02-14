var SideBarController = function(view, model){
	
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

}
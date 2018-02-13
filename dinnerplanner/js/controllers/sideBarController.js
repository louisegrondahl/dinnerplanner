var SideBarController = function(view, model){
	
	view.plusGuest.click(function(){
		var gus = model.getNumberOfGuests();
		gus = gus + 1;
		model.setNumberOfGuests(gus);
	});
	view.minusGuest.click(function(){
		var gus = model.getNumberOfGuests();
		gus = gus - 1;
		model.setNumberOfGuests(gus);

	});

}
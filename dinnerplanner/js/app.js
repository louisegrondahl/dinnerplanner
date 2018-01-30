$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	var sidebarView = new SideBarView($("#sidebarView"), model);
	var dishView = new DishView($("#dishView"),model);
	var selectedDishView = new SelectedDishView($("#selectedDishView"),model);
	//var dinnerOverView = new DinnerOverView($("#dinnerOverView"),model);
	//var dinnerprintView = new DinnerPrintView($("#dinnerPrintView"),model);
	//var dishView = new DishView($("#dishView"),model);

	this.showDishViewScreen = function(dishView, model) {
		var x = document.getElementById('dishView');

		if (x.style.display === 'none') {
			x.style.display = 'block';
		}else {
			x.style.display = 'none';
		}
	}

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});
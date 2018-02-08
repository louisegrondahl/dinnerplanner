var DinnerPrintView = function (container, model) {

	var recipeContainer = container.find('#recipeContainer');


	
		//title.html(dish.name);

	var numberOfGuests = container.find('#numberOfGuests');

	this.update = function() {
		numberOfGuests.html(model.getNumberOfGuests());
		recipeContainer.html(model.getFullMenu());
	};
	this.update()
	model.addObserver(this)	
}	

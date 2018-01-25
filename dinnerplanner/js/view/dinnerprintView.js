var DinnerPrintView = function (container, model) {

	var recipeContainer = container.find('#recipeContainer');


	recipeContainer.html(model.getFullMenu());
		//title.html(dish.name);
}	
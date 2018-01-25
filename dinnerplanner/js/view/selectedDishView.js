var SelectedDishView = function(container, model) {

	var title = container.find("#title")
	var imageContainer = container.find("#imgContainer");
	var ingredientsContainer = container.find("#ingredientsContainer");
	var descriptionContainer = container.find("#descriptionContainer");



	var ing = model.getAllIngredients(1)
	var dish = model.getDish(1)
	//loopa över dish ingredient



	var imgString = '<img src="' + dish.image + '"/>';


	title.html(dish.name);
	imageContainer.html(imgString);
	ingredientsContainer.html(ing);
	descriptionContainer.html(dish.description);


	



	

}	



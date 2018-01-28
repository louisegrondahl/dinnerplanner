var SelectedDishView = function(container, model) {

	var title = container.find("#title")
	var imageContainer = container.find("#imgContainer");
	var descriptionContainer = container.find("#descriptionContainer");
	var ingredientsContainer = container.find("#ingredientsContainer");


	var dish = model.getDish(1)
	//loopa över dish ingredient
	for(i in dish.ingredients){
		var ing=dish.ingredients;
	}

	var imgString = '<img src="' + dish.image + '"/>';


	title.html(dish.name);
	imageContainer.html(imgString);
	descriptionContainer.html(dish.description);
	ingredientsContainer.html(dish.ing);
	console.log(ing);

}	



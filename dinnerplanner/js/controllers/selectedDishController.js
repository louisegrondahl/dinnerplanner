var SelectedDishController = function(view, model, appController){

	view.addToMenu.click(function(){

		var dish = model.getCurrentDish()
		
		model.addDishToMenu(dish);
	
		appController.homepage();
	});
}

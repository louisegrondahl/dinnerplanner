var SelectedDishController = function(view, model, appController){

	view.addToMenu.click(function(){
		view.loader.show();
		var dish = model.getCurrentDish()
		
		model.addDishToMenu(dish);
	
		appController.homepage();
		view.loader.hide();
	});
}

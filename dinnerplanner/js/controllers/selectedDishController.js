var SelectedDishController = function(view, model, appController){
	//console.log("kiss")
	$('#addtomenu').click(function(){
		//console.log("bajs");
		//console.log(model.getDish());
		model.addDishToMenu();
		model.notifyObservers();
		appController.homepage();
	});
}
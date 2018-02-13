var SelectedController = function(view, model, showSelectedDishView){
	
	this.update = function(){
		console.log("poop")
		view.dishBtn.click(function(){
			var dishId = $(this).attr("id")
			console.log(dishId)
			model.setDishId(dishId);
			showSelectedDishView();
			
		});
	}
	this.update();
	model.addObserver(this);
}
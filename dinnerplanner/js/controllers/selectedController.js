var SelectedController = function(view, model, showSelectedDishView){

	this.update = function(){
		$(document).on('click', '#dishView .dishBtn', function(){ 
			var dishId = $(this).attr("id")
			//console.log(dishId)
			model.setDishId(dishId);
			showSelectedDishView();
		});
	}
	
	this.update();
	model.addObserver(this);
}
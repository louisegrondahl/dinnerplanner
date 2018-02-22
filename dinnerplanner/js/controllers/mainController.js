var MainController = function(view, model, showSelectedDishView){
	
	view.searchButton.click(function(){

		view.update(view.searchInput.val());
		
	});
	
	view.selectType.change(function(){
		var type = this.value;
		view.update()
	})

	view.dishContainer.on('click', '.dishBtn', function(){
		console.log('nånting hände')
		var dishId = $(this).attr("id")
		//console.log(dishId)
		model.getDish(dishId, function(data){
			model.setCurrentDish(data);
			showSelectedDishView();
		});
	});
	
}

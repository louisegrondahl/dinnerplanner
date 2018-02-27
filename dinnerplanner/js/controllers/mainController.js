var MainController = function(view, model, showSelectedDishView){
	
	view.searchButton.click(function(){

    	view.update(view.searchInput.val().toLowerCase());	
		
	});

	
	view.selectType.change(function(){

		var filter = view.searchInput.val();
		var type = this.value;
		view.update(filter)

	})

	view.dishContainer.on('click', '.dishBtn', function(){
		view.loader.show();
		//console.log('nånting hände')
		var dishId = $(this).attr("id")
		//console.log(dishId)
		model.getDish(dishId, function(data){
			model.setCurrentDish(data);
			showSelectedDishView();
		view.loader.hide();

		});
	});
	
}

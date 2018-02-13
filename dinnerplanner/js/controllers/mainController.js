var MainController = function(view, model){
	view.searchButton.click(function(){
		

		view.update(view.searchInput.val());
		
	});
	view.selectType.change(function(){
			var type = this.value;
			view.update()
		})

	
}

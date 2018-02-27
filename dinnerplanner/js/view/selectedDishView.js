var SelectedDishView = function(container, model) {

	var title = container.find("#title");
	var imageContainer = container.find('#imgContainer');
	var descriptionContainer = container.find('#descriptionContainer');
	var dishPrice = container.find('#dishPrice');
	this.addToMenu = container.find('#addtomenu');
	this.loader = container.find('.loader');
	
	
	

	this.update = function(){
		var name='';
		var quantity='';
		var unit ='';
		var price='';
		
		if(model.getCurrentDish() != 0){

			var dish = model.getCurrentDish();

			var number = model.getNumberOfGuests();
			var sum=0;
			
			for(var j=0; j < dish.extendedIngredients.length; j++){

				name += dish.extendedIngredients[j].name + '<br>';
				quantity += Math.round(dish.extendedIngredients[j].amount*number) + '<br>';
				unit += dish.extendedIngredients[j].unit + '<br>';
				sum += dish.extendedIngredients[j].price*number;
				};

				var imgString = '<img src="' + dish.image + '"/>';

				title.html(dish.title);
				imageContainer.html(imgString);
				descriptionContainer.html(dish.instructions);

				container.find('#td1').html(name);
				container.find('#td2').html(quantity);
				container.find('#td3').html(unit);
				dishPrice.html(sum);
		}
		

	};
	
	model.addObserver(this);
	

}
var SelectedDishView = function(container, model) {

	var title = container.find("#title");
	var imageContainer = container.find('#imgContainer');
	var descriptionContainer = container.find('#descriptionContainer');
	var dishPrice = container.find('#dishPrice');
	
	
	

	this.update = function(){
		var name='';
		var quantity='';
		var unit ='';
		var price='';
		
		
		if(model.getDishId() != 0){

			model.getDish(model.getDishId(), function(dish){

			var number = model.getNumberOfGuests();
			var sum=0;
			
			for(var j=0; j < dish.extendedIngredients.length; j++){

				name += dish.extendedIngredients[j].name + '<br>';
				quantity += dish.extendedIngredients[j].amount*number + '<br>';
				unit += dish.extendedIngredients[j].unit + '<br>';
				//price += dish.extendedIngredients[j].price*number + '<br>';

				sum += dish.extendedIngredients[j].price*number;
				};

				var imgString = '<img src="' + dish.image + '"/>';

				title.html(dish.name);
				imageContainer.html(imgString);
				descriptionContainer.html(dish.instructions);

				container.find('#td1').html(name);

				container.find('#td2').html(quantity);
				container.find('#td3').html(unit);
				//container.find('#td4').html(price);
				dishPrice.html(sum);

			});
			
		}
		

	};
	this.update();
	model.addObserver(this);
	

}
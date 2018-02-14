var SelectedDishView = function(container, model) {

	var title = container.find("#title");
	var imageContainer = container.find('#imgContainer');
	var descriptionContainer = container.find('#descriptionContainer');
	var dishPrice = container.find('#dishPrice');
	
	
	

	this.update = function(){
		//console.log(model.getDishId());
		//console.log("ifif")
		var name='';
		var quantity='';
		var unit ='';
		var price='';
		
		
		if(model.getDishId() != 0){
			var dish = model.getDish(model.getDishId());
			//console.log("mus: " + model.getDishId());
			var number = model.getNumberOfGuests();
			var sum=0;
			
			for(var j=0; j < dish.ingredients.length; j++){
				name += dish.ingredients[j].name + '<br>';
				quantity += dish.ingredients[j].quantity*number + '<br>';
				unit += dish.ingredients[j].unit + '<br>';
				price += dish.ingredients[j].price*number + '<br>';
				sum += dish.ingredients[j].price*number;
				};

				var imgString = '<img src="' + dish.image + '"/>';

				title.html(dish.name);
				imageContainer.html(imgString);
				descriptionContainer.html(dish.description);
				container.find('#td1').html(name);
				container.find('#td2').html(quantity);
				container.find('#td3').html(unit);
				container.find('#td4').html(price);
				dishPrice.html(sum);
		}
		

	};
	this.update();
	model.addObserver(this);
	

}
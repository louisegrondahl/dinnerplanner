var SelectedDishView = function(container, model) {

	var title = container.find("#title");
	var imageContainer = container.find('#imgContainer');
	var descriptionContainer = container.find('#descriptionContainer');
	
	var dish = model.getDish(1);
	
	var name='';
	var quantity='';
	var unit ='';
	var price='';



	this.update = function(){
		for(var j=0; j < dish.ingredients.length; j++){
			name += dish.ingredients[j].name + '<br>';
			quantity += dish.ingredients[j].quantity + '<br>';
			unit += dish.ingredients[j].unit + '<br>';
			price += dish.ingredients[j].price + '<br>';
			};
	
			var imgString = '<img src="' + dish.image + '"/>';

			title.html(dish.name);
			imageContainer.html(imgString);
			descriptionContainer.html(dish.description);
			container.find('#td1').html(name);
			container.find('#td2').html(quantity);
			container.find('#td3').html(unit);
			container.find('#td4').html(price);

	};
	this.update()
	model.addObserver(this)
	

}
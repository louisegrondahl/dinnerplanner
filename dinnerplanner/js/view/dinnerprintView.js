var DinnerPrintView = function (container, model) {


	var numberOfGuests = container.find('#numberOfGuests');

	
	this.update = function() {	
		var dish = model.getFullMenu();
		var table = '';
		var guests = model.getNumberOfGuests();
		var html = '<h2 style="padding-left:20px;display:inline;">My Dinner:' + ' ' + guests + ' people</h2>';


		for(i in dish){

		
		var name='';
		var quantity='';
		var unit ='';
		
		var img = '';
		
			
				var tmp = "<tr>";

				img += '<td id="td1">'+ dish[i].title + '<br>';	
				img += '<img src="' + dish[i].image + '"/></td>';
				des = '<td id="td3" class="col-sm-5">' + dish[i].instructions + '</td>';



					for( j in dish[i].extendedIngredients){
					name += dish[i].extendedIngredients[j].name + '<br>';
					quantity += dish[i].extendedIngredients[j].amount*guests + '<br>';
					unit += dish[i].extendedIngredients[j].unit + '<br>';
					
					};
				
				
				ingred1 = '<td id="td4" class="col-sm-2" style="text-transform: capitalize;">' + name + '</td>';
				ingred2 = '<td id="td5 class="col-sm-2" style="color:black;">' + quantity + '</td>';
				ingred3 = '<td id="td6" class="col-sm-2" style="color:black;">' + unit + '</td>';

				ingred = '<td id="td2">' +ingred1 + ingred2 + ingred3 +'</td>';

				tmp+=img + ingred + des;

				tmp += "</tr>";
				table += tmp


		numberOfGuests.html(html);

		container.find('#printTable').html(table);

		}
			
	};

	this.update()
	model.addObserver(this)	

};
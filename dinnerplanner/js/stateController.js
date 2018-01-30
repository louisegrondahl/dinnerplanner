$("#index").hide();	
$("#createnewdinner").click(function(){
	$("#startpage").hide();
	$("#index").show();

});



function showselectedDishView() {
	var x = document.getElementById('selectedDishView');

	if (x.style.display == 'block') {
		x.style.display = 'none';
	}else {
		x.style.display = 'block';
	}
}
function DetailView() {
	var self = Ti.UI.createView({
		backgroundColor:'#349C42',
	});
	
	var lbl = Ti.UI.createLabel({
		text:'Seleccione un plato',
		height:'auto',
		width:'auto',
		color:'#fff'
	});
	self.add(lbl);
	
	self.addEventListener('itemSelected', function(e) {
		lbl.text = e.nombre+': S/. '+e.precio;
	});
	
	return self;
};

module.exports = DetailView;

function ListaPlatosView() {
	var self = Ti.UI.createView({
		backgroundColor:'#349C42',
		});
	var tabla_datos = Ti.UI.createTableView();
	self.add(tabla_datos);
	self.addEventListener('itemSelected', function(e) {
		tabla_datos.setData(e.datos);
	});
	
	tabla_datos.addEventListener('click', function(e) {
		self.fireEvent('itemSelected', {
			nombre:e.rowData.title,
			precio:e.rowData.precio,
		});
	});
	
	return self;
};

module.exports = ListaPlatosView;

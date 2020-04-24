'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuamontir);  

    app.route('/tampilsparepart')
        .get(jsonku.tampilsemuasparepart); 
        
    app.route('/tampilsparepart/:id')
        .get(jsonku.tampilberdasarkanid);
        
    app.route('/tampilmontir/:id')
        .get(jsonku.tampilberdasarkanid);


}
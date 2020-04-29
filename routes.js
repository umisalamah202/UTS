'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilmontir')
        .get(jsonku.tampilsemuamontir);  

    app.route('/tampilsparepart')
        .get(jsonku.tampilsemuasparepart); 
        
    app.route('/tampilsparepart/:id')
        .get(jsonku.tampilberdasarkanid);
        
    app.route('/tampilmontir/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/tambahmontir')
        .post(jsonku.tambahmontir);

    app.route('/tambahsparepart')
        .post(jsonku.tambahsparepart);

    app.route('/tambahuser')
        .post(jsonku.tambahuser);

    app.route('/tambahlevel')
        .post(jsonku.tambahlevel);

    app.route('/tambahservis')
        .post(jsonku.tambahservis);

    app.route('/ubahmontir')
        .put(jsonku.ubahmontir);

    app.route('/ubahsparepart')
        .put(jsonku.ubahsparepart);

    app.route('/ubahuser')
        .put(jsonku.ubahuser);

    app.route('/ubahlevel')
        .put(jsonku.ubahlevel);

    app.route('/ubahservis')
        .put(jsonku.ubahservis);

    app.route('/hapusmontir')
        .delete(jsonku.hapusmontir);

    app.route('/hapussparepart')
        .delete(jsonku.hapussparepart);







}
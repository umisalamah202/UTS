'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi Rest Api ku berjalan!",res)
};
//menampilkan semua data montir
exports.tampilsemuamontir = function(req,res){
    connection.query('SELECT * FROM t_montir', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows,res)
        }

    });  
};



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
//menampilkan semua data sparepart     
exports.tampilsemuasparepart = function(req,res){
    connection.query('SELECT * FROM t_sparepart', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows,res)
        }

    });  
};
//menampilkan semua data sparepart berdasarkan id
exports.tampilberdasarkanid = function (req,res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?',[id],
         function(error, rows, fileds){
             if(error){
                 console.log(error);
             }else {
                 response.ok(rows, res);
             }
         });
};

//menampilkan semua data montir berdasarkan id
exports.tampilberdasarkanid = function (req,res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_montir WHERE id_montir = ?',[id],
         function(error, rows, fileds){
             if(error){
                 console.log(error);
             }else {
                 response.ok(rows, res);
             }
         });
};

//menampilkan data montir
exports.tambahmontir = function (req,res) {
    var nama_montir = req.body.nama_montir;
    var harga =req.body.harga;
    
    connection.query('INSERT INTO t_montir (nama_montir,harga) VaLUES(?,?)',
    [nama_montir,harga],
    function (error, rows, fileds) {
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data!",res)
        }
    });
};




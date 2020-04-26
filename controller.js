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

//menampilkan data tambah  montir
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
//menampilkan data tambah sparepart
exports.tambahsparepart = function (req,res) {
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart =req.body.harga_sparepart;
    var satuan =req.body.satuan;
    
    connection.query('INSERT INTO t_sparepart (nama_sparepart,harga_sparepart,satuan) VaLUES(?,?,?)',
    [nama_sparepart,harga_sparepart,satuan],
    function (error, rows, fileds) {
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data sparepart!",res)
        }
    });
};
//menampilkan data tambah user
exports.tambahuser = function (req,res) {
    var username =req.body.username;
    var email =req.body.email;
    var password =req.body.password;
    var role =req.body.role;
    var tanggal_daftar =req.body.tanggal_daftar;
    
    connection.query('INSERT INTO t_user (username,email,password,role,tanggal_daftar) VaLUES(?,?,?,?,?)',
    [username,email,password,role,tanggal_daftar],
    function (error, rows, fileds) {
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data user!",res)
        }
    });
};

//mengubah data montir berdasarkan id
exports.ubahmontir = function(req,res) {
    var id_montir= req.body.id_montir;
    var nama_montir= req.body.nama_montir;
    var harga =req.body.harga;
    

    connection.query('UPDATE t_montir SET nama_montir=?, harga=? WHERE id_montir=?',[nama_montir,harga,id_montir],
        function(error, rows, fileds){
            if(error){
                console.log(error);
            }else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}




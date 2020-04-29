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

//menampilkan data tambah level
exports.tambahlevel = function (req,res) {
    var nama_level =req.body.nama_level;
    var role =req.body.role;

    connection.query('INSERT INTO t_level (nama_level,role) VaLUES(?,?)',
    [nama_level,role],
    function (error, rows, fileds) {
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data level!",res)
        }
    });
};

//menampilkan data tambah servis
exports.tambahservis = function (req,res) {
    var tgl_servis =req.body.tgl_servis;
    var id_user =req.body.id_user;
    var id_montir =req.body.id_montir;
    var jumlah_sparepart =req.body.jumlah_sparepart;
    var id_sparepart =req.body.id_sparepart;
    var jam_servis =req.body.jam_servis;
    var total_servis =req.body.total_servis;
    
    connection.query('INSERT INTO t_servis (tgl_servis,id_user,id_montir,jumlah_sparepart,id_sparepart,jam_servis,total_servis) VaLUES(?,?,?,?,?,?,?)',
    [tgl_servis,id_user,id_montir,jumlah_sparepart,id_sparepart,jam_servis,total_servis],
    function (error, rows, fileds) {
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data servis!",res)
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
                response.ok("Berhasil ubah Data ", res)
            }
        });
}
//mengubah data sparepart berdasarkan id
exports.ubahsparepart = function(req,res) {
    var id_sparepart= req.body.id_sparepart;
    var nama_sparepart= req.body.nama_sparepart;
    var harga_sparepart= req.body.harga_sparepart;
    var satuan =req.body.satuan;
    

    connection.query('UPDATE t_sparepart SET nama_sparepart=?, harga_sparepart=?, satuan=? WHERE id_sparepart=?',[nama_sparepart,harga_sparepart,satuan,id_sparepart],
        function(error, rows, fileds){
            if(error){
                console.log(error);
            }else {
                response.ok("Berhasil ubah Data sparepart ", res)
            }
        });
}

//mengubah data user berdasarkan id
exports.ubahuser = function(req,res) {
    var id_user= req.body.id_user;
    var username= req.body.username;
    var email= req.body.email;
    var password =req.body.password;
    var role= req.body.role;
    var tanggal_daftar =req.body.tanggal_daftar;
    
    connection.query('UPDATE t_user SET username=?, email=?, password=? role=?, tanggal_daftar=? WHERE id_user=?',[username,email,password,role,tanggal_daftar,id_user],
        function(error, rows, fileds){
            if(error){
                console.log(error);
            }else {
                response.ok("Berhasil ubah Data user ", res)
            }
        });
}

//mengubah data level berdasarkan id
exports.ubahlevel = function(req,res) {
    var id_level= req.body.id_level;
    var nama_level= req.body.nama_level;
    var role =req.body.role;
    

    connection.query('UPDATE t_level SET nama_level=?, role=? WHERE id_level=?',[nama_level,role,id_level],
        function(error, rows, fileds){
            if(error){
                console.log(error);
            }else {
                response.ok("Berhasil ubah Data level ", res)
            }
        });
}

//mengubah data servis berdasarkan id
exports.ubahservis = function(req,res) {
    var id_servis= req.body.id_servis;
    var tgl_servis= req.body.tgl_servis;
    var id_user =req.body.id_user;
    var id_montir= req.body.id_montir;
    var jumlah_sparepart= req.body.jumlah_sparepart;
    var id_sparepart =req.body.id_sparepart;
    var jam_servis= req.body.jam_servis;
    var total_servis =req.body.total_servis;

    connection.query('UPDATE t_servis SET tgl_servis=?, id_user=?, id_montir=?, jumlah_sparepart=?, id_sparepart=?, jam_servis=?, total_servis WHERE id_servis=?',[tgl_servis,id_user,id_montir,jumlah_sparepart,id_sparepart,jam_servis,total_servis,id_servis],
        function(error, rows, fileds){
            if(error){
                console.log(error);
            }else {
                response.ok("Berhasil ubah Data servis ", res)
            }
        });
}

//Menghapus data montir berdasarkan id
exports.hapusmontir = function (req, res){
    var id_montir = req.body.id_montir;
    connection.query('DELETE FROM t_montir WHERE id_montir=?', [id_montir], 
    function(error, rows, fields){
            if (error) {
                console.log(error);
            }else {
                response.ok("Berhasil hapus data montir", res)
            }
        }); 
}
//Menghapus data sparepart berdasarkan id
exports.hapussparepart = function (req, res){
    var id_sparepart = req.body.id_sparepart;
    connection.query('DELETE FROM t_sparepart WHERE id_sparepart=?', [id_sparepart], 
    function(error, rows, fields){
            if (error) {
                console.log(error);
            }else {
                response.ok("Berhasil hapus data sparepart", res)
            }
        }); 
}

//Menghapus data user berdasarkan id
exports.hapususer = function (req, res){
    var id_user = req.body.id_user;
    connection.query('DELETE FROM t_user WHERE id_user=?', [id_user], 
    function(error, rows, fields){
            if (error) {
                console.log(error);
            }else {
                response.ok("Berhasil hapus data user", res)
            }
        }); 
}

//Menghapus data level berdasarkan id
exports.hapuslevel = function (req, res){
    var id_level = req.body.id_level;
    connection.query('DELETE FROM t_montir WHERE id_montir=?', [id_montir], 
    function(error, rows, fields){
            if (error) {
                console.log(error);
            }else {
                response.ok("Berhasil hapus data montir", res)
            }
        }); 
}


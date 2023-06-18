var mysql= require('mysql');
var conn=mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"mohan",
    database:"AMMA"
});

conn.connect(function(err){
    if(err) throw err;
    console.log("connected to mySql");
    var sql= "INSERT INTO WORKERLIST2( id,name,disgnation) VALUES ('2','katari','developer')";
    conn.query(sql,function(err,result){
        if(err) throw err;
        console.log("table created");
    });
});

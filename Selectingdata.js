// const {MongoClient} = require("mongodb");
// const url = 'mongodb://127.0.0.1:27017/';

// const databasename = 'Students' // Data base Name

// const client = new MongoClient(url);

// client.connect().then((client)=>{
//     const database= client.db(databasename);
//     const collection = database.collection("students");
//     // collection.find({})
//     collection.deleteMany({"sName": "nagendra"})
//     .toArray().then((result)=> console.log(result))
// }).catch(err => console.log(err))

const {MongoClient} = require("mongodb");
const url = 'mongodb://127.0.0.1:27017/';
const databasename = "Students"; // Database name 

const client = new MongoClient(url);

client.connect().then((client) => {
    const database = client.db(databasename);
    const collection = database.collection("students");
    collection.deleteOne({"sName": ""});
    // collection.deleteMany({"course":"Angular"});
    console.log("Deleted Successfully");
    
}).catch(err => console.log(err))


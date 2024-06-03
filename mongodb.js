const { response } = require("express"); 
const { MongoClient } = require("mongodb"); // Modern concepte nowdays
// const MongoClient = require('mongodb').MongoClient;

const database = "E-comm";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function DBcollection() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("products");
}

module.exports = DBcollection;
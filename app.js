const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./blog.db");
const url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0dfa7c6878a84539b0d725cc2cf54f9b";

//get data
async function getData(url){
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    let headlines = data.headlines;
    let keys = Object.keys(headlines[0]).join(",")
    console.log(keys)
    return [headlines, keys]
}
getData(url, 1)

//create table
async function createTable(db, url) {
   
}

//insert rows
async function insertRows(db, url) {
    
}

//log table
async function logTable(db) {
    
}
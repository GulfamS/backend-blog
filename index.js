const express = require("express")
const app = express()
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const path = require('path')
const { json } = require("body-parser")
const port = 5000

const dbPath = path.join(__dirname, "blog.db")

const initializeDbServer = async()=>{
    try{
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database,
        })
        app.listen(3000, () =>{
            console.log(`Server is Running at http://localhost:${port}`)
        })
    }
    catch(e){
        console.log(`DB Error: ${e.message}`)
        process.exit(1)
    }
}

initializeDbServer()

let options = {
  method: "GET",
}

fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0dfa7c6878a84539b0d725cc2cf54f9b", options)
.then(function(response){
  return response.json()
})
.then(function(jsonData){
  console.log(jsonData)
})

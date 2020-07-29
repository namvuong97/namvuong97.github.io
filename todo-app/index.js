// console.log('hello nodejs');
const express = require("express")
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient
const app = express()
let db
MongoClient.connect("mongodb://localhost:27017", (err, client)=>{
	if (err) {
		return console.log(err)
	}
	db = client.db("todo")
	console.log('đã kết nối database')
})



let quotes = ['Code HTML', 'Style CSS', 'Đẩy code lên github']
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs")


app.get("/", function(req, res) {
	res.render('index.ejs')
})

app.get("/todoabout",function(req, res) {
	res.send("<h1>this is abot  function</h1>")
})
app.get("/todo",function(req, res){
	let todoList = db.collection("newtodo").find().toArray().then(result =>{
		console.log(result)
	}).catch(error =>{
		consolog.error(error)
	})
	// console.log('_dirname')
	
	// res.senFile(_dirname +"index.html")
	// res.render('index.ejs', {result: quotes});
})


app.post("/new-todo",function(req, res) {
	console.log("Đã nhận request",req.body)
	// let newTodo = req.body.title
	// quotes.push(newTodo)
	db.collection("newtodo").insertOne(req.body).then(result =>{
		console.log(result)
	}).catch(error =>{
		console.error(error)
	})
})
	

app.listen(3000, function(){
	console.log('hellonodejs runningon port 3000')

})
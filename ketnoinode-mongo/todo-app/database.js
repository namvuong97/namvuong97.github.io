const {
	createPool
}= require('mysql');

const pool = creatrPool({
	host:"localhost",
	user:"root",
	password:"",
	database:"test",
	connectionLimit: 10
})
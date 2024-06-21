const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
					host:"sql5.freesqldatabase.com",
					user:"sql5715314",
					password:"1TjUg9yI8I",
					database :"sql5715314"
});
	
app.post("/save",(req, res) => {
			let data = [req.body.name, req.body.feedback];
			let sql = "insert into student values(?, ?)";
			con.query(sql, data, (err,result) => {
								if(err)							res.send(err);
								else								res.send(result);
			});
});

app.listen(9000, () => { console.log("ready to serve @ 9000"); });
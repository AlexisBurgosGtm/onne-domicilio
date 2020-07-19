const express = require('express');
const router = express.Router();
const execute = require('./connection');

// LOGIN
router.post("/login", async(req,res)=>{
	
	const {app,pass} = req.body;

	let qry = '';

	qry = `SELECT NOMBRE AS USUARIO, NIVEL FROM USUARIOS WHERE CLAVE='${pass}'`;
		
	execute.Query(res,qry);

});

module.exports = router;
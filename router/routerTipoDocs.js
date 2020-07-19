const execute = require('./connection');
const express = require('express');
const router = express.Router();

// VENTAS BUSCAR PRODUCTO POR DESCRIPCION
router.get("/tipo", async(req,res)=>{
    const {app,empnit,tipo} = req.query;
        
    let qry ='';
    qry = `SELECT CODDOC,CORRELATIVO FROM COMMUNITY_TIPODOCUMENTOS WHERE TOKEN='${empnit}' `     
        
    execute.Query(res,qry);

});

// SELECCIONA LA LISTA DE EMPRESAS
router.get("/empresasdomicilio", async(req,res)=>{
    const {app,empnit,tipo} = req.query;
    
    //EMPMESPROCESO = 1, SON LAS QUE QUE FUNCIONAN CON SERVICIO A DOMICILIO
    let qry ='';
    qry = `SELECT EMPNIT, EMPNOMBRE FROM COMMUNITY_EMPRESAS_SYNC WHERE TOKEN='${empnit}' AND EMPMESPROCESO=1`     
    
    
    execute.Query(res,qry);

});

// VENTAS BUSCAR PRODUCTO POR DESCRIPCION
router.get("/correlativodoc", async(req,res)=>{
    const {app,empnit,tipo,coddoc} = req.query;
        
    let qry ='';

    qry = `SELECT CODDOC,CORRELATIVO FROM COMMUNITY_TIPODOCUMENTOS WHERE TOKEN='${empnit}' AND CODDOC='${coddoc}' `     
        
    execute.Query(res,qry);

});

module.exports = router;

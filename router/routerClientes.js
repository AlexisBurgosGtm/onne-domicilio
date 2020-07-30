const execute = require('./connection');
const express = require('express');
const router = express.Router();

// BUSCA CLIENTE POR NOMBRE
router.get("/buscarcliente", async(req,res)=>{
    const {token,empnit,filtro} = req.query;
        
    let qry ='';
    qry = `SELECT CODCLIENTE AS CODCLIE, NIT, NOMBRECLIENTE AS NOMCLIE, DIRCLIENTE AS DIRCLIE, TELEFONOCLIENTE AS TELEFONO, LATITUDCLIENTE AS LAT, LONGITUDCLIENTE AS LONG FROM COMMUNITY_CLIENTES_DOMICILIO WHERE TOKEN='${token}'AND EMPNIT='${empnit}' AND NOMBRECLIENTE LIKE '%${filtro}%' AND HABILITADO='SI' `  
          
    execute.Query(res,qry);

});

// AGREGA UN NUEVO CLIENTE
router.post("/clientenuevo", async(req,res)=>{
    const {empnit,nit,nombre,direccion,codmun,coddepto,telefono,lat,long,tipoprecio,fechainicio,token} = req.body;
    
    let qry ='';

    qry = `INSERT INTO COMMUNITY_CLIENTES_DOMICILIO (EMPNIT,DPI,NIT,NOMBRECLIENTE,DIRCLIENTE,CODMUNICIPIO,CODDEPARTAMENTO,TELEFONOCLIENTE,EMAILCLIENTE,LATITUDCLIENTE,LONGITUDCLIENTE,CATEGORIA,CIUDADANIA,CODRUTA,FECHAINICIO,HABILITADO,PROVINCIA,TOKEN) 
    VALUES ('${empnit}','SN','${nit}','${nombre}','${direccion}',${codmun},${coddepto},'${telefono}','SN','${lat}','${long}','${tipoprecio}','SN',1,'${fechainicio}','SI','SN','${token}');`
    
    execute.Query(res,qry);

});

//LISTADO DE MUNICIPIOS EN EL SISTEMA
router.get("/municipios", async(req,res)=>{
    const {app,empnit} = req.query;
    let qry ='';

    switch (app) {
        case 'ISC':
            qry = `SELECT CODMUNI AS CODMUNICIPIO, DESMUNI AS DESMUNICIPIO FROM MUNICIPIOS WHERE EMP_NIT='${empnit}' ORDER BY PRIMERO DESC`         
            break;
        case 'COMMUNITY':
            qry = `SELECT CODMUNICIPIO, DESMUNICIPIO FROM MUNICIPIOS`;
            break;
    
        default:
            break;
    };
    execute.Query(res,qry);
});

//LISTADO DE MUNICIPIOS EN EL SISTEMA
router.get("/departamentos", async(req,res)=>{
    const {app,empnit} = req.query;
    let qry ='';

    switch (app) {
        case 'ISC':
            qry = `SELECT CODDEPTO, DESDEPTO FROM DEPARTAMENTOS WHERE EMP_NIT='${empnit}' ORDER BY PRIMERO DESC`         
            break;
        case 'COMMUNITY':
            qry = `SELECT CODDEPARTAMENTO AS CODDEPTO, DESDEPARTAMENTO AS DESDEPTO FROM DEPARTAMENTOS`;
            break;
    
        default:
            break;
    };
    execute.Query(res,qry);
});


module.exports = router;

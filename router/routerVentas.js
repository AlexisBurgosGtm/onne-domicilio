const execute = require('./connection');
const express = require('express');
const router = express.Router();

// VENTANA DE VENTAS
///////////////////////////////////////

// VENTAS BUSCAR PRODUCTO POR DESCRIPCION
router.get("/buscarproducto", async(req,res)=>{
    let empnit = req.query.empnit;
    let filtro = req.query.filtro;
    let sucursal = req.query.sucursal;
    let app = req.query.app;

    let qry ='';

            qry = `SELECT TOP 30 COMMUNITY_PRODUCTOS_SYNC.CODPROD, COMMUNITY_PRODUCTOS_SYNC.DESPROD, COMMUNITY_PRECIOS_SYNC.CODMEDIDA, COMMUNITY_PRECIOS_SYNC.EQUIVALE, COMMUNITY_PRECIOS_SYNC.COSTO, COMMUNITY_PRECIOS_SYNC.PRECIO, COMMUNITY_MARCAS.DESMARCA, COMMUNITY_PRODUCTOS_SYNC.EXENTO
            FROM COMMUNITY_PRODUCTOS_SYNC LEFT OUTER JOIN
            COMMUNITY_PRECIOS_SYNC ON COMMUNITY_PRODUCTOS_SYNC.CODPROD = COMMUNITY_PRECIOS_SYNC.CODPROD AND 
            COMMUNITY_PRODUCTOS_SYNC.EMPNIT = COMMUNITY_PRECIOS_SYNC.EMPNIT LEFT OUTER JOIN
                COMMUNITY_MARCAS ON COMMUNITY_PRODUCTOS_SYNC.CODMARCA = COMMUNITY_MARCAS.CODMARCA AND 
                COMMUNITY_PRODUCTOS_SYNC.EMPNIT = COMMUNITY_MARCAS.EMPNIT
            WHERE (COMMUNITY_PRODUCTOS_SYNC.TOKEN='${empnit}') AND (COMMUNITY_PRODUCTOS_SYNC.EMPNIT = '${sucursal}') AND (COMMUNITY_PRODUCTOS_SYNC.DESPROD LIKE '%${filtro}%') OR (COMMUNITY_PRODUCTOS_SYNC.TOKEN='${empnit}') AND (COMMUNITY_PRODUCTOS_SYNC.EMPNIT = '${sucursal}') AND (COMMUNITY_PRODUCTOS_SYNC.CODPROD = '${filtro}')` 
    
    
    execute.Query(res,qry);

})

// obtiene el total de temp ventas según sea el usuario
router.get("/tempVentastotal", async(req,res)=>{
    let empnit = req.query.empnit;
    let usuario = req.query.usuario;
    let token = req.query.token;
    let app = req.query.app;
    let sucursal = req.query.sucursal;

    let qry = '';

    qry = `SELECT COUNT(CODPROD) AS TOTALITEMS, SUM(TOTALCOSTO) AS TOTALCOSTO, SUM(TOTALPRECIO) AS TOTALPRECIO, SUM(EXENTO) AS TOTALEXENTO
            FROM TEMP_VENTAS
            WHERE (EMPNIT = '${sucursal}') AND (TOKEN = '${empnit}')`
        

    execute.Query(res,qry);
    
});

// obtiene el grid de temp ventas
router.get("/tempVentas", async(req,res)=>{
    let empnit = req.query.empnit;
    let token = req.query.token;
    let coddoc = req.query.coddoc;

    let qry = '';
    qry = `SELECT TEMP_VENTAS.ID,TEMP_VENTAS.CODPROD, TEMP_VENTAS.DESPROD, TEMP_VENTAS.CODMEDIDA, TEMP_VENTAS.CANTIDAD, TEMP_VENTAS.EQUIVALE,TEMP_VENTAS.COSTO, TEMP_VENTAS.PRECIO, TEMP_VENTAS.TOTALCOSTO, TEMP_VENTAS.TOTALPRECIO
           FROM TEMP_VENTAS WHERE (TEMP_VENTAS.EMPNIT = '${empnit}') AND (TEMP_VENTAS.CODDOC='${coddoc}') AND (TEMP_VENTAS.TOKEN = '${token}') `   
    
    execute.Query(res,qry);
    
});

// obtiene row de temp ventas
router.post("/tempVentasRow", async(req,res)=>{
    
    const {id,app} = req.body;

    let qry = '';
    switch (app) {
        case 'ISC':
            qry = `SELECT ID,CODPROD,DESPROD,CODMEDIDA,CANTIDAD,EQUIVALE,COSTO,PRECIO,EXENTO FROM TEMP_VENTAS WHERE ID=${id}`

            break;
    
        case 'COMMUNITY':
            qry = `SELECT ID,CODPROD,DESPROD,CODMEDIDA,CANTIDAD,EQUIVALE,COSTO,PRECIO,EXENTO FROM TEMP_VENTAS WHERE ID=${id}`
            break;
    
        default:
            break;
    }
  
    execute.Query(res,qry);
    
});

// ACTUALIZA el grid de temp ventas
router.put("/tempVentasRow", async(req,res)=>{
    
    const {app,id,totalcosto,totalprecio,cantidad,totalunidades,exento} = req.body;
    
    let qry = '';
    switch (app) {
        case 'ISC':
            qry = `UPDATE TEMP_VENTAS SET CANTIDAD=${cantidad},TOTALCOSTO=${totalcosto},TOTALPRECIO=${totalprecio},TOTALUNIDADES=${totalunidades},EXENTO=${exento} WHERE ID=${id}`

            break;
    
        case 'COMMUNITY':
            qry = `UPDATE TEMP_VENTAS SET CANTIDAD=${cantidad},TOTALCOSTO=${totalcosto},TOTALPRECIO=${totalprecio},TOTALUNIDADES=${totalunidades},EXENTO=${exento} WHERE ID=${id}`
            break;
    
        default:
            break;
    }

    
    
    execute.Query(res,qry);
    
});

// inserta un nuevo registro en temp ventas   
router.post("/tempVentas", async(req,res)=>{
    let empnit = req.body.empnit;
    let usuario = req.body.usuario;
    let token = req.body.token;
    let coddoc = req.body.coddoc;

    let codprod = req.body.codprod;
    let desprod = req.body.desprod;
    let codmedida= req.body.codmedida;
    let cantidad=Number(req.body.cantidad);
    let equivale = Number(req.body.equivale);
    let totalunidades = Number(req.body.totalunidades);
    let costo = Number(req.body.costo);
    let precio=Number(req.body.precio);
    let totalcosto =Number(req.body.totalcosto);
    let totalprecio=Number(req.body.totalprecio);
    let exento=Number(req.body.exento);

    let app = req.body.app;
    let qry = '';

    qry = `INSERT INTO TEMP_VENTAS 
           (    EMPNIT,     CODDOC,    CODPROD,     DESPROD,      CODMEDIDA,    CANTIDAD,   EQUIVALE,  TOTALUNIDADES, COSTO,PRECIO,TOTALCOSTO,TOTALPRECIO,EXENTO,USUARIO,TOKEN) 
    VALUES ('${empnit}','${coddoc}','${codprod}','${desprod}','${codmedida}',${cantidad},${equivale},${totalunidades},${costo},${precio},${totalcosto},${totalprecio},0,'${usuario}','${token}')`
    
    console.log(qry);
    
   execute.Query(res,qry);

});

// elimina un item de la venta
router.delete("/tempVentas", async(req,res)=>{
    let id=Number(req.body.id);
    

      let qry = `DELETE FROM TEMP_VENTAS WHERE ID=${id}`
    
   execute.Query(res,qry);

});

// elimina el grid temporal de la venta 
router.post("/tempVentastodos", async(req,res)=>{
       
    const {empnit,token,coddoc} = req.body;
    
    let qry = `DELETE FROM TEMP_VENTAS WHERE TOKEN='${token}' AND EMPNIT='${empnit}' AND CODDOC='${coddoc}'; `
    
    execute.Query(res,qry);

});

// VENTAS BUSCAR CLIENTE POR NIT O CODIGO
router.get("/buscarcliente", async(req,res)=>{
    
    const {empnit,nit, app} = req.query;
    
    let qry = '';
 
    qry = `SELECT CODCLIENTE,NIT,NOMBRECLIENTE AS NOMCLIENTE, DIRCLIENTE,CATEGORIA FROM CLIENTES WHERE EMPNIT='${empnit}' AND HABILITADO='SI' AND NIT='${nit}'` 
    

    execute.Query(res,qry);

});

// INSERTA EL ENCABEZADO DEL PEDIDO
router.post("/documentos", async (req,res)=>{
    const {token,empnit,anio,mes,coddoc,correlativo,fecha,fechaentrega,formaentrega,nomclie,codbodega,totalcosto,totalprecio,nitclie,dirclie,obs,direntrega,usuario,codven} = req.body;
    
    //let correlativo = Number(req.body.correlativo);
              
    let nuevocorrelativo = Number(correlativo) + 1;


    let qry = ''; // inserta los datos en la tabla documentos
    let qrydoc = ''; // inserta los datos de la tabla docproductos
    let qrycorrelativo =  `UPDATE COMMUNITY_TIPODOCUMENTOS SET CORRELATIVO=${nuevocorrelativo} WHERE CODDOC='${coddoc}' AND TOKEN='${token}'`; //actualiza el correlativo del documento

    qry = `INSERT INTO COMMUNITY_DOCUMENTOS_DOMICILIO 
    (TOKEN,EMPNIT,ANIO,MES,DIA,FECHA,HORA,MINUTO,	CODDOC,CORRELATIVO,CODCLIENTE,DOC_NIT,DOC_NOMCLIE,DOC_DIRCLIE,TOTALCOSTO,TOTALPRECIO,CODEMBARQUE,STATUS,CONCRE,USUARIO,CORTE,SERIEFAC,NOFAC,CODVEN,PAGO,VUELTO,MARCA,OBS, DOC_ABONO, DOC_SALDO,TOTALTARJETA, RECARGOTARJETA,CODREP,TOTALEXENTO,DIRENTREGA,VENCIMIENTO,DIASCREDITO,CODCAJA) 
        VALUES
    ('${token}','${empnit}',${anio},${mes},0,'${fecha}',0,0,'${coddoc}',${correlativo},0,'${nitclie}','${nomclie}','${dirclie}',${totalcosto},${totalprecio},'DOMICILIO','O','CON','${usuario}','NO','${coddoc}','${correlativo}',${codven},${totalprecio},0,'NO','${obs}',${totalprecio},0,0,0,1,0,'${direntrega}','${fecha}',0,1);`

    qrydoc = `INSERT INTO COMMUNITY_DOCPRODUCTOS_DOMICILIO 
    (TOKEN,EMPNIT,ANIO,MES,DIA,CODDOC,CORRELATIVO,CODPROD,DESPROD,CODMEDIDA,CANTIDAD,EQUIVALE,TOTALUNIDADES,COSTO,PRECIO,TOTALCOSTO,TOTALPRECIO,ENTREGADOS_TOTALUNIDADES,
        ENTREGADOS_TOTALCOSTO,ENTREGADOS_TOTALPRECIO,COSTOANTERIOR,COSTOPROMEDIO,CANTIDADBONIF,TOTALBONIF,NOSERIE,EXENTO,OBS) 
    SELECT '${token}' AS TOKEN, EMPNIT,${anio} AS ANIO, ${mes} AS MES,0 AS DIA, '${coddoc}' AS CODDOC,${correlativo} AS CORRELATIVO, CODPROD,DESPROD,CODMEDIDA,CANTIDAD,EQUIVALE,
        TOTALUNIDADES,COSTO,PRECIO,TOTALCOSTO,TOTALPRECIO,TOTALUNIDADES,TOTALCOSTO,TOTALPRECIO,COSTO,COSTO,BONIF,TOTALBONIF,NOSERIE,EXENTO,OBS 
    FROM TEMP_VENTAS WHERE EMPNIT='${empnit}' AND USUARIO='${usuario}' AND CODDOC='${coddoc}';`;
    
    console.log(qrydoc);
    console.log(qrycorrelativo);

    execute.Query(res,qry + qrydoc + qrycorrelativo);
    
});

// DESPACHO - BODEGA
/////////////////////////////////////////////////////

// DESPACHO PEDIDOS PENDIENTES
router.get("/pedidospendientes", async(req,res)=>{
    
    const {empnit, token} = req.query;
    
    let qry = '';
    qry = `SELECT CODDOC, CORRELATIVO, FECHA, DOC_NOMCLIE AS NOMCLIE, DOC_DIRCLIE AS DIRCLIE, OBS, DIRENTREGA, TOTALPRECIO AS IMPORTE FROM COMMUNITY_DOCUMENTOS_DOMICILIO WHERE EMPNIT='${empnit}' AND STATUS='O' AND TOKEN='${token}' ` 
    
    execute.Query(res,qry);

});

// DESPACHO PEDIDO DESPACHADO EN BODEGA
router.post("/pedidodespachado", async(req,res)=>{
    
    const {empnit, coddoc,correlativo, app} = req.body;
    
    let qry = '';

    switch (app) {
        case 'ISC':
            qry = `UPDATE DOCUMENTOS SET DOC_FENTREGA='SI' WHERE EMP_NIT='${empnit}' AND DOC_FENTREGA='NO' AND CODDOC='${coddoc}' AND DOC_NUMERO='${correlativo}'`         
            break;
        case 'COMMUNITY':
            
            qry = `UPDATE DOCUMENTOS SET ST='E' WHERE EMPNIT='${empnit}' AND ST='P' AND CODDOC='${coddoc}' AND CORRELATIVO=${correlativo}` 
            break;
    
        default:
            break;
    }


    execute.Query(res,qry);
});

// DETALLE DEL PEDIDO SELECCIONADO
router.post("/pedidodetalle", async(req,res)=>{
    
    const {empnit, coddoc,correlativo, app, bodega} = req.body;
    
    let qry = '';

    switch (app) {
        case 'ISC':
            //qry = `SELECT CODPROD,DESCRIPCION AS DESPROD, CODMEDIDA, CANTIDAD, CANTIDADINV AS TOTALUNIDADES, TOTALPRECIO FROM DOCPRODUCTOS WHERE EMP_NIT='${empnit}' AND CODDOC='${coddoc}' AND DOC_NUMERO='${correlativo}'`
            qry = `SELECT       Docproductos.CODPROD, Docproductos.DESCRIPCION AS DESPROD, Docproductos.CODMEDIDA, Docproductos.CANTIDAD, Docproductos.CANTIDADINV AS TOTALUNIDADES, Docproductos.TOTALPRECIO
            FROM Docproductos LEFT OUTER JOIN Productos ON Docproductos.EMP_NIT = Productos.EMP_NIT AND Docproductos.CODPROD = Productos.CODPROD
            WHERE (Docproductos.EMP_NIT = '${empnit}') AND (Docproductos.CODDOC = '${coddoc}') AND (Docproductos.DOC_NUMERO = '${correlativo}') AND (Productos.DESPROD3 = '${bodega}'); `         
            break;
        case 'COMMUNITY':
            
            qry = `SELECT CODPROD,DESPROD,CODMEDIDA,CANTIDAD,TOTALUNIDADES,TOTALPRECIO FROM DOCPRODUCTOS WHERE EMPNIT='${empnit}' AND CODDOC='${coddoc}' AND CORRELATIVO=${correlativo}` 
            break;
    
        default:
            break;
    }


    execute.Query(res,qry);
});

    
module.exports = router;
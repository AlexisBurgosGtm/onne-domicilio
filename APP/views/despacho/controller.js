let controllerdespacho = {
    getView: ()=>{
        let view = {
            body: ()=>{
                return `
                <div class="row">
                    <div class="col-12">
                        <div class="card" id="containerTipo">
                            <br>
                            <div class="row">
                                <div class="col-3"></div>
                                <div class="col-6">
                                    <select class="form-control text-center" id="cmbTipoLista">
                                        <option value="PENDIENTES">PEDIDOS PENDIENTES DE DESPACHO</option>
                                        <option value="ENTREGADOS">PEDIDOS DESPACHADOS</option>
                                    </select>    
                                </div>
                                <div class="col-3"></div>
                                
                            </div>
                            <br>
                        </div>
                        <div class="card" id="txtNotif">
                            
                        </div>
                                                                        
                        <div class="card">
                            <div class="table-responsive">
                                <table class="table table-responsive table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <td>Fecha / Documento</td>
                                            <td>Cliente/Observaciones</td>
                                            <td>Importe</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody id="tblOrdenes">

                                    </tbody>
                                </table>
                            </div>
                        
                        </div>
                    </div>
                </div>

                <div class="modal fade " id="ModalDetallePedido" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-lg modal-dialog-right" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <label class="modal-title text-danger h3" id="">Detalle de Pedido</label>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <h1 class="text-info" id="txtCliente">Consumidor Final</h1>
                                    <label class="text-info" id="txtDocumento">ped-01</label>
                                    <h1 class="text-danger text-right"id="txtTotalDocumento">Q100.00</h1>
                                </div>
                                <div class="form-group">
                                    <table class="table table-responsive table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <td>Producto</td>
                                                <td>Medida</td>
                                                <td>Cantidad</td>
                                                <td>Subtotal</td>
                                            </tr>
                                        </thead>
                                        <tbody id="tblPedidoSeleccionado">
                                            
                                        </tbody>
                                    </table>
                                </div>
                                <div class="row">
                                    <div class="col-6" id="btnCancelarContainer">

                                    </div>
                                    <div class="col-6" id="btnAceptarContainer">

                                    </div>
                                    
                                </div>
                        
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
        };

        root.innerHTML = view.body();

    },
    iniciarVistaDespacho: async ()=>{
        controllerdespacho.getView();        
        
        let cmbTipoLista = document.getElementById('cmbTipoLista');
        
        //agrega el listener a la sucursal
        GlobalSelectedSucursal.addEventListener('change',async()=>{
            if(cmbTipoLista.value=='PENDIENTES'){
                
                await controllerdespacho.getListadoOrdenes('tblOrdenes');                
            }else{
                
                await controllerdespacho.getListadoOrdenesDespachadas('tblOrdenes');        
            };
        });

        
        
        cmbTipoLista.addEventListener('change', async ()=>{
            
            if(cmbTipoLista.value=='PENDIENTES'){
                
                await controllerdespacho.getListadoOrdenes('tblOrdenes');                
            }else{
                
                await controllerdespacho.getListadoOrdenesDespachadas('tblOrdenes');        
            };

        })

        // hace la carga inicial de la lista
        await controllerdespacho.getListadoOrdenes('tblOrdenes');        

    },
    getListadoOrdenes: async (idContainer)=>{
        let containerTipo = document.getElementById('containerTipo');
        containerTipo.className = "bg-success";

        let container = document.getElementById(idContainer);
        let str = '';
        let id = 0;
        container.innerHTML = GlobalLoader;

        axios.get('/ventas/pedidospendientes?empnit=' + GlobalSelectedSucursal.value + '&token=' + GlobalToken)
        .then((response) => {
        const data = response.data;       
        data.recordset.map((rows)=>{
            id = id + 1;
            str = str + `<tr id=${id}>
                            <td>
                                ${rows.FECHA.replace('T00:00:00.000Z','')}
                                <br>
                                <small>${rows.CODDOC} - ${rows.CORRELATIVO}</small>
                                <br>
                                <small class="bg-info text-white">${rows.HORA}:${rows.MINUTO}</small>
                            </td>                          
                            <td>${rows.NOMCLIE}
                                <br>
                                    <small><b class="text-danger">Entregar:</b>${rows.DIRENTREGA}</small>
                                <br>
                                    <small><b class="text-danger">Obs:</b>${rows.OBS}</small>
                            </td>
                            <td>${funciones.setMoneda(rows.IMPORTE,'Q')}</td>
                            <td>
                                <button class="btn btn-warning btn-sm btn-circle" onClick="controllerdespacho.fcnDetallePedido('${rows.CODDOC}','${rows.CORRELATIVO}','${rows.NOMCLIE}',${rows.IMPORTE},${id},'cmbBodega');">
                                    +
                                </button>
                            </td>
                            <td>
                                <button class="btn btn-danger btn-sm btn-circle" onClick="controllerdespacho.fcnDespachado('${rows.CODDOC}','${rows.CORRELATIVO}','${rows.NOMCLIE}', '${rows.IMPORTE}',${id})">
                                    +
                                </button>
                            </td>
                        </tr>`        
        })
        
        container.innerHTML = str;
                
        }, (error) => {
            console.log(error);
        });
    },
    getListadoOrdenesDespachadas: async (idContainer)=>{
        let containerTipo = document.getElementById('containerTipo');
        containerTipo.className = "bg-danger";

        let container = document.getElementById(idContainer);
        let str = '';
        let id = 0;
        container.innerHTML = GlobalLoader;

        axios.get('/ventas/pedidosdespachados?empnit=' + GlobalSelectedSucursal.value + '&token=' + GlobalToken)
        .then((response) => {
        const data = response.data;       
        data.recordset.map((rows)=>{
            id = id + 1;
            str = str + `<tr id=${id}>
                            <td>
                                ${rows.FECHA.replace('T00:00:00.000Z','')}
                                <br>
                                <small>${rows.CODDOC} - ${rows.CORRELATIVO}</small>
                                <br>
                                <small class="bg-info text-white">${rows.HORA}:${rows.MINUTO}</small>
                            </td>
                            <td>${rows.NOMCLIE}
                                <br>
                                    <small><b class="text-danger">Entregar:</b>${rows.DIRENTREGA}</small>
                                <br>
                                    <small><b class="text-danger">Obs:</b>${rows.OBS}</small>
                            </td>
                            <td>${funciones.setMoneda(rows.IMPORTE,'Q')}</td>
                            <td>
                                <button class="btn btn-warning btn-sm btn-circle" onClick="controllerdespacho.fcnDetallePedido('${rows.CODDOC}','${rows.CORRELATIVO}','${rows.NOMCLIE}',${rows.IMPORTE},${id},'cmbBodega');">
                                    +
                                </button>
                            </td>
                            <td>
                                <button class="btn btn-danger btn-sm btn-circle" onClick="controllerdespacho.fcnDespachado('${rows.CODDOC}','${rows.CORRELATIVO}','${rows.NOMCLIE}', '${rows.IMPORTE}',${id})">
                                    +
                                </button>
                            </td>
                        </tr>`        
        })
        
        container.innerHTML = str;
                
        }, (error) => {
            console.log(error);
        });
    },
    fcnDespachado: (coddoc,correlativo,cliente,monto,id)=>{
        
        document.getElementById(id).className = "bg-warning";

        funciones.Confirmacion('¿Este pedido ya se ha despachado?')
        .then((value)=>{
            if(value==true){
                axios.post('/ventas/pedidodespachado', {
                    empnit: GlobalSelectedSucursal.value,
                    coddoc:coddoc,
                    correlativo: correlativo,
                    token: GlobalToken
                })
                .then((response) => {
                    const data = response.data;
                    if (data.rowsAffected[0]==0){
                        funciones.AvisoError('No se logró finalizar este pedido');
                        document.getElementById(id).className = "";
                    }else{
                        funciones.Aviso('Pedido finalizado exitosamente !!!')
                        socket.emit('ventas finalizada', cliente,monto);
                        document.getElementById(id).remove();
                        
                    }            
                }, (error) => {
                    console.log(error);
                });
            }else{
                document.getElementById(id).className = "";
            }
        })
    },
    fcnDetallePedido: (coddoc,correlativo,cliente,importe,id, idBodega)=>{
        document.getElementById(id).className = "bg-warning";
        
        $("#ModalDetallePedido").modal('show');
        document.getElementById('txtCliente').innerText = cliente;
        document.getElementById('txtDocumento').innerText = coddoc + '-' + correlativo;
        document.getElementById('txtTotalDocumento').innerText = funciones.setMoneda(importe,'Q ');
        
        let bodega = document.getElementById(idBodega);

        let container = document.getElementById('tblPedidoSeleccionado');
        container.innerHTML = GlobalLoader;

        let str = '';
        let idrow = 0;

        axios.post('/ventas/pedidodetalle', {
            empnit: GlobalSelectedSucursal.value,
            coddoc:coddoc,
            correlativo: correlativo,
            token: GlobalToken
        })
        .then((response) => {
            const data = response.data;
            data.recordset.map((rows)=>{
                idrow = idrow + 1000;
                str = str + `<tr id=${idrow}>
                                <td>${rows.DESPROD}
                                    <br>
                                    <small class="text-danger">${rows.CODPROD}</small>
                                </td>
                                <td>${rows.CODMEDIDA}</td>
                                <td><h1>${rows.CANTIDAD}</h1></td>
                                <td>${funciones.setMoneda(rows.TOTALPRECIO,'Q')}</td>
                                <td>
                                    <button class="btn btn-circle btn-success" onClick="controllerdespacho.fcnCheckItemPedido(${idrow});">
                                        <i class="fal fa-check mr-1"></i>
                                    </button>
                                </td>
                            </tr>`
            })
            container.innerHTML = str;                          
            
            let btnContainer = document.getElementById('btnAceptarContainer');
            btnContainer.innerHTML = '';
            btnContainer.innerHTML = `<button class="btn btn-success btn-lg btn-pills btn-block waves-effect waves-themed"  data-dismiss="modal" 
            onClick="controllerdespacho.fcnDespachado('${coddoc}','${correlativo}','${cliente}', '${importe}',${id})">
                                        <i class="fal fa-check mr-1"></i>
                                        Finalizado !!
                                      </button>`
            let btnCancelarContainer = document.getElementById('btnCancelarContainer');
            btnCancelarContainer.innerHTML = '';
            btnCancelarContainer.innerHTML = `<button class="btn btn-secondary btn-lg btn-pills btn-block waves-effect waves-themed" data-dismiss="modal" 
            onClick='document.getElementById("${id}").className = "";'>
                                                << Regresar
                                             </button>`
        }, (error) => {
            console.log(error);
            container.innerHTML = 'No se pudieron obtener los datos del pedido';
        });


    },
    fcnCheckItemPedido: (idrow)=>{
        let row = document.getElementById(idrow);
        if(row.className == "bg-warning"){
            row.className = "";
        }else{
            row.className = "bg-warning";
        }
    }
}
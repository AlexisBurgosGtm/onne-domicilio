let controllerventa = {
    getView: ()=>{
        let view = {
            encabezadoClienteDoc:()=>{
                //<button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                return `
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div id="panel-2" class="panel col-12">
                            <div class="panel-hdr">
                                <h2>Datos del Cliente</h2>
                                <div class="panel-toolbar">
                                    <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                                    <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                                    
                                </div>
                            </div>
                            <div class="panel-container show">
                                <div class="panel-content">
                                    <div class="">
                                        <div class="input-group">
                                            <input id="txtNit" type="text" ref="txtNit" class="form-control" placeholder="NIT del cliente.." aria-label="" aria-describedby="button-addon4" />
                                            <div class="input-group-prepend">
                                                <button class="btn btn-info waves-effect waves-themed" type="button" id="btnBusquedaClientes">
                                                    <i class="fal fa-search"></i>
                                                </button>
                                                <div class="card"></div>
                                                <button class="btn btn-success waves-effect waves-themed" id="btnNuevoCliente">
                                                    +
                                                </button>
                                            </div>
                                            
                                        </div>
                                        <input class="form-control" id="txtNombre" placeholder="Nombre de cliente..">
                                        <input class="form-control" id="txtDireccion" placeholder="Dirección cliente">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Datos del documento -->
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div id="panel-3" class="panel col-12">
                            <div class="panel-hdr">
                                <h2>Datos del Documento</h2>
                                <div class="panel-toolbar">
                                    <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                                    <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                                    
                                </div>
                            </div>
                            <div class="panel-container show">
                                <div class="panel-content">
                                    <div class="row">
                                        <div class="col-6">
                                            <select class="form-control input-sm" id="cmbCoddoc">
                                            </select>
                                        </div>
                                        <div class="col-6">
                                            <input type="text" class="form-control" value="0" id="txtCorrelativo" readonly="true">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            Fecha: <input type="date" class="form-control bg-subtlelight pl-4 text-sm" id="txtFecha">
                                        </div>
                                        <div class="col-6">
                                            Vendedor:
                                            <select class="form-control" id="cmbVendedor"></select>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                `
            },
            busquedaProductos:()=>{
                return `
                <div class="row">
                    <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <div class="input-group">
                            <input id="txtBusqueda" type="text" ref="txtBusqueda" class="form-control shadow border-info" placeholder="Buscar código o descripción..." aria-label="" aria-describedby="button-addon4" />
                            <div class="input-group-prepend">
                                <button class="btn btn-info waves-effect waves-themed shadow" type="button" id="btnBuscarProducto">
                                    <i class="fal fa-search"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                `
            },
            gridTemp:()=>{
                return `
                <br>
                <div class="row">
                    <div id="panel-2" class="panel col-12">
                        <div class="panel-hdr">
                            <h2 id="txtTotalVenta" class="text-danger"></h2>
                            <div class="panel-toolbar">
                                <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                                <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                                
                            </div>
                        </div>
                        <div class="panel-container show">
                            <div class="panel-content">

                                <div class="table-responsive">
                                    <table class="table table-hover table-striped"><!--mt-5-->
                                        <thead>
                                            <tr>
                                                <th class="border-top-0 table-scale-border-bottom fw-700">Producto</th>
                                                <th class="text-right border-top-0 table-scale-border-bottom fw-700">Medida</th>
                                                <th class="text-center border-top-0 table-scale-border-bottom fw-700">Cant.</th>
                                                <th class="text-right border-top-0 table-scale-border-bottom fw-700">Precio</th>
                                                <th class="text-right border-top-0 table-scale-border-bottom fw-700">Subtotal</th>
                                                <th class="text-center border-top-0 table-scale-border-bottom fw-700"></th>
                                            </tr>
                                        </thead>
                                        <tbody id="tblGridTempVentas"></tbody>
                                    </table>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                </div>
                `
            },
            btnCobrar:()=>{
                return `
                <div id="fixed-btn2">
                    <button class="btn btn-outline-danger btn-lg waves-themed waves-effect" id="btnCobrar">
                            <i class="fal fa-search"></i>
                            COBRAR
                    </button>
                </div>
                `
            },
            modalBusquedaProductos:()=>{
                return `
                <div class="modal fade" id="ModalBusqueda" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-right" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <label class="modal-title text-danger h3" id="">Resultados de la Búsqueda</label>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                                </button>
                            </div>

                            <div class="modal-body">
                            <table class="table table-responsive table-striped table-hover">
                                <thead>
                                    <tr>
                                        <td>Producto</td>
                                        <td>Medida</td>
                                        <td>Precio</td>
                                        <td>Marca</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody id="tblResultadoBusqueda">
                                

                                </tbody>
                            </table>
                            </div>

                        </div>
                    </div>
                </div>
                `
            },
            modalBusquedaCliente:()=>{
                return `
                <div class="modal fade" id="ModalBusquedaCliente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-left" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <label class="modal-title text-danger h3" id="">Búsqueda de Clientes</label>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                                </button>
                            </div>

                            <div class="modal-body">
                                <div class="input-group">
                                        <input id="txtBusquedaCliente" type="text" ref="txtBusquedaCliente" class="form-control" placeholder="Buscar por nombre de cliente..." aria-label="" aria-describedby="button-addon4" />
                                        <div class="input-group-prepend">
                                            <button class="btn btn-info waves-effect waves-themed" type="button" id="btnBuscarCliente">
                                                <i class="fal fa-search"></i>
                                            </button>
                                        </div>
                                </div>
                            <table class="table table-responsive table-striped table-hover">
                                <thead>
                                    <tr>
                                        <td>Nombre</td>
                                        <td>Dirección</td>
                                        <td>Teléfono</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody id="tblResultadoBusquedaCliente">
                                

                                </tbody>
                            </table>
                            </div>

                        
                        </div>
                    </div>
                </div>
                `
            },
            modalNuevoCliente:()=>{
                return `
                <div class="modal fade" id="ModalNuevoCliente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <label class="modal-title text-danger h3" id="">Datos del Cliente</label>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                                </button>
                            </div>
                
                            <div class="modal-body">
                                <div class="col-12" id="formNuevoCliente">
                                    <div class="row">
                                        <div class="form-group col-6">
                                            <label>Código/NIT:</label>
                                            <input type="text" class="form-control" id='txtClienteNit' required='true' readonly="true">
                                        </div>
                                        <div class="form-group col-6">
                                            <label>Teléfono:</label>
                                             <input type="number" class="form-control" id='txtClienteTelefono'>                                       
                                        </div>
                                    </div>                                  

                                    <div class="form-group">
                                        <label>Nombre Cliente:</label>
                                        <input type="text" class="form-control" id='txtClienteNombre' required='true'>
                                    </div>                                                                   

                                    <div class="form-group">
                                        <label>Dirección:</label>
                                        <input type="text" class="form-control" id='txtClienteDireccion' required='true'>
                                    </div>

                                    <!-- municipio y departamento -->
                                    <div class="row">
                                        <div class="form-group col-7">
                                            <label>Municipio:</label>
                                            <select class="form-control" id="cmbClienteMunicipio">
                                                <option value="01">GUATEMALA</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-5">
                                            <label>Departamento:</label>
                                            <select class="form-control" id="cmbClienteDepartamento">
                                                <option value="01">GUATEMALA</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <!-- TIPO PRECIO -->
                                    <div class="form-group col-6">
                                        <label>Tipo de Precio:</label>
                                        <select class="form-control" id="cmbClienteTipoPrecio">
                                            <option value="P">PÚBLICO</option>
                                            <option value="A">MAYORISTA A</option>
                                        </select>
                                    </div>

                                    <div class="form-group table-scale-border-top border-left-0 border-right-0 border-bottom-0 text-right">
                                        <br>
                                        <button class="btn btn-warning btn-round btn-lg" data-dismiss="modal" id="btnCancelarCliente">
                                            <i class="fal fa-cancel"></i>
                                            CANCELAR
                                        </button>
                                        
                                        <button class="btn btn-transparent"></button>

                                        <button class="btn btn-primary btn-round btn-lg" id="btnGuardarCliente">
                                            <i class="fal fa-save"></i>
                                            GUARDAR
                                        </button>
                                            
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
            </div>
                `
            },
            modalCobro:()=>{
                return `
                <div class="modal fade" id="ModalCobro" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <label class="modal-title text-danger h3" id="">Datos del Cobro</label>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                                </button>
                            </div>

                            <div class="modal-body">
                                    <div class="row">
                                            <div class="col-sm-5 ml-sm-auto">
                                                    <div class="form-group">
                                                        <label>Pagado Efectivo:</label>
                                                        <input type="number" class="form-control" id='txtPagadoEfectivo'>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Pagado Tarjeta:</label>
                                                        <input type="number" class="form-control" id='txtPagadoTarjeta' value=0>
                                                    </div>                               
                                                    <div class="form-group table-scale-border-top border-left-0 border-right-0 border-bottom-0">
                                                        <br>
                                                            <label>Total Descuento:</label>
                                                            <input type="number" class="form-control" id='txtDescuento' value=0>
                                                    </div>                               
                                            </div>
                                            <div class="col-sm-6 ml-sm-auto">
                                                <table class="table table-clean">
                                                    <tbody>
                                                        <tr>
                                                            <td class="text-left">
                                                                <strong>TOTAL VENTA</strong>
                                                            </td>
                                                            <td class="text-right h6" id="txtTotalVentaCobro">Q30.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">
                                                                <strong>Descuento</strong>
                                                            </td>
                                                            <td class="text-right" id="txtTotalDescuento">Q0.00</td>
                                                        </tr>
                                                        
                                                        <tr class="table-scale-border-top border-left-0 border-right-0 border-bottom-0">
                                                            <td class="text-left keep-print-font">
                                                                <h4 class="m-0 fw-700 h2 keep-print-font color-primary-700">Total a Pagar</h4>
                                                            </td>
                                                            <td class="text-right keep-print-font">
                                                                <h4 class="m-0 fw-700 h2 keep-print-font" id="txtTotalAPagar">Q27.00</h4>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">
                                                                <strong>Pagado</strong>
                                                            </td>
                                                            <td class="text-right">
                                                                <strong id="txtTotalPagado">Q50.00</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left keep-print-font">
                                                                <h4 class="m-0 fw-700 h2 keep-print-font color-primary-700">Vuelto</h4>
                                                            </td>
                                                            <td class="text-right keep-print-font">
                                                                <h4 class="m-0 fw-700 h2 keep-print-font text-danger" id="txtVuelto">Q23.00</h4>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                            
                            </div>
                        
                        </div>
                    </div>
                </div>
                `
            },
            modalFinalizarPedido:()=>{
                return `
                <div class="modal fade" id="ModalFinalizarPedido" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <label class="modal-title text-danger h3" id="">Detalle de la Entrega</label>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                                </button>
                            </div>
                
                            <div class="modal-body">
                                    <div class="row">
                                            <div class="col-sm-6 ml-sm-auto">
                                                <div class="form-group">
                                                    <label>Recoge en:</label>
                                                    <select class="form-control" id="cmbEntregaTipo">
                                                        <option value="DOMICILIO">ENVIAR A SU DOMICILIO</option>
                                                        <option value="TIENDA">TIENDA</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label>Observaciones</label>
                                                    <textarea maxlength="250" rows="4" cols="80" class="form-control" id="txtEntregaObs" placeholder="Escriba aqui sus observaciones..."></textarea>
                                                </div>                               
                                            </div>

                                            <div class="col-sm-6 ml-sm-auto">
                                                <div class="form-group">
                                                    <label>Fecha Entrega:</label>
                                                    <input type="date" class="form-control" id="txtEntregaFecha">
                                                </div>
                                                <div class="form-group">
                                                    <label>Dirección de Entrega:</label>
                                                    <textarea maxlength="250" rows="4" cols="80" class="form-control" id="txtEntregaDireccion" placeholder="Escriba aqui a dirección de entrega..."></textarea>
                                                </div>                               
                                            </div>
                                    </div>
                                    
                                    <br>

                                    <div class="row">
                                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <button class="btn btn-secondary btn-lg  btn-pills btn-block waves-effect waves-themed" data-dismiss="modal" id="btnEntregaCancelar">
                                                <i class="fal fa-times mr-1"></i>
                                                Cancelar
                                            </button>                                
                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <button class="btn btn-success btn-lg btn-pills btn-block waves-effect waves-themed" id="btnFinalizarPedido">
                                                <i class="fal fa-check mr-1"></i>
                                                Finalizar
                                            </button>
                                        </div>
                                              
                                    </div>
                                    <div class="row">
                                        <div id="containerWaitFinalizar"></div>
                                    </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
        }

        root.innerHTML = view.encabezadoClienteDoc() + view.busquedaProductos() + view.gridTemp() + view.btnCobrar() + view.modalBusquedaProductos() + view.modalBusquedaCliente() + view.modalNuevoCliente() + view.modalCobro() + view.modalFinalizarPedido();
    
    },
    iniciarVistaVentas: async function(){

        controllerventa.getView();
        
        let cmbCoddoc = document.getElementById('cmbCoddoc');

        //await classTipoDocumentos.comboboxTipodoc('PED','cmbCoddoc','txtCorrelativo');
        // carga el combobox de documentos, el correlativo y el grid temp
        classTipoDocumentos.getComboboxTipodoc('PED','cmbCoddoc','txtCorrelativo')
        .then(async()=>{
            await classTipoDocumentos.fcnCorrelativoDocumento('PED',cmbCoddoc.value,'txtCorrelativo');
            await controllerventa.fcnCargarGridTempVentas('tblGridTempVentas');
        })

        let txtFecha = document.getElementById('txtFecha');
        txtFecha.value = funciones.getFecha();

        let txtEntregaFecha = document.getElementById('txtEntregaFecha');
        txtEntregaFecha.value = funciones.getFecha();

        // listener para el nit
        let txtNit = document.getElementById('txtNit');
        txtNit.addEventListener('keydown',(e)=>{
            if(e.code=='Enter'){
                controllerventa.fcnBuscarCliente('txtNit','txtNombre','txtDireccion');    
            }
            if(e.code=='NumpadEnter'){
                controllerventa.fcnBuscarCliente('txtNit','txtNombre','txtDireccion');    
            }
        });

        document.getElementById('btnBuscarCliente').addEventListener('click',()=>{
            //controllerventa.fcnBuscarCliente('txtNit','txtNombre','txtDireccion');    
        });

        document.getElementById('txtBusqueda').addEventListener('keyup',(e)=>{
            if(e.code=='Enter'){
                controllerventa.fcnBusquedaProducto('txtBusqueda','tblResultadoBusqueda');
                
            }
            if(e.code=='NumpadEnter'){
                controllerventa.fcnBusquedaProducto('txtBusqueda','tblResultadoBusqueda');
                
            }
        });
        document.getElementById('btnBuscarProducto').addEventListener('click',()=>{
            controllerventa.fcnBusquedaProducto('txtBusqueda','tblResultadoBusqueda');
            
        });

        let btnCobrar = document.getElementById('btnCobrar');
        btnCobrar.addEventListener('click',()=>{
            
            if(btnCobrar.innerText=='Terminar'){
                    funciones.AvisoError('No puede finalizar un pedido sin productos')
            }else{
                if(txtNit.value==''){
                    funciones.AvisoError('Especifique el cliente a quien se carga la venta');
                }else{
                    document.getElementById('containerWaitFinalizar').innerHTML = ''; 
                    $('#ModalFinalizarPedido').modal('show');   
                }
                    
            }
        
        });

                
        cmbCoddoc.addEventListener('change',async ()=>{
            await classTipoDocumentos.fcnCorrelativoDocumento('PED',cmbCoddoc.value,'txtCorrelativo','txtCorrelativo');
            // carga el grid
            await controllerventa.fcnCargarGridTempVentas('tblGridTempVentas');
        });

        let cmbVendedor = document.getElementById('cmbVendedor');

        let btnFinalizarPedido = document.getElementById('btnFinalizarPedido');
        btnFinalizarPedido.addEventListener('click',async ()=>{
            controllerventa.fcnFinalizarPedido();
        });

        //BUSQUEDA CLIENTES
        let btnGuardarCliente = document.getElementById('btnGuardarCliente');
        btnGuardarCliente.addEventListener('click',()=>{
            funciones.Confirmacion('¿Está seguro que desea guardar este cliente?')
            .then((value)=>{
                if(value==true){
                    controllerventa.fcnGuardarNuevoCliente();
                }
            })
        })

        let btnBusquedaClientes = document.getElementById('btnBusquedaClientes');
        btnBusquedaClientes.addEventListener('click',()=>{
            $('#ModalBusquedaCliente').modal('show');
        });
        
        let txtBusquedaCliente = document.getElementById('txtBusquedaCliente');
        txtBusquedaCliente.addEventListener('keyup',(e)=>{
            if(e.code=='Enter'){
                controllerventa.fcnBusquedaCliente('txtBusquedaCliente','tblResultadoBusquedaCliente');
            }
            if(e.code=='NumpadEnter'){
                controllerventa.fcnBusquedaCliente('txtBusquedaCliente','tblResultadoBusquedaCliente');
            }
        });

        document.getElementById('btnBuscarCliente').addEventListener('click',()=>{
            controllerventa.fcnBusquedaCliente('txtBusquedaCliente','tblResultadoBusquedaCliente');
        });

        document.getElementById('btnNuevoCliente').addEventListener('click',()=>{
            //$('#ModalNuevoCliente').modal('show');
            if(txtNit.value!==''){
                controllerventa.fcnBuscarCliente('txtNit','txtNombre','txtDireccion');
            }else{
                funciones.AvisoError('Escriba el NIT o código de cliente para comprobar');
            };
            
        });

        GlobalSelectedSucursal.addEventListener('change',async ()=>{
            try {
                await controllerventa.fcnCargarGridTempVentas('tblGridTempVentas');
            } catch (error) {
                
            }
        })

        
        // EVENTOS DE LOS BOTONES
        document.body.addEventListener('keyup',(e)=>{
            if(GlobalSelectedForm=='VENTAS'){
                switch (e.keyCode) {
                    case 118: //f7
                        btnCobrar.click();
                        break;
                    case 113: //f2
                        btnBusquedaClientes.click();
                        //createNotification('hola mundo');
                    default:
                        break;
                }    
            }
        });

        await classEmpleados.comboboxVendedores('cmbVendedor');
                        
        controllerventa.fcnGetMunicipios('cmbClienteMunicipio');
        controllerventa.fcnGetDepartamentos('cmbClienteDepartamento');

    },
    fcnBusquedaProducto: async function(idFiltro,idTablaResultado){
        
        if(GlobalSelectedSucursal.value=='SN'){
            funciones.AvisoError('Debe seleccionar una sucursal')
            return;
        }else{
            let filtro = document.getElementById(idFiltro).value;
            let tabla = document.getElementById(idTablaResultado);
            tabla.innerHTML = GlobalLoader;
            
            let strClass = '';
    
            let str = ""; 
            axios.get('/ventas/buscarproducto?empnit=' + GlobalSelectedSucursal.value + '&filtro=' + filtro + '&app=' + GlobalSistema + '&token=' + GlobalToken)
            .then((response) => {
                const data = response.data;        
                data.recordset.map((rows)=>{
                    
                    if(Number(rows.SALDO)>0){
                        strClass ='';
                    }else{
                        strClass ='bg-danger text-white';
                    };

                    let totalexento = 0;
                    if (rows.EXENTO==1){totalexento=Number(rows.PRECIO)}
                    str += `<tr id="${rows.CODPROD}">
                    <td>
                        ${funciones.quitarCaracteres(rows.DESPROD,'"'," pulg",true)}
                        <br>
                        <small class="text-danger"><b>${rows.CODPROD}</b></small>
                    </td>
                    <td>${rows.CODMEDIDA}<br>
                        <small>${rows.EQUIVALE} item</small>
                        <br>
                        <small class="text-success">Exist: ${rows.SALDO}</small>
                    </td>
                    <td>${funciones.setMoneda(rows.PRECIO || 0,'Q ')}</td>
                    <td>${rows.DESMARCA}</td>
                    <td>
                        <button class="btn btn-sm btn-success btn-circle text-white" 
                        onclick="controllerventa.fcnAgregarProductoVenta('${rows.CODPROD}','${funciones.quitarCaracteres(rows.DESPROD,'"'," plg",true)}','${rows.CODMEDIDA}',1,${rows.EQUIVALE},${rows.EQUIVALE},${rows.COSTO},${rows.PRECIO},${totalexento});">
                            +
                        </button>
                    <td>
                </tr>`
                })
                tabla.innerHTML= str;
                
            }, (error) => {
                console.log(error);
            });

            $('#ModalBusqueda').modal('show');

        }
        
        

    },
    fcnAgregarProductoVenta: async function(codprod,desprod,codmedida,cantidad,equivale,totalunidades,costo,precio,exento){
        document.getElementById('tblResultadoBusqueda').innerHTML = '';
        let coddoc = document.getElementById('cmbCoddoc')
            try {        
                
                    var data =JSON.stringify({
                        empnit:GlobalSelectedSucursal.value,
                        coddoc:coddoc.value,
                        token:GlobalToken,
                        codprod:codprod,
                        desprod:desprod,
                        codmedida:codmedida,
                        cantidad:cantidad,
                        equivale:equivale,
                        totalunidades:totalunidades,
                        costo:costo,
                        precio:precio,
                        totalcosto:costo,
                        totalprecio:precio,
                        exento:exento,
                        usuario:GlobalUsuario,
                        app:GlobalSistema
                    });

                    var peticion = new Request('/ventas/tempventas', {
                        method: 'POST',
                        headers: new Headers({
                        'Content-Type': 'application/json'
                        }),
                        body: data
                    });
                
                    await fetch(peticion)
                    
                    .then(async function(res) {
                        console.log('Estado: ', res.status);
                        if (res.status==200)
                        {
                            //socket.emit('productos nuevo', document.getElementById('desprod').value || 'sn');
                            $('#ModalBusqueda').modal('hide')
                            await controllerventa.fcnCargarGridTempVentas('tblGridTempVentas');
                            //await controllerventa.fcnCargarTotal('txtTotalVenta','txtTotalVentaCobro');
                            socket.emit('ventas nueva','Nuevo pedido disponible',GlobalSelectedSucursal.value);
                            let txbusqueda = document.getElementById('txtBusqueda');
                            txbusqueda.value = '';txbusqueda.focus();
                        }
                    })
                    .catch(
                        ()=>{
                            funciones.AvisoError('No se pudo agregar este producto a la venta actual');
                        }
                    )
            
                    } catch (error) {
            
                    }
                    

    },
    fcnBuscarCliente: async(idNit,idNombre,idDireccion)=>{
        
        let btn = document.getElementById('btnNuevoCliente');
        btn.innerHTML = GlobalLoader;

        let nit = document.getElementById(idNit);
        let nombre = document.getElementById(idNombre);
        let direccion = document.getElementById(idDireccion);

        axios.get('/ventas/buscarcliente?empnit=' + GlobalEmpnit + '&nit=' + nit.value  + '&token=' + GlobalToken)
        .then((response) => {
            const data = response.data;
            
            if (data.rowsAffected[0]==0){
                funciones.GetDataNit(idNit,txtClienteNombre,txtClienteDireccion)
                //funciones.GetDataNit(idNit,idNombre,idDireccion)
                .then((json)=>{
                    console.log('resulta de json: ' + json);
                    if(json.resultado==true){
                        document.getElementById('txtClienteNit').value = nit.value;
                        document.getElementById('txtClienteNombre').value = json.descripcion;
                        document.getElementById('txtClienteDireccion').value = json.direcciones.direccion;

                        document.getElementById('txtNombre').value = json.descripcion;
                        document.getElementById('txtDireccion').value = json.direcciones.direccion;
                        
                        $('#ModalNuevoCliente').modal('show');
                    }else{
                        document.getElementById('txtClienteNit').value = nit.value;
                        document.getElementById('txtNombre').value = '';
                        document.getElementById('txtDireccion').value = '';
                        $('#ModalNuevoCliente').modal('show');
                    };
                    btn.innerHTML = '+';

                })
                .catch(()=>{
                    $('#ModalNuevoCliente').modal('show');
                    document.getElementById('txtClienteNit').value = nit.value;
                    document.getElementById('txtNombre').value = '';
                    document.getElementById('txtDireccion').value = '';
                    
                    btn.innerHTML = '+';
                    
                    document.getElementById('txtClienteNombre').focus();
                    
                })
            }else{
                data.recordset.map((rows)=>{
                    nombre.value = rows.NOMCLIENTE;
                    direccion.value = rows.DIRCLIENTE;
                });
                btn.innerHTML = '+';
            }
                    
        }, (error) => {
            console.log(error);
            btn.innerHTML = '+';
        });
    },
    fcnBusquedaCliente: async function(idFiltro,idTablaResultado){
        
        let filtro = document.getElementById(idFiltro).value;
        let tabla = document.getElementById(idTablaResultado);
        tabla.innerHTML = GlobalLoader;


        let str = ""; 
        axios.get('/clientes/buscarcliente?empnit=' + GlobalEmpnit + '&filtro=' + filtro + '&token=' + GlobalToken)
        .then((response) => {
            const data = response.data;        
            data.recordset.map((rows)=>{
                str += `<tr id="${rows.CODCLIE}">
                            <td>
                                ${rows.NOMCLIE}
                                <br>
                                <small>Código: ${rows.CODCLIE} / Nit: ${rows.NIT}</small>
                            </td>
                            <td>${rows.DIRCLIE}</td>
                            <td>
                                <a href='https://api.whatsapp.com/send?phone=502${rows.TELEFONO}&text=FARMACIA%20SALUD%20Y%20AHORRO%3A%20' target="_blank">
                                    ${rows.TELEFONO}
                                </a>
                            </td>
                            
                            <td>
                                <button class="btn btn-sm btn-success btn-circle text-white" 
                                onclick="controllerventa.fcnAgregarClienteVenta('${rows.CODCLIE}','${rows.NIT}','${rows.NOMCLIE}','${rows.DIRCLIE}')">
                                    +
                                </button>
                            <td>
                        </tr>`
            })
            tabla.innerHTML= str;
            
        }, (error) => {
            console.log(error);
        });

    },
    fcnAgregarClienteVenta: async function(codigo,nit,nombre,direccion){
        document.getElementById('tblResultadoBusquedaCliente').innerHTML = '';
        document.getElementById('txtNit').value = nit;
        document.getElementById('txtNombre').value = nombre;
        document.getElementById('txtDireccion').value = direccion;
        $('#ModalBusquedaCliente').modal('hide');  
    },
    fcnGuardarNuevoCliente: async ()=>{
               
        
        // OBTIENE LA LATITUD Y LONGITUD DEL CLIENTE
        let lat = ''; let long = '';
        try {navigator.geolocation.getCurrentPosition(function (location) {lat = location.coords.latitude.toString();long = location.coords.longitude.toString(); })
        } catch (error) {lat = '0'; long = '0'; };
        
        let nit = document.getElementById('txtClienteNit');
        let nombre = document.getElementById('txtClienteNombre');
        let direccion = document.getElementById('txtClienteDireccion');
        let codmun = document.getElementById('cmbClienteMunicipio');
        let coddepto = document.getElementById('cmbClienteDepartamento');
        let telefono = document.getElementById('txtClienteTelefono');
        let tipoprecio = document.getElementById('cmbClienteTipoPrecio');
        
        // FECHA DE CREACION DEL CLIENTE
        let f = funciones.getFecha();

        axios.post('/clientes/clientenuevo', {
            token:GlobalToken,
            empnit:GlobalEmpnit,
            nit:nit.value,
            nombre:nombre.value,
            direccion:direccion.value,
            codmun:codmun.value,
            coddepto:coddepto.value,
            telefono:telefono.value,
            lat:lat,
            long:long,
            tipoprecio:tipoprecio.value,
            fechainicio:f
        })
        .then((response) => {
            const data = response.data;
            if (data.rowsAffected[0]==0){
                funciones.AvisoError('No se logró Guardar el nuevo cliente');
            }else{
                funciones.Aviso('Nuevo Cliente Agregado Exitosamente !!')
                
                document.getElementById('txtNombre').value = nombre.value;
                document.getElementById('txtDireccion').value = direccion.value;

                document.getElementById('btnCancelarCliente').click();
                
                nombre.value = '';
                direccion.value ='';
                telefono.value = '';

            }
        }, (error) => {
            funciones.AvisoError('No se logró Guardar el nuevo cliente');
            console.log(error);
        });


    },
    fcnEliminarItem: async function(id){
        
        try {        
                var data =JSON.stringify({
                    id:id
                });

                var peticion = new Request('/ventas/tempventas', {
                    method: 'DELETE',
                    headers: new Headers({
                    'Content-Type': 'application/json'
                    }),
                    body: data
                });
            
                await fetch(peticion)
                
                .then(async function(res) {
                    console.log('Estado: ', res.status);
                    if (res.status==200)
                    {
                        console.log(id.toString());
                        document.getElementById(id.toString()).remove();
                        //await fcnCargarGridTempVentas('tblGridTempVentas');
                        await controllerventa.fcnCargarTotal('txtTotalVenta','txtTotalVentaCobro');
                    }
                })
                .catch(
                    ()=>{
                        funciones.AvisoError('No se pudo remover este producto a la venta actual');
                    }
                )
        
            } catch (error) {

            }
    },
    fcnCargarGridTempVentas: async function(idContenedor){
        let tabla = document.getElementById(idContenedor);
        let lbtotalv = document.getElementById('txtTotalVenta'); 
        let varTotalVenta =0; let varTotalCosto=0;
        let coddoc = document.getElementById('cmbCoddoc').value

        GlobalTotalCostoDocumento
        let btnCobrarTotal = document.getElementById('btnCobrar')
        btnCobrarTotal.innerText =  'Terminar'

        tabla.innerHTML = GlobalLoader;

        try {
            
            const response = await fetch('/ventas/tempventas?empnit=' + GlobalSelectedSucursal.value + '&usuario=' + GlobalUsuario +  '&token=' + GlobalToken + '&coddoc=' + coddoc)
            const json = await response.json();
            let idcant = 0;
            let data = json.recordset.map((rows)=>{
                varTotalVenta = varTotalVenta + Number(rows.TOTALPRECIO);
                varTotalCosto = varTotalCosto + Number(rows.TOTALCOSTO);

                idcant = idcant + 1;
                return `<tr id="${rows.ID.toString()}">
                            <td class="text-left">
                                ${rows.DESPROD}
                                <br>
                                <small class="text-danger"><b>${rows.CODPROD}</b></small>
                            </td>
                            <td class="text-right">${rows.CODMEDIDA}<br>
                                <small>${rows.EQUIVALE} item</small></td>
                            <td class="text-center">
                                
                                <button class="btn btn-info btn-xs btn-icon rounded-circle" onClick="controllerventa.fcnAumentarCantidad(${idcant},'${'S'+idcant}',${rows.PRECIO},${rows.ID}, ${rows.EQUIVALE}, ${rows.COSTO});">
                                    +
                                </button>

                                <b class="text-danger h4" id=${idcant}>${rows.CANTIDAD}</b>

                                
                            </td>
                            <td class="text-right">${funciones.setMoneda(rows.PRECIO,'Q')}</td>
                            <td class="text-right" id=${'S' +idcant}>${funciones.setMoneda(rows.TOTALPRECIO,'Q')}</td>
                            <td>
                                <button class="btn btn-sm btn-danger btn-circle text-white" onclick="controllerventa.fcnEliminarItem(${rows.ID});">
                                    x
                                </button>
                            <td>
                        </tr>`
        }).join('\n');
        
        tabla.innerHTML = data;
        lbtotalv.innerText =funciones.setMoneda(varTotalVenta,'Q');
        GlobalTotalCostoDocumento = Number(varTotalCosto);
        GlobalTotalDocumento = Number(varTotalVenta);
                
        btnCobrarTotal.innerHTML = '<h1>Terminar : ' + varTotalVenta + '</h1>';
        } catch (error) {
            console.log('NO SE LOGRO CARGAR LA LISTA ' + error);
            lbtotalv.innerText ='--';
            btnCobrarTotal.innerHTML = 'COBRAR';
            GlobalTotalCostoDocumento = 0;
            GlobalTotalDocumento = 0;
        }
    },
    fcnAumentarCantidad: function (idCantidad, idSubtotal, precio, id, equivale, costo){

        funciones.getCantidad()
        .then((cant)=>{
            controllerventa.fcnUpdateCantidad(id,cant,equivale,costo,precio);
        })
        .catch(()=>{
            funciones.AvisoError('Cantidad inválida');
        })

        return;

        let cantidad = document.getElementById(idCantidad);
        let cant = document.getElementById(idCantidad).innerText;
        
            let n = Number(cant) + 1;cantidad.innerText = n;
            document.getElementById(idSubtotal).innerText = funciones.setMoneda(n * Number(precio),'Q');

            controllerventa.fcnUpdateTempRow(id,n);
        
    },
    fcnDisminuirCantidad: function (idCantidad, idSubtotal, precio,id){
        let cantidad = document.getElementById(idCantidad);
        let cant = document.getElementById(idCantidad).innerText;
        
            let n = Number(cant) - 1; cantidad.innerText = n;
            document.getElementById(idSubtotal).innerText = funciones.setMoneda(n * Number(precio),'Q');
            controllerventa.fcnUpdateTempRow(id,n);
    },
    fcnCargarTotal: async function (idContenedor,idContenedor2){

        let container = document.getElementById(idContenedor);
        let container2 = document.getElementById(idContenedor2);
        
        let btnCobrarTotal = document.getElementById('btnCobrar')
        //btnCobrarTotal.innerText =  'Cobrar : Q 0.00'
        btnCobrarTotal.innerText =  'Terminar'

        container.innerHTML = '0'
        container2.innerHTML = '0'
        let coddoc = document.getElementById('cmbCoddoc').value;

        try {
            
            const response = await fetch('/ventas/tempventastotal?empnit=' + GlobalSelectedSucursal.value + '&usuario=' + GlobalUsuario  + '&token=' + GlobalToken + '&coddoc=' + coddoc)
            const json = await response.json();
        
            let data = json.recordset.map((rows)=>{
                GlobalTotalDocumento = Number(rows.TOTALPRECIO);
                GlobalTotalCostoDocumento = Number(rows.TOTALCOSTO);
                return `${funciones.setMoneda(rows.TOTALPRECIO,'Q ')}`
        }).join('\n');
        
        container.innerText = data;
        container2.innerText = data;
        btnCobrarTotal.innerHTML = '<h1>Terminar : ' + data + '</h1>';
        //btnCobrarTotal.innerHTML = '<h1>Cobrar : ' + data + '</h1>';
        } catch (error) {
            //console.log('NO SE LOGRO CARGAR LA LISTA ' + error);

        }

        if(container.innerHTML=='0'){
        }else{
            socket.emit('ordenes escribiendo', 'Se está generando una nueva orden',GlobalSelectedForm)
        }
    },
    fcnFinalizarPedido: async()=>{
        
        let containerWaitFinalizar = document.getElementById('containerWaitFinalizar');
        

        let ClienteNombre = document.getElementById('txtNombre').value;
        let dirclie = document.getElementById('txtDireccion').value; // CAMPO DIR_ENTREGA
        let obs = document.getElementById('txtEntregaObs').value; 
        let direntrega = document.getElementById('txtEntregaDireccion').value; //CAMPO MATSOLI
        let codbodega = GlobalCodBodega;
        let cmbTipoEntrega = document.getElementById('cmbEntregaTipo').value; //campo TRANSPORTE

        let txtFecha = new Date(document.getElementById('txtFecha').value);
        let anio = txtFecha.getFullYear();
        let mes = txtFecha.getUTCMonth()+1;
        let d = txtFecha.getUTCDate() 
        let fecha = anio + '-' + mes + '-' + d; // CAMPO DOC_FECHA

        let fe = new Date(document.getElementById('txtEntregaFecha').value);
        let ae = fe.getFullYear();
        let me = fe.getUTCMonth()+1;
        let de = fe.getUTCDate() 
        let fechaentrega = ae + '-' + me + '-' + de;  // CAMPO DOC_FECHAENT

        //obtiene hora y minutos
        let hm = new Date();
        let hora = hm.getHours();
        let minuto = hm.getMinutes();

        let coddoc = document.getElementById('cmbCoddoc').value;
        let correlativo = document.getElementById('txtCorrelativo').value;

        let cmbVendedor = document.getElementById('cmbVendedor');

        let nit = document.getElementById('txtNit').value;

        funciones.Confirmacion('¿Está seguro que desea Finalizar este Pedido')
        .then((value)=>{
            if(value==true){
                
                containerWaitFinalizar.innerHTML = GlobalLoader;
                //,,obs,usuario,codven
                axios.post('/ventas/documentos', {
                    token: GlobalEmpnit,
                    empnit: GlobalSelectedSucursal.value,
                    coddoc:coddoc,
                    correlativo: correlativo,
                    anio:anio,
                    mes:mes,
                    fecha:fecha,
                    hora:hora,
                    minuto:minuto,
                    fechaentrega:fechaentrega,
                    formaentrega:cmbTipoEntrega,
                    codbodega:codbodega,
                    nomclie:ClienteNombre,
                    totalcosto:GlobalTotalCostoDocumento,
                    totalprecio:GlobalTotalDocumento,
                    nitclie:nit,
                    dirclie:dirclie,
                    obs:obs,
                    direntrega:direntrega,
                    usuario:GlobalUsuario,
                    codven:cmbVendedor.value
                })
                .then(async(response) => {
                    containerWaitFinalizar.innerHTML = '';
                    const data = response.data;
                    if (data.rowsAffected[0]==0){
                        funciones.AvisoError('No se logró Guardar este pedido');
                    }else{

                        funciones.Aviso('Pedido Generado Exitosamente !!!')
                        document.getElementById('btnEntregaCancelar').click();
            
                        socket.emit('ventas nueva',`Nueva Orden a nombre de ${ClienteNombre} por valor de ${GlobalTotalDocumento} quetzales`, GlobalSelectedSucursal.value);

                        controllerventa.fcnEliminarTempVentas(GlobalUsuario);
                        controllerventa.fcnNuevoPedido();
                    }
                }, (error) => {
                    containerWaitFinalizar.innerHTML = `<div class="bg-red text-white">${error}</div>`;
                    console.log(error);
                });           
                
            }
        })
    },
    fcnEliminarTempVentas: async(usuario)=>{
        let cmbCoddoc = document.getElementById('cmbCoddoc');

        axios.post('/ventas/tempVentastodos', {
            empnit: GlobalSelectedSucursal.value,
            token:GlobalToken,
            coddoc: cmbCoddoc.value
        })
        .then((response) => {
            const data = response.data;
            if (data.rowsAffected[0]==0){
                funciones.AvisoError('No se logró Eliminar la lista de productos agregados');
            }else{
                
            }
        }, (error) => {
            console.log(error);
        });
    },
    fcnNuevoPedido:async()=>{
        
        console.log('cargando nuevo pedido');

        document.getElementById('txtNit').value ='CF';
        document.getElementById('txtNombre').value = 'CONSUMIDOR FINAL';
        document.getElementById('txtDireccion').value = 'CIUDAD';
        document.getElementById('txtEntregaObs').value = 'SN';
        document.getElementById('txtEntregaDireccion').value = 'SN';

        await classTipoDocumentos.fcnCorrelativoDocumento('PED',cmbCoddoc.value,'txtCorrelativo');
        //await controllerventa.fcnCargarTotal('txtTotalVenta','txtTotalVentaCobro');
        await controllerventa.fcnCargarGridTempVentas('tblGridTempVentas');

        
    },
    fcnUpdateTempRow: async(id,cantidad)=>{
        
        let costo = 0; let precio = 0; let equivale = 0; let exento = 0;
        
        axios.post('/ventas/tempVentasRow', {
            id:id,
            token: GlobalToken
        })
        .then((response) => {
            const data = response.data;
            
            data.recordset.map((rows)=>{
                costo = rows.COSTO;
                precio = rows.PRECIO;
                equivale = rows.EQUIVALE;
                exento = rows.EXENTO;
            })
            let totalcosto = Number(costo) * Number(cantidad);
            let totalprecio = Number(precio) * Number(cantidad);
            let totalexento = Number(exento) * Number(cantidad);
            let totalunidades = Number(equivale) * Number(cantidad);
                axios.put('/ventas/tempVentasRow', {
                    token: GlobalToken,
                    id:id,
                    totalcosto:totalcosto,
                    totalprecio:totalprecio,
                    cantidad:cantidad,
                    totalunidades: totalunidades,
                    exento:totalexento
                })
                .then(async(re) => {
                    const data2 = re.data;
                    if (data2.rowsAffected[0]==0){
                        funciones.AvisoError('No se logró Eliminar la lista de productos agregados');
                    }else{
                        await controllerventa.fcnCargarTotal('txtTotalVenta','txtTotalVentaCobro');
                        console.log('Row actualizada exitosamente')
                    }
                }, (error) => {
                    console.log(error);
                });  
        }, (error) => {
            console.log(error);
        });  

        
    },
    fcnUpdateCantidad: async(id,cantidad,equivale,costo,precio)=>{
        let cant =Number(cantidad);
        let totalunidades = cant * Number(equivale);
        let totalcosto = cant * Number(costo);
        let totalprecio = cant * Number(precio);
        
        console.log(totalcosto);
        console.log(totalprecio);

                axios.put('/ventas/tempVentasRow', {
                    token : GlobalToken,
                    id : id,
                    totalcosto : totalcosto,
                    totalprecio : totalprecio,
                    cantidad : cant,
                    totalunidades : totalunidades,
                    exento : 0
                })
                .then(async(re) => {
                    const data2 = re.data;
                    if (data2.rowsAffected[0]==0){
                        funciones.AvisoError('No se logró actualizar');
                    }else{
                        //await controllerventa.fcnCargarTotal('txtTotalVenta','txtTotalVentaCobro');                       
                        await controllerventa.fcnCargarGridTempVentas('tblGridTempVentas');
                    }
                }, (error) => {
                    console.log(error);
                });  
                
    },
    fcnGetMunicipios: async(idContainer)=>{
        let container = document.getElementById(idContainer);
        container.innerHTML = `<option value="2">GUATEMALA</option>`

        
    },
    fcnGetDepartamentos: async(idContainer)=>{
        let container = document.getElementById(idContainer);
        container.innerHTML = `<option value="2">GUATEMALA</option>
                                <option value="7">ESCUINTLA</option>`;

       
    }
}
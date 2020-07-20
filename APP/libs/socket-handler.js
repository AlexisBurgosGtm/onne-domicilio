const socket = io();

socket.on('ventas nueva', function(msg,sucursal){
    
    if(GlobalSelectedForm=='DESPACHO'){
        if(GlobalSelectedSucursal.value==sucursal){
            funciones.NotificacionPersistent("Nuevo Pedido",msg);
        }
    }
    
});

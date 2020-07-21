function InicializarVista(){

    document.getElementById('txtNomEmpresa').innerText = GlobalEmpNombre;
    
    let btnInicioVentas = document.getElementById('btnInicioVentas');
    let btnInicioDespacho = document.getElementById('btnInicioDespacho');
    //let btnInicioCaja =  document.getElementById('btnInicioCaja');
    let txtPass = document.getElementById('txtPass');
    

    btnInicioVentas.addEventListener('click',()=>{
        //$('#ModalLogin').modal('show');
        GlobalSelectedForm = 'VENTAS';
        classNavegar.ventas();
      
    });
    btnInicioDespacho.addEventListener('click',()=>{
        //$('#ModalLogin').modal('show');
        GlobalSelectedForm = 'DESPACHO';
        classNavegar.despacho();
       
    });

    /* 
    btnInicioCaja.addEventListener('click',()=>{
        $('#ModalLogin').modal('show');
        GlobalSelectedApp = 'CAJA';
      
    });
    */

    let imgInicioVentas = document.getElementById('imgInicioVentas');
    let imgInicioDespacho = document.getElementById('imgInicioDespacho');
    //let imgInicioCaja =  document.getElementById('imgInicioCaja');

    imgInicioVentas.addEventListener('click',()=>{
        
        GlobalSelectedApp = 'VENTAS';
        classNavegar.ventas();
        
        //$('#ModalLogin').modal('show');
      
    });
    imgInicioDespacho.addEventListener('click',()=>{
        //$('#ModalLogin').modal('show');
        GlobalSelectedApp = 'DESPACHO';
        classNavegar.despacho();
    });
    /* 
    imgInicioCaja.addEventListener('click',()=>{
        $('#ModalLogin').modal('show');
        GlobalSelectedApp = 'CAJA';
      
    });
    */


    let btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener('click',async ()=>{
        await getLogin(txtPass.value,GlobalSelectedApp);
    });

    txtPass.addEventListener('keyup',(e)=>{
        if(e.code=='Enter'){
            btnLogin.click();
        }
        if(e.code=='NumpadEnter'){
            btnLogin.click();
        }
    });

};


async function getLogin(pass,app){
    axios.post('/usuarios/login', {
        pass: pass,
        app: GlobalSistema
    })
    .then((response) => {
        const data = response.data;
        data.recordset.map((rows)=>{
            if(data.rowsAffected[0]==1){
                GlobalUsuario = rows.USUARIO;
                GlobalNivelUser = Number(rows.NIVEL);
                $('#ModalLogin').modal('hide');
                funciones.Aviso('Bienvenido/a ' + GlobalUsuario);
                switch (app) {
                    case 'VENTAS':
                        
                        classNavegar.ventas();    
                        break;
                    case 'DESPACHO':
                        classNavegar.despacho();    
                        break;
                    case 'CAJA':
                        classNavegar.caja();    
                        break;
                    default:
                        classNavegar.inicio();
                        break;
                }
                
            }else{
                funciones.AvisoError('Contraseña incorrecta')    
            }
        })
 
    }, (error) => {
        console.log(error);
    });

};

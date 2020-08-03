function InicializarVista(){

    document.getElementById('txtNomEmpresa').innerText = GlobalEmpNombre;
    
    let btnInicioVentas = document.getElementById('btnInicioVentas');
    let btnInicioDespacho = document.getElementById('btnInicioDespacho');
   

    btnInicioVentas.addEventListener('click',()=>{
        if(GlobalLogged=='SI'){
            GlobalSelectedForm = 'VENTAS';
            classNavegar.ventas();
        }else{
            $('#ModalLogin').modal('show');
        }
    });

    btnInicioDespacho.addEventListener('click',()=>{
        if(GlobalLogged=='SI'){
            GlobalSelectedForm = 'DESPACHO';
            classNavegar.despacho();
        }else{
            $('#ModalLogin').modal('show');
        }
    });


    let imgInicioVentas = document.getElementById('imgInicioVentas');
    let imgInicioDespacho = document.getElementById('imgInicioDespacho');

    imgInicioVentas.addEventListener('click',()=>{
        if(GlobalLogged=='SI'){
            GlobalSelectedForm = 'VENTAS';
            classNavegar.ventas();
        }else{
            $('#ModalLogin').modal('show');
        }
      
    });

    imgInicioDespacho.addEventListener('click',()=>{
        if(GlobalLogged=='SI'){
            GlobalSelectedForm = 'DESPACHO';
            classNavegar.despacho();
        }else{
            $('#ModalLogin').modal('show');
        }
    });
    

    let txtUser = document.getElementById('txtUser');
    let txtPass = document.getElementById('txtPass');
    let btnLogin = document.getElementById('btnLogin');

    //Valores temporales
    txtUser.value = 'domicilio';
    txtPass.value= '123';

    btnLogin.addEventListener('click',async ()=>{
        await getLogin(txtUser.value,txtPass.value);
    });

    txtUser.addEventListener('keyup',(e)=>{
        if(e.code=='Enter'){
            txtPass.focus();
        }
        if(e.code=='NumpadEnter'){
            txtPass.focus();
        }
    });

    txtPass.addEventListener('keyup',(e)=>{
        if(e.code=='Enter'){
            btnLogin.click();
        }
        if(e.code=='NumpadEnter'){
            btnLogin.click();
        }
    });

    $('#ModalLogin').modal('show');

};


async function getLogin(user,pass){
    GlobalLogged ='SI';
    $('#ModalLogin').modal('hide');
    funciones.Aviso('Bienvenido, ahora puede ingresar a cualquier sección de las disponibles')
    return;

    axios.post('/usuarios/login', {
        user:user,
        pass:pass
    })
    .then((response) => {
        const data = response.data;
        data.recordset.map((rows)=>{
            if(data.rowsAffected[0]==1){
                GlobalUsuario = rows.USUARIO;
                GlobalNivelUser = Number(rows.NIVEL);
                $('#ModalLogin').modal('hide');
                funciones.Aviso('Bienvenido/a ' + GlobalUsuario);
                
            }else{
                funciones.AvisoError('Contraseña incorrecta')    
            }
        })
 
    }, (error) => {
        console.log(error);
    });

};

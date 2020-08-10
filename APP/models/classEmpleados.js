let classEmpleados = {
    comboboxVendedores : async(idContainer)=>{
        let combobox = document.getElementById(idContainer);
        combobox.innerHTML = `
            <option value="1">AGENTE 1</option>
            <option value="2">AGENTE 2</option>
            <option value="3">AGENTE 3</option>
        `

        /* 
        let str = ""; 
        axios.get('/empleados/vendedores?empnit=' + GlobalEmpnit + '&app=' + GlobalSistema)
        .then((response) => {
            const data = response.data;        
            data.recordset.map((rows)=>{
                str += `<option value="${rows.CODVEN}">${rows.NOMVEN}</option>`
            })            
            combobox.innerHTML = str;
            
        }, (error) => {
            //str = ''
        });
        */
        
    },
    getNombreVendedor: (codven)=>{
        let nombre = '';
        switch (codven) {
            case 1:
                nombre = "AGENTE 1";
                break;
            case 2:
                nombre = "AGENTE 2";
                break;
            case 3:
                nombre = "AGENTE 3";
                break;
            default:
                nombre = "AGENTE 1";
                break;
        };
        console.log(codven);
        console.log(nombre);
        return nombre.toString();
        
    }

}
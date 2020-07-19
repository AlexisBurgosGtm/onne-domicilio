let classTipoDocumentos = {
    comboboxTipodoc : async(tipo,idContainer,idContainerCorrelativo)=>{
        
        let combobox = document.getElementById(idContainer);
        let correlativo = document.getElementById(idContainerCorrelativo);
        let n = 0;

        let str = ""; 
        axios.get('/tipodocumentos/tipo?empnit=' + GlobalEmpnit + '&tipo=' + tipo + '&app=' + GlobalSistema)
        .then((response) => {
            const data = response.data;        
            data.recordset.map((rows)=>{
                str += `<option value="${rows.CODDOC}">${rows.CODDOC}</option>`
                n = rows.CORRELATIVO;
            })            
            combobox.innerHTML = str;
            correlativo.value = n;
        }, (error) => {
            str = ''
            combobox.innerHTML = '';
            correlativo.value = 0;
        });
        
    },
    fcnCorrelativoDocumento: async(tipodoc,coddoc,idContainerCorrelativo)=>{
        
        let correlativo = document.getElementById(idContainerCorrelativo);
    
        axios.get('/tipodocumentos/correlativodoc?empnit=' + GlobalEmpnit + '&tipo=' + tipodoc + '&coddoc=' + coddoc  + '&app=' + GlobalSistema)
        .then((response) => {
            const data = response.data;        
            data.recordset.map((rows)=>{
                correlativo.value = `${rows.CORRELATIVO}`
            })            
        }, (error) => {
            correlativo.value = 0;
            console.log(error);
        });
    },
    getEmpresas: async (idContainer)=>{
        return new Promise((resolve,reject)=>{

            let container = document.getElementById(idContainer);

            container.innerHTML = GlobalLoader;
            let str ="<option value='SN'>Seleccione Sucursal</option>";
            axios.get('/tipodocumentos/empresasdomicilio?empnit=' + GlobalEmpnit + '&app=' + GlobalSistema)
            .then((response) => {
            const data = response.data;       
            data.recordset.map((rows)=>{
                str = str + `<option value='${rows.EMPNIT}'>${rows.EMPNOMBRE}</option>`        
            })
                container.innerHTML = str;
                resolve();        
            }, (error) => {
                reject();
            });

        })

    }

}
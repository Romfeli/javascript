function ValidarDni(NumeroDni,LetraDni) {

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H',
'L', 'C', 'K', 'E', 'T']
    var NumeroDni = document.getElementById("NumeroDni").value
    var LetraDni = document.getElementById("LetraDni").value
    
    if (NumeroDni < 0 || NumeroDni > 99999999 ) {
        alert("dni invalido")
        
    }else if (true){
      var NumeroLetra = NumeroDni % 23
      alert(NumeroLetra)
    }

    if(true){
        var DniValido = letras[NumeroLetra]
       
            alert(DniValido)
            if (LetraDni === DniValido ) {
                alert("dni valido")
                
            }else{
                alert("letra del dni invalido")
            }
           
}
        
}
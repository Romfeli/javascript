
// se inicializa un array con todos los meses del año para luego ser iterados
var meses = ["Enero","Febrero","marzo","Abril","Mayo","Junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
//se crea una variable vacia para con la iteracion asignar valores con saltos de lines
var text = ""
//se crea una iteracion donde x es pasa por todos lo elementos del array
for (let x in meses) {
    // se agrega a la variable de texto en cada iteracion valida un elemento[0] segun tando indices tenga concatenados con saltos de linea
       text += meses[x] + "<br>";
       // usa la variable con su indice meses[x]
       // alert(meses[x])
    }
    //insertados codigo de js a la caja contenedora en el html con saltos de linea para mostrarlo en pantalla
document.getElementById("meses").innerHTML = text + "<br>"

//se crea una variable vacia para con la iteracion asignar valores con saltos de lines

let text1 = "";
for (let x of meses) {
    text1 += x + '<br>';
  //insertados codigo de js a la caja contenedora en el html con saltos de linea para mostrarlo en pantalla
    //document.getElementById("meses2").innerHTML = text + "<br>"
    //usamos el alert para mostrar de forma emergente uno por uno usando x mientras que en el for_in se usa la variable con su indice meses[x]
    alert(x)
    
}



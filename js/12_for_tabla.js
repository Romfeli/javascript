function crearInputs() {
    //creamos una variable donde recuperamos el numero del html
    numInputs=Number(document.getElementById("cantidadNumeros").value)
    //inicializamos una variable con una cadena de texto vacia para crear los inputs de forma dinamica
    var text = ""
    //iteramos el numero de ingresado para de esa manera crear la cantidad de inputs necesaria
    for (let i = 0; i < numInputs; i++) {
        //le adicionamos a la variable vacia en cada iteracion un input donde (i+1) incrementa el texto y el id correspondiente
        text += "num"+(i+1)+':<input type="number" id="num'+(i+1)+'"><br>'; 
    }
    //hacemos la imprecion en el html agregandole el texto con un boton dinamico creado con js en el html
	document.getElementById('inputs').innerHTML=text+'<button onclick="calcularMayor()">Calcular Mayor</button>';
}
// creamos una funcion donde se calcula el numero mayor ingresado en los inputs
function calcularMayor() {
    //creamos una variable donde recuperamos el numero del html
    numInputs=Number(document.getElementById("cantidadNumeros").value)
    //creamos una variable con una lista vacia
    var tabla = []
// Este bucle recorre un conjunto de elementos numerados desde 0 hasta numInputs.
    for ( i = 0; i < numInputs; i++) {
            // Obtiene el valor numérico del elemento de entrada con el id "numX", donde X es (i+1).
        tabla[i] = Number(document.getElementById("num"+(i+1)).value)
        
    }
    // Inicializa una variable numMayor con el primer valor del arreglo tabla.
    var numMayor = tabla[0]
    // Este bucle recorre el arreglo tabla a partir del segundo elemento (índice 1).
    for(i=1;i<tabla.length;i++){
            // Imprime en la consola el índice actual y el valor actual de numMayor.
        console.log(i+":",numMayor);
        // Compara el valor actual del arreglo tabla con el valor almacenado en numMayor.
        // Si el valor actual es mayor, actualiza el valor de numMayor.
        if(numMayor < tabla[i]){
            numMayor = tabla[i]
        }
        
    }
    document.getElementById("resultado").innerHTML = "El número mayor es "+numMayor;
}
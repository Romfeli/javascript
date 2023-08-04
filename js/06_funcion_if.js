function CalcularPrecio(NumeroDeEntradas,PrecioDeEntrada) {
    //creo una variable donde el input del html me proporciuona en valor de la variable usando .value al final de getElementById
    var NumeroDeEntradas = document.getElementById("NumeroDeEntradas").value
    var PrecioDeEntrada = document.getElementById("PrecioDeEntrada").value
    //creo las variables con los distintos descuentos
    var descuento_2_entradas = 0.10
    var descuento_3_entradas = 0.30
    var descuento_5_entradas = 0.50
     // condiciono la variable de numero de entradas para que se aplique un descuente dependiente del numero de entradas 
    if (NumeroDeEntradas >= 5){
        PrecioDeEntrada = PrecioDeEntrada - (PrecioDeEntrada * descuento_5_entradas)
    }else if (NumeroDeEntradas >= 3){
        PrecioDeEntrada = PrecioDeEntrada - (PrecioDeEntrada * descuento_3_entradas)
    }else if (NumeroDeEntradas >= 2){
        PrecioDeEntrada = PrecioDeEntrada - (PrecioDeEntrada * descuento_2_entradas)
    } else if(NumeroDeEntradas=1){
        PrecioDeEntrada = PrecioDeEntrada
    }

    alert("El precio unitario de tus entradas es de = " + PrecioDeEntrada + "\n" + "El precio total de tus " + NumeroDeEntradas + " entradas es de = "  +(PrecioDeEntrada * NumeroDeEntradas))

    document.getElementById("resultado").innerHTML = "El precio unitario de tus entradas es de = " + PrecioDeEntrada + " <br> " + "El precio total de tus " + NumeroDeEntradas + "entradas es de = " + (PrecioDeEntrada * NumeroDeEntradas)
}   
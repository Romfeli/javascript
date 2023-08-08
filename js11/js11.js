function crearInputs() {
	numInputs=Number(document.getElementById("cantidadNumeros").value);
	var text="";
	for (i=0;i<numInputs;i++) {
		text += "Num"+(i+1)+': <input type="number" id="num'+(i+1)+'"><br>';
	}
	document.getElementById('inputs').innerHTML=text+'<button onclick="calcularMayor()">Calcular Mayor</button>';
}
function calcularMayor() {
	numInputs=Number(document.getElementById("cantidadNumeros").value);	
	var tabla=[];
	for (i=0;i<numInputs;i++) {
		tabla[i]=Number(document.getElementById("num"+(i+1)).value);		
	}

	//tabla[0]=Number(document.getElementById("num1").value);
	//tabla[1]=Number(document.getElementById("num2").value);
	//tabla[2]=Number(document.getElementById("num3").value);
	//tabla[3]=Number(document.getElementById("num4").value);
	var numMayor=tabla[0];
	for(i=1; i < tabla.length;i++){
		console.log(i+":",numMayor);
		if (numMayor < tabla[i]) {
			numMayor = tabla[i];
		}
	}
	document.getElementById("resultado").innerHTML = "El número mayor es "+numMayor;
}
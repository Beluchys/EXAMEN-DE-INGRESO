/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:

el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
*/
function mostrar()
{
	let nombreDelProducto;
	let precio;
	let cantidadDeUnidades;
	let tipo;
	let marca;
	let promedioAlcohol;
	let promedioIac;
	let promedioQuat;
	let contadorAlcohol = 0;
	let contadorIac = 0;
	let contadorQuat = 0;
	let acumuladorAlcohol = 0;
	let acumulardorIac = 0;
	let acumuladorQuat = 0;
	let acumuladorUnidadesIac = 0;
	let acumuladorCantidadCombustible = 0;
	let acumuladorCantidadExplosivo = 0;
	let acumuladorCantidadIgnifugo = 0;
	let mayorCantidadDeUnidades;
	let mayorprecio;
	let flagPrecio = 0;
	let marcaDelMayorPrecio;
	let tipoDelMayorPrecio;


	for(let i =0 ; i<5 ;i++)
	{
		nombreDelProducto = prompt("Ingrese el nombre del producto: 'alcohol', 'iac' o 'quat'");
		while(nombreDelProducto != "alcohol" && nombreDelProducto != "iac" && nombreDelProducto != "quat")
		{
			nombreDelProducto = prompt("ERROR: Ingrese NUEVAMENTE el nombre del producto: 'alcohol', 'iac' o 'quat'");
		}
		precio = prompt("Ingrese el precio: entre $100 y $300");
		precio = parseFloat(precio);
		while(precio < 100 || precio >300 || isNaN(precio))
		{
			precio = prompt("ERROR: Ingrese NUEVAMENTE el precio: entre $100 y $300");
			precio = parseFloat(precio);
		}
		cantidadDeUnidades = prompt("Ingrese la cantidad de unidades: de 1 a 1000");
		cantidadDeUnidades = parseInt(cantidadDeUnidades);
		while(cantidadDeUnidades<1 || cantidadDeUnidades>1000 || isNaN(cantidadDeUnidades))
		{
			cantidadDeUnidades = prompt("ERROR: Ingrese NUEVAMENTE la cantidad de unidades: de 1 a 1000");
			cantidadDeUnidades = parseInt(cantidadDeUnidades);
		}
		tipo = prompt("Ingrese el tipo de producto: 'ignifugo', 'combustible', 'explosivo'");
		while(tipo !="ignifugo" && tipo != "combustible" && tipo != "explosivo")
		{
			tipo = prompt("ERROR: Ingrese NUEVAMENTE el tipo de producto: 'ignifugo', 'combustible', 'explosivo'");	
		}
		marca = prompt("Ingrese la Marca del Producto");
		//a) El promedio de cantidad por tipo de producto
	switch (nombreDelProducto) {
		case "alcohol":
			contadorAlcohol++;
			acumuladorAlcohol = acumuladorAlcohol + cantidadDeUnidades;
			break;
		case "iac":
			contadorIac++;
			acumulardorIac = acumulardorIac + cantidadDeUnidades;
//c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
			if(precio <= 200)
			{
				acumuladorUnidadesIac = acumuladorUnidadesIac + cantidadDeUnidades;
			}
		break;
		case "quat":
			contadorQuat++;
			acumuladorQuat = acumuladorQuat + cantidadDeUnidades;
			break;
		}
//b) El tipo de inflamable con más cantidad de unidades en total de la compra
	switch (tipo) {
		case "combustible":
			acumuladorCantidadCombustible = acumuladorCantidadCombustible + cantidadDeUnidades;
			break;
		case "explosivo":
			acumuladorCantidadExplosivo = acumuladorCantidadExplosivo + cantidadDeUnidades;
			break;
		case "ignífugo":
			acumuladorCantidadIgnifugo = acumuladorCantidadIgnifugo + cantidadDeUnidades;
			break;
		}
//d) la marca y tipo del más caro de los producto
		if (flagPrecio == 0 || mayorprecio < precio)
		{
			mayorprecio = precio;
			marcaDelMayorPrecio = marca;
			tipoDelMayorPrecio = tipo;
			flagPrecio = 1;
		}
	}

	if(acumuladorCantidadCombustible > acumuladorCantidadExplosivo && acumuladorCantidadCombustible > acumuladorCantidadIgnifugo)
	{
		mayorCantidadDeUnidades = "combustible"
	}
	else if (acumuladorCantidadExplosivo > acumuladorCantidadIgnifugo && acumuladorCantidadExplosivo >= acumuladorCantidadCombustible)
	{
		mayorCantidadDeUnidades = "explosivo"
	}
	else
	{
		mayorCantidadDeUnidades = "ignifugo"
	}
//a) El promedio de cantidad por tipo de producto
	promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
	promedioIac = acumulardorIac / contadorIac;
	promedioQuat = acumuladorQuat / contadorQuat;
/*Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/
document.write("El promedio de cantidad del alcohol es: "+ promedioAlcohol+"<br>");
document.write("El tipo de inflamable con más cantidad de unidades es "+mayorCantidadDeUnidades+"<br>");
document.write("Las unidades de IAC con el importe menor a $200 es "+acumuladorUnidadesIac+"<br>");
document.write("La marca del producto más caro es "+marcaDelMayorPrecio+" y el tipo es "+tipoDelMayorPrecio+"<br>");
}

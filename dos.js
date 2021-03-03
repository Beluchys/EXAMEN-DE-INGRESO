/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
- nombre
- Tipo curasada("libre";"presencial";"remota")
- cantidad de materias( mas de cero y menos de 8)
- Sexo ( femenino , masculino , no binario)
- Nota promedio (entre 0 y 10)
- edad (validar)
 */
function mostrar()
{
    let nombre;
    let cursada;
    let cantidadMaterias;
    let sexo;
    let nota;
    let edad;
    let respuesta = true;
    let flagNota = 0;
    let nombreDelMejorPromedio;
    let mejorPromedio;
    let flagEdad = 0;
    let edadDelMasJoven;
    let nombreDelMasJoven;
    let acumuladorNotaFem = 0;
    let acumuladorNotaMas = 0;
    let contadorSexoFem = 0;
    let contadorSexoMas = 0;
    let promedioNotaFem;
    let promedioNotaMas;
    let flagCursada = 0;
    let elQueCursaMasMaterias;
    let edadDelQueCursaMasMaterias;
    let masMaterias;

            do
            {
              nombre = prompt("Ingresar Nombre");
              cursada = prompt("Ingresar tipo de Cursada: 'libre', 'presencial' o 'remota'");
              while(cursada != "libre" && cursada != "presencial" && cursada != "remota")
              {
                cursada = prompt("ERROR: ingrese NUEVAMENTE el tipo de cursada: 'libre', 'presencial' o 'remota'");
              }
              cantidadMaterias = prompt("Ingrese la cantidad de materias: de 1 a 8");
              cantidadMaterias = parseInt(cantidadMaterias);
              while(cantidadMaterias < 1 || cantidadMaterias >8 || isNaN(cantidadMaterias))
              {
                cantidadMaterias = prompt("ERROR: Ingrese NUEVAMENTE la cantidad de materias: de 1 a 8");
                cantidadMaterias = parseInt(cantidadMaterias);
              }
              sexo =  prompt("Ingrese el sexo: 'femenino' o 'masculino'");
              while(sexo != "femenino" && sexo != "masculino")
              {
                sexo =  prompt("ERROR: Ingrese NUEVAMENTE el sexo: femenino o masculino");
              }
              nota = prompt("Ingrese la nota promedio: entre 0 y 10");
              nota = parseInt(nota);
              while(nota < 0 || nota > 10)
              {
                nota = prompt("ERROR: Ingrese NUEVAMENTE la nota promedio: entre 0 y 10");
              }
              edad = prompt("Ingrese la edad");
              edad = parseInt(edad);
              while(edad < 17  || edad > 90 || isNaN(edad))
              {
                edad = prompt("ERROR: Ingrese NUEVAMENTE la edad");
              }
              respuesta=confirm("¿Desea seguir ingresando datos?");
            }while(respuesta);
            //b) El nombre del mas joven de los alumnos entre los que la dan libre
              switch(cursada){
                case "libre":
                  if(flagEdad == 0 || edad < edadDelMasJoven)
                  {
                    edadDelMasJoven = edad;
                    nombreDelMasJoven = nombre;
                    flagEdad = 1;
                  }else{
                    nombreDelMasJoven = "No existe";
                  }
                break;
              }
              switch (sexo) {
                case "femenino":
                  contadorSexoFem++;
                  acumuladorNotaFem = acumuladorNotaFem + nota; //d) El promedio de nota por sexo
                  if(flagNota == 0 || mejorPromedio < nota) // a) El nombre del mejor promedio que no sea masculino
                  {
                    mejorPromedio = nota;
                    nombreDelMejorPromedio = nombre;
                    flagNota = 1;
                  }else{
                    nombreDelMejorPromedio = "No existe";
                  }
                  break;
                case "masculino":
                  contadorSexoMas++;
                  acumuladorNotaMas = acumuladorNotaMas + nota; //d) El promedio de nota por sexo
                break;
              }
              //d) La edad y nombre del que cursa mas materias que no sean en forma remota
              switch (cursada) {
                case "libre":
                case  "presencial":
                  if(flagCursada == 0 || masMaterias < cantidadMaterias)
                  {
                    masMaterias = cantidadMaterias;
                    elQueCursaMasMaterias = nombre;
                    edadDelQueCursaMasMaterias = edad;
                    flagCursada = 1;
                  }else{
                    elQueCursaMasMaterias = "No existe";
                    edadDelQueCursaMasMaterias = "No existe";
                  }
                  break;
              }

            //c) El promedio de nota por sexo
            promedioNotaFem = acumuladorNotaFem / contadorSexoFem;
            promedioNotaMas = acumuladorNotaMas / contadorSexoMas;
            /*se debe informar de existir, o informar que no existe , en el caso que corresponda.
            se debe informar de existir, o informar que no existe , en el caso que corresponda.
            a) El nombre del mejor promedio que no sea masculino
            b) El nombre del mas joven de los alumnos entre los que la dan libre
            d) El promedio de nota por sexo
            f) La edad y nombre del que cursa mas materias que no sean en forma remota.*/
            document.write("El nombre del mejor promedio que no es masculino es: "+nombreDelMejorPromedio+"<br>");
            document.write("El nombre del mas joven de los alumnos entre los que la dan libre es: "+nombreDelMasJoven+"<br>");
            document.write("El promedio de nota por sexo femenino es: "+promedioNotaFem+" y el promedio de notas por sexo masculino es: "+promedioNotaMas+"<br>");
            document.write("El nombre del que cursas más materias (sin contar la forma remota) es: "+elQueCursaMasMaterias+" y su edad es: "+edadDelQueCursaMasMaterias);
}

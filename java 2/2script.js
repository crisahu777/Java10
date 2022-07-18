let diaSemana = prompt("¿Qué día es hoy?");
    
switch (diaSemana) {
        case "lunes":
                alert("Correr 5km.")
                document.write ("Correr 5km. <br><br>");
                break;
        
        case "martes":
                alert("Hoy tenes que ir al gim.")
                document.write ("Hoy tenes que ir al gim. <br><br>");
                break;
        
        case "miercoles":
                alert("Hoy te toca hacer natacion.")
                document.write ("Hoy te toca hacer natacion. <br><br>");
            break;
        
        case "jueves":
                alert("Descanso.")
                document.write ("Descanso. <br><br>");
                break;

        case "viernes":
                alert("Hoy tenes que ir al gim.")
                document.write ("Hoy tenes que ir al gim. <br><br>");
                break;

        case "sábado":
                alert("Correr 5km.")
                document.write ("Correr 5km. <br><br>");
                break;

        case "domingo":
                alert("Descanso")
                document.write ("Descanso. <br><br>");
                break;

    default:
                alert("Escribe el día de la semana en minúsculas y sin acento.");
}

var numero = prompt("Cuantas veces quieres que se repita Hola mundo:")


for( i = 1; i <= numero ; i++){
    document.write("Hola mundo" + numero + "<br>");
}
$(document).ready(() => {
    let timer = setInterval(cambiaColorAutomatic,1000);//Cada cierto tiempo hace algo

    setTimeout(() => { // Pasado cierto tiempo hace algo
        clearInterval(timer);//Termina el proceso setInterval
        cambiaColor("#ff8d00");
    }, 3000)   
    

    function cambiaColor(color){  //declaración de funciones en JavaScript      
        $(".mainButton").css("background-color",color);//Asigna estilo desde JS !no hace override del CSS ni tiene preponderancia del !important
    }

    function cambiaColorAutomatic(){
        let col ="#" + Math.floor(Math.random() * 16777216).toString(16);//obtener un elemento random,lo multiplica por el valor máximo hexadecimal y lo convierte a string
        $(".mainButton").css("background-color",col);
    }
})
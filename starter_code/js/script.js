$(document).ready(() =>{
    $(".mainButton").click(() =>{
        
        cambiaColorAutomatic()
        $( ".mainButton:first" ).clone().appendTo( ".mainRight" )//clonar un nodo(elemento HTML)
    })
    console.log($(".mainButton"))
    function cambiaColorAutomatic(){
        let col ="#" + Math.floor(Math.random() * 16777216).toString(16);//obtener un elemento random,lo multiplica por el valor máximo hexadecimal y lo convierte a string
        $(".mainButton").css("background-color",col);
    }
})

/*CRUD = Añadir, modificar, elminar elementos*/ 
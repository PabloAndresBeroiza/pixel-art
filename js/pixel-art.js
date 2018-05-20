/*
 *
 * https://github.com/PabloAndresBeroiza/pixel-art
 * 
 */
var $nombreColores = ['White', 'LightYellow',
    'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
    'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
    'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
    'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
    'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
    'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
    'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
    'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
    'LightGreen', 'PaleGreen', 'PaleTurquoise',
    'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
    'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
    'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
    'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
    'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
    'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
    'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
    'BlueViolet', 'DarkViolet', 'DarkOrchid',
    'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
    'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
//guardo el elemento con id paleta. Con Jquery
var $elPaleta = $("#paleta");
var $elGrillaPixeles = $("#grilla-pixeles");


/**
 * Genera dinamicamente la paleta de colores
 */
function generarPaletaDeColores() {
    $.each($nombreColores, function (i, color) {
        var $divHijo = $('<div>', {"class": 'color_paleta'}).css({"background-color": color});
        console.log(color+", "+i);
        $elPaleta.append($divHijo);
    });
}

generarPaletaDeColores();

/**
 * funcion que genera la grilla. Inserta un div por cada pixel.
 */
function generaGrilla() {
    for (var i = 0; i <= 1748; i++) {
        $elGrillaPixeles.append($("<div>"));
    }
}
generaGrilla();

/*
 * Al elemento desendiente del la $elPaleta se le agrega un evento cuendo hace
 * click en el color de la paleta. Lo toma y lo muestra en elemento con 
 * id #indicador-de-color y setea en letras el color en el elemento con 
 * id #indicador-de-color-mensaje
 */
$elPaleta.children().click(function () {
    var $color = $(this).css("background-color");
    $("#indicador-de-color").css({"background-color": $color});
    $("#indicador-de-color-mensaje").html($color);
});

/*
 * Al elemento desendiente de $elGrillaPixeles se le agrega un evento cuando se
 * hace click. Guarda en la variable $color el color que esta en el elemnto 
 * con id #indicador-de-color 
 */
$elGrillaPixeles.children().click(function () {
    var $color = $("#indicador-de-color").css("background-color");
    $(this).css({"background-color": $color});    
});  

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
//var colorPersonalizado = document.getElementById('color-personalizado');
var $colorPersonalizado = $("#color-personalizado");

$colorPersonalizado.change(function () {
    // Se guarda el color de la rueda en colorActual
    var $colorActual = $colorPersonalizado.val();
    // Completar para que cambie el indicador-de-color al colorActual
    //Completado
    $("#indicador-de-color").css({"background-color": $colorActual});
});

//Variable que nos dice si esta' apretado el mouse
var $ratonApretado = false;


/*
 * Detecta si esta apretado el mause
 * Detecta cuando deja de apretar el mause
 * Se le coloca evento mousemove para saber cuando esta apretado el mouse a los
 * elementos de la grilla.
 * Se guarda el color del indicador-de-color.
 * Si la variable $ratonApretado es verdadera pinta la celda del color
 * */
$elGrillaPixeles.children()
        .mousedown(function () {
            $ratonApretado = true;
        })
        .mouseup(function () {
            $ratonApretado = false;
        })
        .mousemove(function () {
            var $color = $("#indicador-de-color").css("background-color");
            console.log("Dentro de mousemove - " + $ratonApretado);

            if ($ratonApretado) {
                $(this).css({"background-color": $color});
            }
        });


/*
 * funcion "borra" que deja en blanco lo que esta en la grilla
 */
var $botonBorrar = $("#borrar");
$botonBorrar.click(function(){
    $elGrillaPixeles.children().animate({"background-color": "white"}, 2000, "swing");
});

/*
 * Se cargan los superheroes a la grilla
 */

var $batman = $("#batman");
$batman.click(function(){
    cargarSuperheroe(batman);
});
var $wonder = $("#wonder");
$("#wonder").click(function(){
    cargarSuperheroe(wonder);
});
var $flash = $("#flash");
$("#flash").click(function(){
    cargarSuperheroe(flash);
});
var $invisible = $("#invisible");
$("#invisible").click(function(){
    cargarSuperheroe(invisible);
});

/*
 * Funcion guardar
 */
var $guardar = $("#guardar");
$guardar.click(function () {
    guardarPixelArt();
});


/*
 * Les pongo la propiedad arrastable(draggable) a todos los elementos li que 
 * desienden del ul con id super-heroes
 */
$('#super-heroes li').draggable({helper:'clone'});

/*
 * Le asigno la propiedad soltable (droppable) al elemnto con id grilla-pixeles
 * En este elemento soltamos los superheroes y le asignamos una accion.
 * En este caso carga al superheroe. 
 */
$('#grilla-pixeles div').droppable({
    drop:function(event, ui){
        var elementoSoltado = ui.draggable;
        console.log(elementoSoltado.data('nombre'));
        var $nombre = elementoSoltado.data('nombre');
        // cargarSuperheroe($nombre); //no puedo pasar por parametro la variable
        
        switch ($nombre) {
            case "batman":
                cargarSuperheroe(batman);
                break;
            case "wonder":
                cargarSuperheroe(wonder);
                break;
            case "flash":
                cargarSuperheroe(flash);
                break;
            case "invisible":
                cargarSuperheroe(invisible);
                break;
            default:
                console.log("No es superheroe");
                break;
        }
    }
});
var nombreColores = ['White', 'LightYellow',
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
    nombreColores.forEach(function(color){
        var $color = $('<div>',{"class":'color_paleta'}).css({"background-color": color});
        $elPaleta.append($color);
      });
}

generarPaletaDeColores();

/**
 * funcion que genera la grilla. Inserta un div por cada pixel.
 */
function generaGrilla(){
    for (var i=0; i<=1748; i++){
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
$elPaleta.children().click(function(){
    var $color = $(this).css("background-color");
    $("#indicador-de-color").css({"background-color": $color});
    $("#indicador-de-color-mensaje").html($color);
  }); 



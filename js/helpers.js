function validarCantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        return true;
    }else{
        return false;
    }
}
function validacionAnio(anio){
    const fecha = (new Date().getFullYear()) + 1;
    if(anio >= 1952 && anio <= fecha){
        return true;
    }else{
        return false;
    }
}
function validacionPrecio(precio){
    if(precio > 0 && precio <= 1_000_000){
        return true;
    }else{
        return false;
    }
}
function validarMemoria(numero, min, max){
if(numero >= min && numero <= max){
    return true;
}else{
    return false;
}
}
function validarImagenes(texto){
    const patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|gif)$/
     if(patron.test(texto)){
         return true;
     }else{
         return false;
     }
 }
//  #codigo;
//  #nombre;
//  #descripcion;
//  #imagenUno;
//  #imagenDos;
//  #imagenTres;
//  #imagenCuatro;
//  #imagenCinco;
//  #imagenSeis;
//  #categoria;
//  #precio;
//  #desarrollador;
//  #anio;
//  #plataforma;
//  #sistemaOperativo;
//  #procesadorAmd;
//  #procesadorIntel;
//  #memoria;
//  #tGraficaAmd;
//  #tGraficaNvidia;
export function sumarioValidaciones(nombre, descripcion, imagenUno, imagenDos, imagenTres, imagenCuatro, imagenCinco, imagenSeis, categoria, precio, desarrollador, anio, plataforma, sistemaOperativo, procesadorAmd, procesadorIntel, memoria, tGraficaAmd, tGraficaNvidia){
    let resumen = '';
    if(!validarCantidadCaracteres(nombre,3,70)){
        resumen = 'El titulo debe tener entre 3 y 70 caracteres. <br><br>'
    }
    if(!validarCantidadCaracteres(descripcion,3,1000)){
        resumen += 'La descripción debe tener entre 3 y 70 caracteres. <br><br>'
    }
    if(!validarCantidadCaracteres(desarrollador,3,300)){
        resumen += 'El campo desarrollador debe tener entre 3 y 300 caracteres. <br><br>'
    }
    if(!validacionAnio(anio)){
        resumen += 'El año debe ser entre 1952 y '+ (new Date().getFullYear() + 1) +' <br><br>'
    }
    if(!validacionPrecio(precio)){
        resumen += 'El precio debe estar entre $1 y $1000000. <br><br>'
    }
    if(!validarCantidadCaracteres(categoria,3,300)){
        resumen += 'La categoría debe tener entre 3 y 300 caracteres. <br><br>'
    }
    if(!validarCantidadCaracteres(plataforma, 2, 50)){
        resumen += 'Plataforma debe tener entre 3 y 50 caracteres <br><br>'
    }
    if(!validarImagenes(imagenUno)){
        resumen += 'Debe ingresar una url de imagen 1 valida, con terminacion (.jpg, .png, .gif) <br><br>'
    }
    if(!validarImagenes(imagenDos)){
        resumen += 'Debe ingresar una url de imagen 2 valida, con terminacion (.jpg, .png, .gif) <br><br>'
    }
    if(!validarImagenes(imagenTres)){
        resumen += 'Debe ingresar una url de imagen 3 valida, con terminacion (.jpg, .png, .gif) <br><br>'
    }
    if(!validarImagenes(imagenCuatro)){
        resumen += 'Debe ingresar una url de imagen 4 valida, con terminacion (.jpg, .png, .gif) <br><br>'
    }
    if(!validarImagenes(imagenCinco)){
        resumen += 'Debe ingresar una url de imagen 5 valida, con terminacion (.jpg, .png, .gif) <br><br>'
    }
    if(!validarImagenes(imagenSeis)){
        resumen += 'Debe ingresar una url de imagen 6 valida, con terminacion (.jpg, .png, .gif) <br><br>'
    }
    if(!validarCantidadCaracteres(sistemaOperativo, 2, 100)){
        resumen += 'El sistema operativo debe tener entre 2 y 50 caracteres. <br><br>'
    }
    if(!validarCantidadCaracteres(procesadorAmd, 3, 50)){
        resumen += 'El procesador AMD debe tener entre 3 y 50 caracteres. <br><br>'
    }
    if(!validarCantidadCaracteres(procesadorIntel, 3, 50)){
        resumen += 'El procesador Intel debe tener entre 3 y 50 caracteres. <br><br>'
    }
    if(!validarMemoria(memoria, 1, 128)){
        resumen += 'La memoria Ram debe tener entre 1 y 128gb. <br><br>'
    }
    if(!validarCantidadCaracteres(tGraficaAmd, 3, 100)){
        resumen += 'La tarjeta gráfica Amd debe tener entre 3 y 100 caracteres. <br><br>'
    }
    if(!validarCantidadCaracteres(tGraficaNvidia, 3, 100)){
        resumen += 'la tarjeta gráfica Nvidia debe tener entre 3 y 100 caracteres. <br><br>'
    }
    
    return resumen;
}
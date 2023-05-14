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
function validarImagenes(texto){
    const patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|gif)$/
     if(patron.test(texto)){
         return true;
     }else{
         return false;
     }
 }

export function sumarioValidaciones(nombre, descripcion, imagenUno, imagenDos, imagenTres, imagenCuatro, imagenCinco, imagenSeis, categoria, precio, desarrollador, anio, plataforma){
    let resumen = '';
    if(!validarCantidadCaracteres(nombre,3,70)){
        resumen = 'El titulo debe tener entre 3 y 70 caracteres <br>'
    }
    if(!validarCantidadCaracteres(descripcion,3,1000)){
        resumen += 'La descripción debe tener entre 3 y 70 caracteres <br>'
    }
    if(!validarCantidadCaracteres(desarrollador,3,300)){
        resumen += 'El campo desarrollador debe tener entre 3 y 300 caracteres <br>'
    }
    if(!validacionAnio(anio)){
        resumen += 'El año debe ser entre 1952 y '+ (new Date().getFullYear() + 1) +' <br>'
    }
    if(!validacionPrecio(precio)){
        resumen += 'El precio debe estar entre $1 y $1000000 <br>'
    }
    if(!validarCantidadCaracteres(categoria,3,300)){
        resumen += 'La categoría debe tener entre 3 y 300 caracteres <br>'
    }
    if(!validarCantidadCaracteres(plataforma, 3, 50)){
        resumen += 'Plataforma debe tener entre 3 y 50 caracteres <br>'
    }
    if(!validarImagenes(imagenUno)){
        resumen += 'Debe ingresar una url de imagen valida, con terminacion (.jpg, .png, .gif) <br>'
    }
    if(!validarImagenes(imagenDos)){
        resumen += 'Debe ingresar una url de imagen valida, con terminacion (.jpg, .png, .gif) <br>'
    }
    if(!validarImagenes(imagenTres)){
        resumen += 'Debe ingresar una url de imagen valida, con terminacion (.jpg, .png, .gif) <br>'
    }
    if(!validarImagenes(imagenCuatro)){
        resumen += 'Debe ingresar una url de imagen valida, con terminacion (.jpg, .png, .gif) <br>'
    }
    if(!validarImagenes(imagenCinco)){
        resumen += 'Debe ingresar una url de imagen valida, con terminacion (.jpg, .png, .gif) <br>'
    }
    if(!validarImagenes(imagenSeis)){
        resumen += 'Debe ingresar una url de imagen valida, con terminacion (.jpg, .png, .gif) <br>'
    }
    
    return resumen;
}
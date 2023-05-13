function validarCantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        console.log('aqui el texto tiene la cant. de caracteres correcto');
        return true;
    }else{
        console.log('aqui el texto no cumple la validacion');
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
function validacionResenia(resenia){
    if(resenia >= 1 && resenia <= 10){
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

export function sumarioValidaciones(nombre, descripcion, imagen, precio, categoria, requisitos, desarrollador, anio, resenias){
    let resumen = '';
    if(!validarCantidadCaracteres(nombre,3,70)){
        resumen = 'El titulo debe tener entre 3 y 70 caracteres <br>'
    }
    if(!validarCantidadCaracteres(descripcion,3,1000)){
        resumen += 'La descripción debe tener entre 3 y 70 caracteres <br>'
    }
    if(!validarCantidadCaracteres(requisitos,3,1000)){
        resumen += 'Los requisitos deben tener entre 3 y 1000 caracteres <br>'
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
    if(!validacionResenia(resenias)){
        resumen += 'La resenia debe tener una puntuación entre 1 y 10. <br>'
    }
    if(!validarImagenes(imagen)){
        resumen += 'Debe ingresar una url de imagen valida, con terminacion (.jpg, .png, .gif) <br>'
    }
    
    return resumen;
}
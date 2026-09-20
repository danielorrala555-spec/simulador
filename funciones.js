//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos, egresos){
    let resultado = ingresos - egresos;
    return resultado

}
function calcularCapacidadDePgo(disponible){
    let capacidadPago=disponible/2;
    return capacidadPago
    
}
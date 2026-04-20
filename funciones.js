function calcularDisponible(ingresos,egresos){
    let valorDisponible=0
    valorDisponible=ingresos-egresos;
    if(valorDisponible <0){
        return 0;
    }
    return valorDisponible;

}
function calcularCapacidadPago(valorDisponible){
    let resultado;
    resultado = valorDisponible /2;

    return resultado;

}

function calcularInteresSimple(monto, tasa, plazoAnios) {
let interes;
interes = plazoAnios * monto * (tasa / 100);
return interes;
}
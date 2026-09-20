//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function recupearTexto(idComponente){
    let componente = document.getElementById(idComponente);
    let valor = componente.value;
    return valor;   
}

function recuperarFloat(idComponente){
    let valorTexto = recupearTexto(idComponente);
    let valorFloat = parseFloat(valorTexto);
    return valorFloat;
}
function mostarEnEspam(idComponente, valor){
    let componente = document.getElementById(idComponente);
     componente.textContent = valor;
}

function recuperarEntero(idComponente){
    let valorTexto = recupearTexto(idComponente);
    let valorEntero = parseInt(valorTexto);
    return valorEntero;
}

function calcular(){
    let ingresos = recuperarFloat("txtIngresos")
    let egresos = recuperarFloat("txtEgresos")

    let txtTazaInteres =recuperarEntero("txtTasaInteres")
    let txtmonto =recuperarEntero("txtMonto")
    let txtPlazo =recuperarEntero("txtPlazo")

    let disponible = calcularDisponible(ingresos, egresos);
    let capacidadPago = calcularCapacidadDePgo(disponible);
    let interes = calcularInteresSimple(txtmonto, txtPlazo, txtTazaInteres )

    if(disponible < 0 && capacidadPago<0){
        disponible = 0;
        capacidadPago = 0;
    }
    mostarEnEspam("spnDisponible", disponible)
    mostarEnEspam("spnCapacidadPago", capacidadPago)
    mostarEnEspam("spnInteresPagar", interes)
    

}
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
    let total = calcularTotalPagar(txtmonto, interes)
    let cuotaMensual =calcularCuotaMensual(total, txtPlazo)
    let creditoAprovado = aprobarCreditp(capacidadPago, cuotaMensual)
    let mensajeCredito;

    if(disponible < 0 && capacidadPago<0){
        disponible = 0;
        capacidadPago = 0;
    }
    if(creditoAprovado === true){
        mensajeCredito = "CREDITO APROBADO"
    }else{
        mensajeCredito = "CREDITO RECHAZADO"
    }
    mostarEnEspam("spnDisponible", disponible.toFixed(2));
    mostarEnEspam("spnCapacidadPago", capacidadPago.toFixed(2));
    mostarEnEspam("spnInteresPagar", interes.toFixed(2));
    mostarEnEspam("spnTotalPrestamo", total.toFixed(2));
    mostarEnEspam("spnCuotaMensual", cuotaMensual.toFixed(2));
    mostarEnEspam("spnEstadoCredito", mensajeCredito);
    

}
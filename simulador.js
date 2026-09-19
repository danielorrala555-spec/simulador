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

function calcular(){
    let ingresos = recuperarFloat("txtIngresos")
    let egresos = recuperarFloat("txtEgresos")
    let disponible = calcularDisponible(ingresos, egresos);
    if(disponible < 0){
        disponible = 0
    }
    mostarEnEspam("spnCapacidadPago", disponible)
    

}
function calcular(){
    let ingresosFloat=0;
    let egresosFloat=0;
    let cmpIngresosFloat;
    let cmpEgresosFloat;
    let total;
    let saldoDisponible;
 
    cmpIngresosFloat=document.getElementById("txtIngresos");
    cmpEgresosFloat=document.getElementById("txtEgresos");
    ingresosFloat=parseFloat(cmpIngresosFloat.value);
    egresosFloat=parseFloat(cmpEgresosFloat.value);
 
    saldoDisponible=calcularDisponible(ingresosFloat,egresosFloat);
    total=document.getElementById("spnDisponible");
    total.innerText=saldoDisponible;
 
    let capacidadDePago=calcularCapacidadPago(saldoDisponible);
    let mostrarCapacidadPago=document.getElementById("spnCapacidadPago");
    mostrarCapacidadPago.innerText=capacidadDePago;

    let monto = parseInt(document.getElementById("txtMonto").value);
    let plazoAnios = parseInt(document.getElementById("txtPlazo").value);
    let tasaInteres = parseInt(document.getElementById("txtTasaInteres").value);


    let interes = calcularInteresSimple(monto, tasaInteres, plazoAnios);
    document.getElementById("spnInteresPagar").innerText = interes;

    let totalPagar = calcularTotalPagar(monto, interes);
    document.getElementById("spnTotalPrestamo").innerText = totalPagar;

    let cuotaMensual = calcularCuotaMensual(totalPagar, plazoAnios);
    document.getElementById("spnCuotaMensual").innerText = cuotaMensual;

 
 
}
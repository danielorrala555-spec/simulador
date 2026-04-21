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

let monto = parseFloat(document.getElementById("txtMonto").value);
let plazoAnios = parseInt(document.getElementById("txtPlazo").value);
let tasaInteres = parseFloat(document.getElementById("txtTasaInteres").value);

// Validar antes de calcular
if (!validarFormulario(ingresosFloat, egresosFloat, monto, plazoAnios, tasaInteres)) {
    return;
}

saldoDisponible=calcularDisponible(ingresosFloat,egresosFloat);
total=document.getElementById("spnDisponible");
total.innerText="$ " + saldoDisponible.toFixed(2);

let capacidadDePago=calcularCapacidadPago(saldoDisponible);
let mostrarCapacidadPago=document.getElementById("spnCapacidadPago");
mostrarCapacidadPago.innerText="$ " + capacidadDePago.toFixed(2);

let interes = calcularInteresSimple(monto, tasaInteres, plazoAnios);
document.getElementById("spnInteresPagar").innerText = "$ " + interes.toFixed(2);

let totalPagar = calcularTotalPagar(monto, interes);
document.getElementById("spnTotalPrestamo").innerText = "$ " + totalPagar.toFixed(2);

let cuotaMensual = calcularCuotaMensual(totalPagar, plazoAnios);
document.getElementById("spnCuotaMensual").innerText = "$ " + cuotaMensual.toFixed(2);

// Estado de crédito
let estadoEl = document.getElementById("spnEstadoCredito");
if (cuotaMensual <= capacidadDePago) {
    estadoEl.innerText = "✅ APROBADO";
    estadoEl.className = "estado-aprobado";
} else {
    estadoEl.innerText = "❌ RECHAZADO";
    estadoEl.className = "estado-rechazado";
}


}

function reiniciar() {
const campos = ["txtIngresos", "txtEgresos", "txtMonto", "txtPlazo", "txtTasaInteres"];
campos.forEach(id => {
document.getElementById(id).value = "";
document.getElementById(id).classList.remove("input-error", "input-ok");
});


const spans = ["spnDisponible","spnCapacidadPago","spnInteresPagar","spnTotalPrestamo","spnCuotaMensual"];
spans.forEach(id => document.getElementById(id).innerText = "");

let estadoEl = document.getElementById("spnEstadoCredito");
estadoEl.innerText = "ANALIZANDO...";
estadoEl.className = "";

limpiarErrores();


}
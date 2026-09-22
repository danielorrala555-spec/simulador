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
function validarCampo(idInput, idError, minimo = null, maximo = null){

    let valor = recupearTexto(idInput);
    let mensaje = "";

    // Campo vacío
    if(valor.trim() === ""){
        mensaje = "Este campo no puede estar vacío";

    // Máximo 5 caracteres
    }else if(valor.length > 5){
        mensaje = "Máximo 5 caracteres";

    // Solo números
    }else if(isNaN(valor)){
        mensaje = "Solo se admiten números";

    }else{

        let numero = parseFloat(valor);

        if(minimo !== null && numero < minimo){
            mensaje = `El mínimo es $${minimo}`;

        }else if(maximo !== null && numero > maximo){
            mensaje = `El máximo es $${maximo}`;
        }
    }

    document.getElementById(idError).textContent = mensaje;

    return mensaje === "";
}
function validarIngresos(){
    return validarCampo(
        "txtIngresos",
        "errorIngresos",
        200,
        7000
    );
}


function validarEgresos(){

    let esValido = validarCampo(
        "txtEgresos",
        "errorEgresos"
    );

    if(esValido === false){
        return false;
    }

    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");

    if(egresos > ingresos){
        document.getElementById("errorEgresos").textContent =
            "Los egresos no pueden ser mayores a los ingresos";

        return false;
    }

    return true;
}


function validarMonto(){
    return validarCampo(
        "txtMonto",
        "errorMonto",
        500,
        20000
    );
}


function validarPlazo() {
    return validarCampo(
        "txtPlazo",
        "errorPlazo"
    );
}


function validarTasaInteres() {
    return validarCampo(
        "txtTasaInteres",
        "errorTasaInteres"
    );
}

function calcular() {

    // VALIDACIONES

    let ingresosValidos = validarIngresos();
    let egresosValidos = validarEgresos();
    let montoValido = validarMonto();
    let plazoValido = validarPlazo();
    let tasaValida = validarTasaInteres();


    if (
        ingresosValidos === false ||
        egresosValidos === false ||
        montoValido === false ||
        plazoValido === false ||
        tasaValida === false
    ) {
        return;
    }


    // RECUPERAR VALORES

    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");

    let txtTazaInteres = recuperarEntero("txtTasaInteres");
    let txtmonto = recuperarEntero("txtMonto");
    let txtPlazo = recuperarEntero("txtPlazo");


    // CÁLCULOS

    let disponible =
        calcularDisponible(ingresos, egresos);

    let capacidadPago =
        calcularCapacidadDePgo(disponible);

    let interes =
        calcularInteresSimple(
            txtmonto,
            txtPlazo,
            txtTazaInteres
        );

    let total =
        calcularTotalPagar(
            txtmonto,
            interes
        );

    let cuotaMensual =
        calcularCuotaMensual(
            total,
            txtPlazo
        );


    // EVITAR VALORES NEGATIVOS

    if (disponible < 0 && capacidadPago < 0) {
        disponible = 0;
        capacidadPago = 0;
    }


    // APROBAR O RECHAZAR CRÉDITO

    let creditoAprovado =
        aprobarCreditp(
            capacidadPago,
            cuotaMensual
        );

    let mensajeCredito;

    if (creditoAprovado === true) {
        mensajeCredito = "CREDITO APROBADO";
    } else {
        mensajeCredito = "CREDITO RECHAZADO";
    }


    // MOSTRAR RESULTADOS

    mostarEnEspam(
        "spnDisponible",
        disponible.toFixed(2)
    );

    mostarEnEspam(
        "spnCapacidadPago",
        capacidadPago.toFixed(2)
    );

    mostarEnEspam(
        "spnInteresPagar",
        interes.toFixed(2)
    );

    mostarEnEspam(
        "spnTotalPrestamo",
        total.toFixed(2)
    );

    mostarEnEspam(
        "spnCuotaMensual",
        cuotaMensual.toFixed(2)
    );

    mostarEnEspam(
        "spnEstadoCredito",
        mensajeCredito
    );
}
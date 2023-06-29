function calcularArrayNumeroCuotas(arrayNcuotasActuales, nTotalDeCuotas) {
    //var arrayNcuotasActuales = []
    for (var i = 0; i <= nTotalDeCuotas; i++) {
        arrayNcuotasActuales.push(i);
    }
    return arrayNcuotasActuales
}

function calcularArrayTeas(nTotalDeCuotas, tea) {
    var arrayTEAs = []
    for (var i = 0; i <= nTotalDeCuotas; i++) {
        arrayTEAs.push(tea);
    }
    return arrayTEAs
}

function calcularTEP(cuotaActual,nTotalDeCuotas,tea, frec, diasPorAnio) {
    if (cuotaActual <= (nTotalDeCuotas)) {
        return (
            (Math.pow(1 + (tea), (frec) / (diasPorAnio)) - 1) * 100
        );
    } else {
        return -1;
    }
}

function calcularIP (cuotaActual, nTotalDeCuotas, frec, diasPorAnio, ia) {
    if ((cuotaActual) <= (nTotalDeCuotas)) {
        return (
            ((Math.pow(1 + ia, (frec) / (diasPorAnio)) - 1) * 100)
        )
    } else {
        return 0;
    }
}
//en desarrollo
function saldoInicial(cuotaActual, montoDelPrestamo, nTotalDeCuotas, cuotas) {
    if (cuotaActual === 1) {
        return montoDelPrestamo;
    } else if (cuotaActual <= nTotalDeCuotas) {
        return cuotas[cuotaActual - 1].saldoFinal;
    } else {
        return 0;
    }
}

function saldoInicialIndexado(cuotaActual, inflacionPeriodo, montoDelPrestamo, nTotalDeCuotas, cuotas) {
    const n = saldoInicial(cuotaActual, montoDelPrestamo, nTotalDeCuotas, cuotas) + (saldoInicial(cuotaActual, montoDelPrestamo, nTotalDeCuotas, cuotas) * inflacionPeriodo)
    return n;
}

function fIntereses(VsaldoInincialIndexado, V_TEP) {
    const  n = (VsaldoInincialIndexado * V_TEP)/100;
    return n
}

function seguroDeDesgravamen(vSaldoInicialIndexado, porcentajeSeguroDesgravamen) {
    return (vSaldoInicialIndexado * porcentajeSeguroDesgravamen) / 100;
}

function seguroRiesgo (cuotaActual, nTotalDeCuotas, segRiesgoPer) {
    if (cuotaActual <= nTotalDeCuotas) {
        return - segRiesgoPer;
    } else {
        return 0;
    }
}

function comision (cuotaActual, nTotalDeCuotas, comisionPeriodica) {
    if (cuotaActual <= nTotalDeCuotas) {
        return - comisionPeriodica;
    } else {
        return 0;
    }
}

function calcularPortes (cuotaActual, nTotalDeCuotas, portes) {
    if (cuotaActual <= nTotalDeCuotas) {
        return - portes;
    } else {
        return 0;
    }
}

function calcularGastosAdministracion (cuotaActual, nTotalDeCuotas, gastosAdministracion) {
    if (cuotaActual <= nTotalDeCuotas) {
        return -gastosAdministracion;
    } else {
        return 0;
    }
}

function PAGO (tep, pSegDesPer, n, nc, sii)  {

    var tasa = tep + pSegDesPer;
    var nper = n - nc + 1;
    var va = sii;

    if (!isNaN(tasa)) {
        tasa = tasa / 100;
    }

    return -((tasa * (Math.pow(1 + tasa, nper)) * va) / ((Math.pow(1 + tasa, nper) - 1)));
}

//para editar
function Cuota (cuotaActual, nTotalDeCuotas, tep, pSegDesPer, periodoGracia, VsaldoInincialIndexado, V_TEP) {
    if (cuotaActual <= nTotalDeCuotas) {

        if (periodoGracia === 'T') {
            return 0;
        } else if (periodoGracia === 'P') {
            return fIntereses(VsaldoInincialIndexado, V_TEP);
        } else if (periodoGracia === 'S'){
            return PAGO(tep,pSegDesPer,nTotalDeCuotas,cuotaActual,VsaldoInincialIndexado);
        }
    }
}

function calcularVAR(flujosEfectivo, tasaDescuento) {
    let varTotal = 0;
    for (let i = 0; i < flujosEfectivo.length; i++) {
        varTotal += flujosEfectivo[i] / Math.pow((1 + tasaDescuento), i + 1);
    }
    return varTotal;
}

function calcularTIR(flujosEfectivo) {
    let tasaInferior = 0;
    let tasaSuperior = 1;
    let tasaMedia = (tasaInferior + tasaSuperior) / 2;
    let varMedia = calcularVAR(flujosEfectivo, tasaMedia);
    const limiteError = 0.00001;

    while (Math.abs(varMedia) > limiteError) {
        if (varMedia > 0) {
            tasaInferior = tasaMedia;
        } else {
            tasaSuperior = tasaMedia;
        }
        tasaMedia = (tasaInferior + tasaSuperior) / 2;
        varMedia = calcularVAR(flujosEfectivo, tasaMedia);
    }

    return tasaMedia;
}

const fila={
    numeroCuota: 0,
    tea: '',
    tep: '',
    ia: '',
    ip: '',
    pg: '',
    saldoInicial: '',
    saldoInicialIndexado: '',
    interes: '',
    cuota: '',
    amortizacion: '',
    seguroDesgravamen: '',
    seguroRiesgo: '',
    comision: '',
    portes: '',
    gastosAdministrativos: '',
    saldoFinal: '',
    flujo: ''
}

class fila_f{
    constructor(cuotaActual) {
        this.cuotaActual=cuotaActual;
    }
}

const instancia=new fila_f(1);




/*
function Cuota(cuotaActual, nTotalDeCuotas, periodoGracia) {
    if (cuotaActual <= nTotalDeCuotas) {
        if (periodoGracia === 'T') {
            return 0;
        } else {
            if (periodoGracia === 'P') {
                return fIntereses(cuotaActual);
            }
        }
    }
}
*/

export {calcularArrayNumeroCuotas, calcularArrayTeas, calcularTEP, saldoInicial, saldoInicialIndexado,
    fIntereses, seguroDeDesgravamen, seguroRiesgo, comision, calcularPortes, calcularVAR, PAGO, Cuota,
    calcularTIR, calcularIP, calcularGastosAdministracion, instancia}
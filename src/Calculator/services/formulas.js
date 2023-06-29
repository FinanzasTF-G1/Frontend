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

function calcularTEP(cuotaActual, nTotalDeCuotas, tea, frec, diasPorAnio) {
    if (cuotaActual <= (nTotalDeCuotas)) {
        return (
            (Math.pow(1 + (tea), (frec) / (diasPorAnio)) - 1) * 100
        );
    } else {
        return -1;
    }
}

function calcularIP(cuotaActual, nTotalDeCuotas, frec, diasPorAnio, ia) {
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
    const n = (VsaldoInincialIndexado * V_TEP) / 100;
    return n
}

function seguroDeDesgravamen(vSaldoInicialIndexado, porcentajeSeguroDesgravamen) {
    return (vSaldoInicialIndexado * porcentajeSeguroDesgravamen) / 100;
}

function seguroRiesgo(cuotaActual, nTotalDeCuotas, segRiesgoPer) {
    if (cuotaActual <= nTotalDeCuotas) {
        return -segRiesgoPer;
    } else {
        return 0;
    }
}

function comision(cuotaActual, nTotalDeCuotas, comisionPeriodica) {
    if (cuotaActual <= nTotalDeCuotas) {
        return -comisionPeriodica;
    } else {
        return 0;
    }
}

function calcularPortes(cuotaActual, nTotalDeCuotas, portes) {
    if (cuotaActual <= nTotalDeCuotas) {
        return -portes;
    } else {
        return 0;
    }
}

function calcularGastosAdministracion(cuotaActual, nTotalDeCuotas, gastosAdministracion) {
    if (cuotaActual <= nTotalDeCuotas) {
        return -gastosAdministracion;
    } else {
        return 0;
    }
}

function PAGO(tep, pSegDesPer, n, nc, sii) {


    var tasa = parseFloat(tep) + parseFloat(pSegDesPer);
    var nper = parseFloat(n) - parseFloat(nc) + 1;
    var va = parseFloat(sii);


    tasa = tasa / 100;

    var m= -((tasa * (Math.pow(1 + tasa, nper)) * va) / (Math.pow(1 + tasa, nper) - 1))
    return m;
}

//para editar
function Cuota(cuotaActual, nTotalDeCuotas, tep, pSegDesPer, periodoGracia, VsaldoInincialIndexado, V_TEP) {
    if (cuotaActual <= nTotalDeCuotas) {

        if (periodoGracia === 'T') {
            return 0;
        } else if (periodoGracia === 'P') {
            return fIntereses(VsaldoInincialIndexado, V_TEP);
        } else if (periodoGracia === 'S') {
            return PAGO(tep, pSegDesPer, nTotalDeCuotas, cuotaActual, VsaldoInincialIndexado);
        }
    }
}
function calcularAmortizacion(cuotaActual, nTotalDeCuotas, periodoGracia, pagoCuota, interes, seguroDesgravamen) {
    if (cuotaActual <= nTotalDeCuotas) {
        if (periodoGracia === 'T' || periodoGracia === 'P') {
            return 0;
        } else {
            return pagoCuota - interes - seguroDesgravamen;
        }
    } else {
        return 0;
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

class Fila {
    constructor(cuotaActual, nTotalDeCuotas, montoDelPrestamo, TEA, frec, diasPorAnio, cuotaInicial, precioVenta, porcentajeSeguroDesgravamen, segRiesgoPer, comisionPeriodica, portes, gastosAdministracion, prepago) {
        this.cuotaActual = cuotaActual;
        this.nTotalDeCuotas = nTotalDeCuotas;
        this.montoDelPrestamo = montoDelPrestamo;
        this.TEA = TEA;
        this.frec = frec;
        this.diasPorAnio = diasPorAnio;
        this.IA=0.0;
        this.PG = 'S';
        this.saldoFinal =0;
        this.cuotaInicial = cuotaInicial;
        this.precioVenta = precioVenta;
        this.porcentajeSeguroDesgravamen=porcentajeSeguroDesgravamen;
        this.segDesgravamenPer = (porcentajeSeguroDesgravamen / 30) * frec;
        this.PP = 0;
        this.segRiesgoPer = segRiesgoPer;
        this.comisionPeriodica=comisionPeriodica;
        this.portes=portes;
        this.gastosAdministracion=gastosAdministracion;
        this.prepago = prepago;
    }

    fTEP() {
        if (this.cuotaActual <= (this.nTotalDeCuotas)) {
            return (
                (Math.pow(1 + (this.TEA), (this.frec) / (this.diasPorAnio)) - 1) * 100
            );
        } else {
            return -1;
        }
    }

    fIA(){
        this.IA=0.0;
        return this.IA;
    }
    fIP() {
        if ((this.cuotaActual) <= (this.nTotalDeCuotas)) {
            return (
                ((Math.pow(1 + this.IA, (this.frec) / (this.diasPorAnio)) - 1) * 100)
            )
        } else {
            return 0;
        }
    }
    fPG(){
        return this.PG;
    }
    setPS(s){
        this.PG = s;
    }
    calcSaldoAFinanciar(){
        this.saldoFinal = this.precioVenta - (this.cuotaInicial / 100) * this.precioVenta;
        return this.saldoFinal;
    }
    getSaldoFinal(){
        return this.saldoFinal;
    }
    //a revisar
    fSaldoInicial() {
        if (this.cuotaActual === 1) {
            return this.montoDelPrestamo;
        } else if (this.cuotaActual <= this.nTotalDeCuotas) {
            return this.cuotaInicial;
        } else {
            return 0;
        }
    }
    fSaldoInicialIndexado() {
        return this.fSaldoInicial() + (this.fSaldoInicial() * this.fIP())
    }
    fInteres() {
        return -((this.fSaldoInicialIndexado() * this.fTEP()) / 100);
    }
    fCuota() {
        if (this.cuotaActual <= this.nTotalDeCuotas) {

            if (this.PG === 'T') {
                return 0;
            } else if (this.PG === 'P') {
                return this.fInteres();
            } else if (this.PG === 'S') {
                return PAGO(this.fTEP(), this.segDesgravamenPer, this.nTotalDeCuotas, this.cuotaActual, this.fSaldoInicialIndexado());
            }
        }
    }

    fAmortizacion() {
        if (this.cuotaActual <= this.nTotalDeCuotas) {
            if (this.PG === 'T' || this.PG === 'P') {
                return 0;
            } else {
                return -(this.fCuota()- this.fInteres() - this.fSeguroDeDesgravamen());
            }
        } else {
            return 0;
        }
    }
    fPP(){
        return this.PP;
    }
    setPP(p){
        this.PP= p ;
    }
    fSeguroDeDesgravamen() {
        return -((this.fSaldoInicialIndexado() * this.porcentajeSeguroDesgravamen) / 100);
    }
    fSeguroRiesgo() {
        if (this.cuotaActual <= this.nTotalDeCuotas) {
            return -(this.segRiesgoPer);
        } else {
            return 0;
        }
    }
    fComision() {
        if (this.cuotaActual <= this.nTotalDeCuotas) {
            return -(this.comisionPeriodica);
        } else {
            return 0;
        }
    }
    fPortes() {
        if (this.cuotaActual <= this.nTotalDeCuotas) {
            return -(this.portes);
        } else {
            return 0;
        }
    }
    fGastosAdministracion() {
        if (this.cuotaActual <= this.nTotalDeCuotas) {
            return -(this.gastosAdministracion);
        } else {
            return 0;
        }
    }
    fSaldoFinal() {
        if (this.PG === 'T') {
            return this.fSaldoInicialIndexado() - this.fInteres();
        } else {
            return this.fSaldoInicialIndexado() + this.fAmortizacion() + this.prepago;
        }
    }

    fFlujo() {
        let flujo = this.fCuota() + this.prepago + this.fSeguroRiesgo() + this.fComision() + this.fPortes() + this.fGastosAdministracion();

        if (this.PG === "T" || this.PG === "P") {
            flujo += this.fSeguroDeDesgravamen();
        }

        return flujo;
    }


}

//const miFila_1 = new Fila(1);


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

export {
    calcularArrayNumeroCuotas, calcularArrayTeas, calcularTEP, saldoInicial, saldoInicialIndexado,
    fIntereses, seguroDeDesgravamen, seguroRiesgo, comision, calcularPortes, calcularVAR, PAGO, Cuota,
    calcularTIR, calcularIP, calcularGastosAdministracion, Fila
}
<template>
  <div class="grid pt-2 text-center" @click="calcularOnBu">
    <div class="card col-11">
      <h2>Método Francés Vencido - Ordinario</h2>
    </div>
    <div class="card col-5">
      <h4>Datos del préstamo</h4>
      <div class="formgroup-inline">
        <div class="field">
          <label for="precioVenta" class="col-fixed" style="width:200px">Precio de venta del activo</label>
          <InputNumber v-model="precioVenta" :min="0" :minFractionDigits="0" :maxFractionDigiv-ts="2"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="cuotaInicial" class="col-fixed" style="width:200px">% Cuota inicial</label>
          <InputNumber v-model="cuotaInicial" :min="0" :minFractionDigits="0" :maxFractionDigits="2"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="nAnios" class="col-fixed" style="width:200px">N° de Años</label>
          <InputNumber v-model="nAnios" :min="0" :minFractionDigits="0" :maxFractionDigits="2"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="frec" class="col-fixed" style="width:200px">Frecuencia de pagos</label>
          <InputNumber v-model="frec" :min="0" :minFractionDigits="0" :maxFractionDigits="2"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="diasPorAnio" class="col-fixed" style="width:200px">N° de días de año</label>
          <InputNumber v-model="diasPorAnio" :min="0" :minFractionDigits="0" :maxFractionDigits="2"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="porcentajeTea" class="col-fixed" style="width:200px">Tasa Efectiva Anual</label>
          <InputNumber v-model="porcentajeTea" :minFractionDigits="0" :maxFractionDigits="5"/>
          <label class="col-fixed">%</label>
        </div>
      </div>
    </div>
    <div class="card col-5">
      <h4>Resultado del financiamiento</h4>
      <div class="formgroup-inline">
        <div class="field">
          <label for="saldoAfinanciar" class="col-fixed" style="width:200px">Saldo a financiar</label>
          <label>{{ saldoAfinanciar }}</label>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="montoDelPrestamo" class="col-fixed" style="width:200px">Monto del préstamo</label>
          <label>{{ montoDelPrestamo }}</label>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="nCuotasPorAnio" class="col-fixed" style="width:200px">N° Cuotas por Año</label>
          <label>{{ nCuotasPorAnio }}</label>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="nTotalDeCuotas" class="col-fixed" style="width:200px">N° Total de Cuotas</label>
          <label>{{ nTotalDeCuotas }}</label>
        </div>
      </div>
    </div>
    <div class="card col-5">
      <h4>Datos de los costes/gastos iniciales</h4>
      <div class="formgroup-inline">
        <div class="field">
          <label for="costesNotariales" class="col-fixed" style="width:200px">Costes Notariales</label>
          <InputNumber v-model="costesNotariales" :min="0" :minFractionDigits="0" :maxFractionDigits="2"/>
        </div>
        <div class="field">
          <label for="costesRegistrales" class="col-fixed" style="width:200px">Costes Registrales</label>
          <InputNumber v-model="costesRegistrales" :min="0" :minFractionDigits="0" :maxFractionDigits="2"/>
        </div>
        <div class="field">
          <label for="tasacion" class="col-fixed" style="width:200px">Tasación</label>
          <InputNumber v-model="tasacion" :min="0" :minFractionDigits="0" :maxFractionDigits="2"/>
        </div>
        <div class="field">
          <label for="comisionDeEstudio" class="col-fixed" style="width:200px">Comisión de estudio</label>
          <InputNumber v-model="comisionDeEstudio" :min="0" :minFractionDigits="0" :maxFractionDigits="2"/>
        </div>
        <div class="field">
          <label for="comisionActivacion" class="col-fixed" style="width:200px">Comisión activación</label>
          <InputNumber v-model="comisionActivacion" :min="0" :minFractionDigits="0" :maxFractionDigits="2"/>
        </div>
      </div>
    </div>
    <div class="card col-5">
      <h4>Resultados de los costes/gastos periódicos</h4>
      <div class="formgroup-inline">
        <div class="field">
          <label for="segDesgravamenPer" class="col-fixed" style="width:150px">% Seguro de desgravamen per.</label>
          <label>{{ segDesgravamenPer }}</label>
          <label class="col-fixed">%</label>
          <!--          <Dropdown v-model="intervSegDesg" :options="intervalos" optionLabel="name"
                              placeholder="Selecciona un intervalo" class="w-full md:w-10rem"/>-->
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="segRiesgoPer" class="col-fixed" style="width:150px">Seguro riesgo</label>
          <label>{{ segRiesgoPer }}</label>
        </div>
      </div>
    </div>
    <div class="card col-5">
      <h4>Datos de los costes/gastos periódicos</h4>
      <div class="formgroup-inline">
        <div class="field">
          <label for="comisionPeriodica" class="col-fixed" style="width:200px">Comisión Periodica</label>
          <InputNumber v-model="comisionPeriodica" :min="0" :maxFractionDigits="5"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="portes" class="col-fixed" style="width:200px">Portes</label>
          <InputNumber v-model="portes" :min="0" :maxFractionDigits="5"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="gastosAdministracion" class="col-fixed" style="width:200px">Gastos de Administración</label>
          <InputNumber v-model="gastosAdministracion" :min="0" :maxFractionDigits="5"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="porcentajeSeguroDesgravamen" class="col-fixed" style="width:200px">% de Seguro de
            desgravamen</label>
          <InputNumber v-model="porcentajeSeguroDesgravamen" :min="0" :maxFractionDigits="5"/>
          <label class="col-fixed">%</label>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="porcentajeSeguroRiesgo" class="col-fixed" style="width:200px">% de Seguro de riesgo</label>
          <InputNumber v-model="porcentajeSeguroRiesgo" :min="0" :maxFractionDigits="5"/>
          <label class="col-fixed">%</label>
        </div>
      </div>
    </div>
    <div class="card col-5">
      <h4>Resultados totales por</h4>
      <div class="formgroup-inline">
        <div class="field">
          <label for="intereses" class="col-fixed" style="width:150px">Intereses</label>
          <InputNumber v-model="intereses" :min="0" :minFractionDigits="0" :maxFractionDigits="2"
                       class="md: w-10rem"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="amortCapital" class="col-fixed" style="width:150px">Amortización del capital</label>
          <InputNumber v-model="amortCapital" :min="0" :minFractionDigits="0" :maxFractionDigits="2"
                       class="md: w-10rem"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="seguroDesgravamen" class="col-fixed" style="width:150px">Seguro de desgravamen</label>
          <InputNumber v-model="seguroDesgravamen" :min="0" :minFractionDigits="0" :maxFractionDigits="2"
                       class="md: w-10rem"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="segContraTodoRiesgo" class="col-fixed" style="width:150px">Seguro contra todo riesgo</label>
          <InputNumber v-model="segContraTodoRiesgo" :min="0" :minFractionDigits="0" :maxFractionDigits="2"
                       class="md: w-10rem"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="comisionesPeriodicas" class="col-fixed" style="width:150px">Comisiones periódicas</label>
          <InputNumber v-model="comisionesPeriodicas" :min="0" :minFractionDigits="0" :maxFractionDigits="2"
                       class="md: w-10rem"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="portesGastosAdministracion" class="col-fixed" style="width:150px">Portes/Gastos de
            administración</label>
          <InputNumber v-model="portesGastosAdministracion" :min="0" :minFractionDigits="0" :maxFractionDigits="2"
                       class="md: w-10rem"/>
        </div>
      </div>
    </div>
    <div class="card col-5">
      <h4>Datos del costo de oportunidad</h4>
      <div class="field">
        <label for="cok" class="col-fixed" style="width:200px">Tasa de descuento</label>
        <InputNumber v-model="cok" :min="0" :maxFractionDigits="5"/>
        <label class="col-fixed">%</label>
      </div>
    </div>
    <div class="card col-5">
      <h4>Resultado de Indicadores de Rentabilidad</h4>
      <div class="formgroup-inline">
        <div class="field">
          <label for="tasaDeDescuento" class="col-fixed" style="width:150px">Tasa de descuento</label>
          <label>{{ tasaDeDescuento }}</label>
          <label class="col-fixed">%</label>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="tirDeLaOperacion" class="col-fixed" style="width:150px">TIR de la operación</label>
          <InputNumber v-model="tirDeLaOperacion" :min="0" :minFractionDigits="0" :maxFractionDigits="2"
                       class="md: w-10rem"/>
          <label class="col-fixed">%</label>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="tceaDeLaOperacion" class="col-fixed" style="width:150px">TCEA de la operación</label>
          <label>{{ tceaDeLaOperacion }}</label>
          <label class="col-fixed">%</label>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="vanDeLaOperacion" class="col-fixed" style="width:150px">VAN de la operación</label>
          <InputNumber v-model="vanDeLaOperacion" :min="0" :minFractionDigits="0" :maxFractionDigits="2"
                       class="md: w-10rem"/>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <!-- Sacamos el datatable ciela-->
      <div class="flex justify-content-center mb-4"></div>
      <DataTable :value="datos" tableStyle="min-width: 50rem">
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
      </DataTable>

  </div>

  <div>
    <label><label>Calcular tep </label>{{ calcularTEP(cuotaActual, nTotalDeCuotas, tea, frec, diasPorAnio)}}</label>
  </div>
  <div>

      <label>{{nTotalDeCuotas}}</label>


    <label><label>IP </label>{{ calcularIP(cuotaActual, nTotalDeCuotas, frec, diasPorAnio, 0) }}</label>
  </div>
  <div>
      <label>Saldo 2: {{saldoInicial(1, 94280, 180, cuotas)}}</label>
  </div>
  <div>
      <label>monto del prestamo</label><label>{{montoDelPrestamo}}</label>
    <label><label>Saldo inicial Indexado </label>{{ saldoInicialIndexado(cuotaActual, 0, montoDelPrestamo, nTotalDeCuotas, cuotas) }}</label>
  </div>
  <div>
      <label>{{TEPn}}</label>
    <label><label>Formula intereses </label>{{ fIntereses(saldoInicialIndexado(cuotaActual, 0, montoDelPrestamo, nTotalDeCuotas, cuotas), calcularTEP(cuotaActual, nTotalDeCuotas, tea, frec, diasPorAnio)) }}</label>
  </div>
  <div>
    <label>Cuota {{ Cuota(cuotaActual, nTotalDeCuotas, tep, pSegDesPer, periodoGracia) }}</label>
  </div>
  <div>
    <label><label>Seguro de desgravamen </label>{{ seguroDeDesgravamen(cuotaActual, porcentajeSeguroDesgravamen) }}</label>
  </div>
  <div>
    <label><label>Seguro de riesgo </label>{{ seguroRiesgo(cuotaActual, nTotalDeCuotas, segRiesgoPer) }}</label>
  </div>
  <div>
    <label><label>Comision </label>{{ comision(cuotaActual, nTotalDeCuotas, comisionPeriodica) }}</label>
  </div>
  <div>
    <label><label>Portes </label>{{ calcularPortes(cuotaActual, nTotalDeCuotas, portes) }}</label>
  </div>
  <div>
    <label><label>Gastos administrativos </label>{{ calcularGastosAdministracion(cuotaActual, nTotalDeCuotas, gastosAdministracion) }}</label>
  </div>
  <div>
    <label><label>Tasa efectiva anual </label>{{ tea }}</label>
  </div>
  <div>
    <label>Acá debe estar el PAGO: </label>
    <label>{{ PAGO(0.79741, 0.050, 180, 13, 98881.70) }}</label>
  </div>

</template>

<script setup>
import {ref, onMounted} from "vue";
import {CalculatorService} from "@/Calculator/services/CalculatorService";
import {calcularArrayNumeroCuotas, calcularArrayTeas, calcularTEP, saldoInicial, saldoInicialIndexado,
    fIntereses, seguroDeDesgravamen, seguroRiesgo, comision, calcularPortes, calcularVAR, PAGO, Cuota,
    calcularTIR, calcularIP, calcularGastosAdministracion} from "@/Calculator/services/formulas";

onMounted(() => {
    CalculatorService.getData().then((data)=>(datos.value = data));
});

CalculatorService.editData('1001', { price: 880 })
    .then(updatedData => {
        CalculatorService.totalData = updatedData;
        console.log('Datos modificados:', updatedData);
    })
    .catch(error => {
        console.error('Error al modificar los datos:', error);
    });


const datos=ref();
const operacion = ref();
const precioVenta = ref();
const cuotaInicial = ref();
const nAnios = ref();
const frec = ref();
const diasPorAnio = ref();
const costesNotariales = ref();
const costesRegistrales = ref();
const tasacion = ref();
const comisionDeEstudio = ref();
const comisionActivacion = ref();
const comisionPeriodica = ref();
const portes = ref();
const gastosAdministracion = ref();

//edit
const porcentajeSeguroDesgravamen = ref(0.0);
const porcentajeSeguroRiesgo = ref();
const intereses = ref();
const amortCapital = ref();
const seguroDesgravamen = ref();
const segContraTodoRiesgo = ref();
const comisionesPeriodicas = ref();
const portesGastosAdministracion = ref();
const cok = ref();
const tirDeLaOperacion = ref();
var tceaDeLaOperacion = ref();
const vanDeLaOperacion = ref();
var tea = ref();
var porcentajeTea=ref();
var saldoFinal = ref();
var periodoGracia = ref();
var tasaInflacion = ref();
var inflacionPeriodo = ref();
var cuotaPagar = ref();
const tep = ref();

//Valores calculados:
var saldoAfinanciar = 0;
var sumaCostesGastosIniciales = 0;
var montoDelPrestamo =0;
var nCuotasPorAnio = 0;
var nTotalDeCuotas = 0;
var segDesgravamenPer = 0;
var segRiesgoPer = 0;
var tasaDeDescuento = 0;
var cuotaActual = 1;
var TEPn=0

var arrayTEAs = [];
var arrayNcuotasActuales = [];


/*const varResultado = calcularVAR(flujosEfectivo, tasaDescuento);
const tirResultado = calcularTIR(flujosEfectivo);*/

const tep2 = ref();
const pSegDesPer = ref();
const n = ref();
const nc = ref();
const sii = ref();

var value1 = 1;
var value2 = 10;
var cuotas = ref([]);
const calcularOnBu = () => {
  saldoAfinanciar = precioVenta.value - (cuotaInicial.value / 100) * precioVenta.value;
  sumaCostesGastosIniciales = costesNotariales.value + costesRegistrales.value + tasacion.value + comisionDeEstudio.value + comisionActivacion.value;
  montoDelPrestamo = saldoAfinanciar + sumaCostesGastosIniciales;
  nCuotasPorAnio = diasPorAnio.value / frec.value;
  nTotalDeCuotas = nCuotasPorAnio * nAnios.value;
  segDesgravamenPer = (porcentajeSeguroDesgravamen.value / 30) * frec.value;
  segRiesgoPer = (porcentajeSeguroRiesgo.value / 100) * precioVenta.value / nCuotasPorAnio;
  tasaDeDescuento = ((Math.pow((1 + (cok.value / 100)), (frec.value / diasPorAnio.value)) - 1) * 100).toFixed(5);
  TEPn = calcularTEP(cuotaActual, nTotalDeCuotas, tea.value, frec.value, diasPorAnio.value)
  //cuotaPagar.value =
  //PAGO(0.94888, 0.050, 180, 61, 83092.89);
  //PAGO(tep2.value, pSegDesPer.value, n.value, nc.value, sii.value);
  //calcularTEP(parseFloat(cuotaActual.value), parseFloat(tea.value));
  calcularArrayTeas();
  calcularArrayNumeroCuotas();
  tea.value = porcentajeTea.value / 100;
}
/*

const calcularArrayNumeroCuotas = () => {
  for (var i = 0; i <= nTotalDeCuotas.value; i++) {
    arrayNcuotasActuales.push(i);
  }
}

const calcularArrayTeas = () => {
  for (var i = 0; i <= nTotalDeCuotas.value; i++) {
    arrayTEAs.push(tea);
  }
}

const calcularTEP = (cuotaActual) => {
  if (cuotaActual <= parseFloat(nTotalDeCuotas.value)) {
    return (
        (Math.pow(1 + tea.value, parseFloat(frec.value) / parseFloat(diasPorAnio.value)) - 1) * 100
    );
  } else {
    return -1;
  }
}

const calcularIP = (cuotaActual, ia) => {
  if (cuotaActual <= parseFloat(nTotalDeCuotas.value)) {
    return (
        (Math.pow(1 + ia, parseFloat(frec.value) / parseFloat(diasPorAnio.value)) - 1) * 100
    );
  } else {
    return 0;
  }
}

const saldoInicial = (cuotaActual) => {
  if (cuotaActual === 1) {
    return montoDelPrestamo.value;
  } else if (cuotaActual <= nTotalDeCuotas.value) {
    return cuotas.value[cuotaActual - 1].saldoFinal;
  } else {
    return 0;
  }
};

const saldoInicialIndexado = (cuotaActual) => {
  return saldoInicial(cuotaActual) + saldoInicial(cuotaActual) * inflacionPeriodo.value;
};

const fIntereses = (cuotaActual) => {
  return (saldoInicialIndexado(cuotaActual) * calcularTEP(cuotaActual)) / 100;
};

const seguroDeDesgravamen = (cuotaActual) => {
  return (saldoInicialIndexado(cuotaActual) * porcentajeSeguroDesgravamen.value) / 100;
};

const seguroRiesgo = (cuotaActual) => {
  if (cuotaActual <= nTotalDeCuotas.value) {
    return -segRiesgoPer.value;
  } else {
    return 0;
  }
};

const comision = (cuotaActual) => {
  if (cuotaActual <= nTotalDeCuotas.value) {
    return -comisionPeriodica.value;
  } else {
    return 0;
  }
}

const calcularPortes = (cuotaActual) => {
  if (cuotaActual <= nTotalDeCuotas.value) {
    return -portes.value;
  } else {
    return 0;
  }
}

const calcularGastosAdministracion = (cuotaActual) => {
  if (cuotaActual <= nTotalDeCuotas.value) {
    return -gastosAdministracion.value;
  } else {
    return 0;
  }
}

const PAGO = (tep, pSegDesPer, n, nc, sii) => {

  var tasa = tep + pSegDesPer;
  var nper = n - nc + 1;
  var va = sii;

  if (!isNaN(tasa)) {
    tasa = tasa / 100;
  }

  return -((tasa * (Math.pow(1 + tasa, nper)) * va) / ((Math.pow(1 + tasa, nper) - 1)));
}

const Cuota = (cuotaActual) => {
  if (cuotaActual <= nTotalDeCuotas.value) {
    var vCuota=PAGO(tep.value,pSegDesPer.value,nTotalDeCuotas,cuotaActual,saldoInicialIndexado(cuotaActual))
    if (periodoGracia === 'T') {
      return 0;
    } else if (periodoGracia === 'P') {
      return fIntereses(cuotaActual);
    } else {
      return PAGO(vCuota.value,pSegDesPer.value,nTotalDeCuotas.value,cuotaActual,saldoInicialIndexado(cuotaActual));
    }
  }
}

*/

/* prueba
const calcularSaldoFinal = (cuotaActual) => {

  function saldoInicial() {
    if (cuotaActual === 1) {
      return montoDelPrestamo;
    } else {
      if (cuotaActual <= nTotalDeCuotas) {
        return saldoFinal;
      } else return 0;
    }
  }

  function Cuota() {
    if (cuotaActual <= nTotalDeCuotas) {
      if (periodoGracia === 'T') {
        return 0;
      } else {
        if (periodoGracia === 'P') {
          return fIntereses();
        }
      }
    }
  }
}
/!*-----------------------------comentario-------------------*!/


const calcularTabla = () => {
  for (let i = 1; i <= nTotalDeCuotas.value; i++) {
    cuotas.value.push({numero: i});
  }
};

// Función para calcular el VAN (VAR) de una serie de flujos de efectivo y una tasa de descuento
function calcularVAR(flujosEfectivo, tasaDescuento) {
  let varTotal = 0;
  for (let i = 0; i < flujosEfectivo.length; i++) {
    varTotal += flujosEfectivo[i] / Math.pow((1 + tasaDescuento), i + 1);
  }
  return varTotal;
}

// Función para calcular la TIR (TIR) de una serie de flujos de efectivo
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

// Ejemplo de uso
const flujosEfectivo = [-1000, 500, 300, 200, 100]; // Flujos de efectivo: -1000, 500, 300, 200, 100
const tasaDescuento = 0.1; // Tasa de descuento: 10%


console.log("VAR:", varResultado);
console.log("TIR:", tirResultado);

*/

// Llamar a la función para calcular la tabla cuando sea necesario

</script>

<style scoped>

.card {
  background: beige;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 1rem;
  font-family: sans-serif;
}
</style>
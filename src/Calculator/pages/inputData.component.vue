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
          <label for="tea" class="col-fixed" style="width:200px">Tasa Efectiva Anual</label>
          <InputNumber v-model="tea" :min="0" :maxFractionDigits="5"/>
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
    <DataTable :value="operacion" tableStyle="min-width: 50rem">
      <Column field="numCuota" header="NumCuota"></Column>
      <Column field="TEA" header="TEA"></Column>
      <Column field="TEP" header="TEP"></Column>
      <Column field="Flujo" header="Flujo"></Column>
    </DataTable>
  </div>
  <table>
    <thead>
    <tr>
      <th>Cuota</th>
      <th>Saldo Inicial</th>
      <th>Saldo Inicial Indexado</th>
      <th>Intereses</th>
      <th>Cuota</th>
      <th>Seguro de Desgravamen</th>
      <th>Seguro de Riesgo</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="cuota in cuotas" :key="cuota.numero">
      <td>{{ cuota.numero }}</td>
      <td>{{ saldoInicial(cuota.numero) }}</td>
      <td>{{ saldoInicialIndexado(cuota.numero) }}</td>
      <td>{{ fIntereses(cuota.numero) }}</td>
      <td>{{ Cuota(cuota.numero) }}</td>
      <td>{{ SeguroDeDesgravamen(cuota.numero) }}</td>
      <td>{{ SeguroRiesgo(cuota.numero) }}</td>
    </tr>
    </tbody>
  </table>
  <div>
    <label>{{ calcularTEP(1, 10) }}</label>
  </div>
  <div>
    <label>{{ saldoInicial(1) }}</label>
  </div>
  <div>
    <label>{{ saldoInicialIndexado(1) }}</label>
  </div>
  <div>
    <label>{{ fIntereses(1) }}</label>
  </div>
  <div>
    <label>{{ seguroDeDesgravamen(1) }}</label>
  </div>
  <div>
    <label>{{ seguroRiesgo(1) }}</label>
  </div>
  <div>
    <label>{{ comision(1) }}</label>
  </div>
  <div>
    <label>{{ calcularPortes(1) }}</label>
  </div>
  <div>
    <label>{{ calcularGastosAdministracion(1) }}</label>
  </div>
  <div>
    <label>{{ tea }}</label>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import {calculatorApiService} from "../services/calculator-api.service";

onMounted(() => {
  calculatorApiService.getOperations().then((data) => (operacion.value = data.slice(0, 10)))
});

const operacion = ref();
var precioVenta = ref();
var cuotaInicial = ref(null);
const nAnios = ref(null);
const frec = ref(null);
const diasPorAnio = ref(null);

const saldoAfinanciar = ref(0);

const montoDelPrestamo = ref(0);
var nCuotasPorAnio = ref(null);
var nTotalDeCuotas = ref(null);
const costesNotariales = ref(null);
const costesRegistrales = ref(null);
const tasacion = ref(null);
const comisionDeEstudio = ref(null);
const comisionActivacion = ref(null);
var segDesgravamenPer = ref(null);
var segRiesgoPer = ref(null);
const comisionPeriodica = ref(null);
const portes = ref(null);
const gastosAdministracion = ref(null);
const porcentajeSeguroDesgravamen = ref(null);
const porcentajeSeguroRiesgo = ref(null);
const intereses = ref(null);
const amortCapital = ref(null);
const seguroDesgravamen = ref(null);
const segContraTodoRiesgo = ref(null);
const comisionesPeriodicas = ref(null);
const portesGastosAdministracion = ref(null);
const cok = ref(null);
var tasaDeDescuento = ref(null);
const tirDeLaOperacion = ref(null);
var tceaDeLaOperacion = ref(null);
const vanDeLaOperacion = ref(null);
var cuotaActual = 0;
var tea = ref(null);
var saldoFinal = ref(null);
var periodoGracia = ref(null);
var tasaInflacion = 0;
var inflacionPeriodo = ref(0);
const sumaCostesGastosIniciales = ref(0);
var cuotaPagar = ref(0.0);
const tep = ref(0);

let arrayTEAs = [];
let arrayNcuotasActuales = [];

/*const varResultado = calcularVAR(flujosEfectivo, tasaDescuento);
const tirResultado = calcularTIR(flujosEfectivo);*/

var value1 = 1;
var value2 = 10;
const cuotas = ref([]);
const calcularOnBu = () => {
  saldoAfinanciar.value = precioVenta.value - (cuotaInicial.value / 100) * precioVenta.value;
  sumaCostesGastosIniciales.value = costesNotariales.value + costesRegistrales.value + tasacion.value + comisionDeEstudio.value + comisionActivacion.value;
  montoDelPrestamo.value = saldoAfinanciar.value + sumaCostesGastosIniciales.value;
  nCuotasPorAnio.value = diasPorAnio.value / frec.value;
  nTotalDeCuotas.value = nCuotasPorAnio.value * nAnios.value;
  segDesgravamenPer.value = (porcentajeSeguroDesgravamen.value / 30) * frec.value;
  segRiesgoPer.value = (porcentajeSeguroRiesgo.value / 100) * precioVenta.value / nCuotasPorAnio.value;
  tasaDeDescuento.value = ((Math.pow((1 + (cok.value / 100)), (frec.value / diasPorAnio.value)) - 1) * 100).toFixed(5);
  cuotaPagar.value = PAGO(0.94888, 0.050, 180, 61, 83092.89);
  calcularTEP(parseFloat(cuotaActual.value), parseFloat(tea.value));
}

const calcularArrayNumeroCuotas = () => {
  for (var i = 0; i <= nTotalDeCuotas; i++) {
    arrayNcuotasActuales.push(i);
  }
}

const calcularTEP = (cuotaActual, arrayTEA) => {
  arrayTEA[cuotaActual] = arrayTEA[cuotaActual] / 100;
  if (cuotaActual <= parseFloat(nTotalDeCuotas.value)) {
    return (
        (Math.pow(1 + arrayTEA[cuotaActual], parseFloat(frec.value) / parseFloat(diasPorAnio.value)) - 1) * 100
    );
  } else {
    return 0;
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
  return saldoInicialIndexado(cuotaActual) * calcularTEP(cuotaActual, value2);
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

const calcularSaldoFinal = (cuotaActual) => {

}
/*function PAGO(tep, nTotaldeCuotas, cuotaActual, sii) {

  var tasa = tep.value + pSegDesPer.value;
  var nper = n.value - cuotaActual.value + 1;
  var va = sii.value;

  tasa.value = tasa.value / 100

  return tasa.value * (Math.pow(1 + tasa.value, nper.value)) * va.value / ((Math.pow(1 + tasa.value, nper.value)) - 1);
}*/



/*
function saldoInicial() {
  if (cuotaActual === 1) {
    return montoDelPrestamo;
  } else {
    if (cuotaActual <= nTotalDeCuotas) {
      return saldoFinal;
    } else return 0;
  }
}

function saldoInicialIndexado() {
  return saldoInicial() + saldoInicial() * inflacionPeriodo;
}

function fIntereses() {
  return saldoInicial() * TEP();
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

function SeguroDeDesgravamen() {
  return saldoInicialIndexado() * porcentajeSeguroDesgravamen;
}

function SeguroRiesgo() {
  if (cuotaActual <= nTotalDeCuotas) {
    return -segRiesgoPer;
  } else return 0;
}*/

/*-----------------------------comentario-------------------*/


const calcularTabla = () => {
  for (let i = 1; i <= nTotalDeCuotas.value; i++) {
    cuotas.value.push({numero: i});
  }
};

// Función para calcular el VAN (VAR) de una serie de flujos de efectivo y una tasa de descuento
/*function calcularVAR(flujosEfectivo, tasaDescuento) {
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
console.log("TIR:", tirResultado);*/

const Cuota = (cuota) => {
  if (cuota <= nTotalDeCuotas.value) {
    if (periodoGracia.value === "T") {
      return 0;
    } else if (periodoGracia.value === "P") {
      return fIntereses(cuota);
    }
  }
};


// Llamar a la función para calcular la tabla cuando sea necesario
onMounted(calcularTabla);


</script>+-+-

<style scoped>

.card {
  background: beige;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 1rem;
  font-family: sans-serif;
}
</style>
<template>
  <div class="grid pt-2 text-center">
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
    </div>
    <div class="card col-5" @click="calcularOnBu">
      <h4>Resultado del financiamiento</h4>
      <div class="formgroup-inline">
        <div class="field">
          <label for="saldoAfinanciar" class="col-fixed" style="width:200px">Saldo a financiar</label>
          <label>{{saldoAfinanciar}}</label>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="montoDelPrestamo" class="col-fixed" style="width:200px">Monto del préstamo</label>
          <InputNumber v-model="montoDelPrestamo" :min="0" :minFractionDigits="0" :maxFractionDigits="2"
                       class="md: w-10rem"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="nCuotasPorAnio" class="col-fixed" style="width:200px">N° Cuotas por Año</label>
          <InputNumber v-model="nCuotasPorAnio" :min="0" :minFractionDigits="0" :maxFractionDigits="2"
                       class="md: w-10rem"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="nTotalDeCuotas" class="col-fixed" style="width:200px">N° Total de Cuotas</label>
          <InputNumber v-model="nTotalDeCuotas" :min="0" :minFractionDigits="0" :maxFractionDigits="2"
                       class="md: w-10rem"/>
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
          <InputNumber v-model="segDesgravamenPer" :min="0" :minFractionDigits="0" :maxFractionDigits="2"
                       class="md: w-10rem"/>
          <label class="col-fixed">%</label>
          <!--          <Dropdown v-model="intervSegDesg" :options="intervalos" optionLabel="name"
                              placeholder="Selecciona un intervalo" class="w-full md:w-10rem"/>-->
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="segRiesgoPer" class="col-fixed" style="width:150px">Seguro riesgo</label>
          <InputNumber v-model="segRiesgoPer" :min="0" :minFractionDigits="0" :maxFractionDigits="2"
                       class="md: w-10rem"/>
        </div>
      </div>
    </div>
    <div class="card col-5">
      <h4>Datos de los costes/gastos periódicos</h4>
      <div class="formgroup-inline">
        <div class="field">
          <label for="comisionPeriodica" class="col-fixed" style="width:200px">Comisión Periodica</label>
          <InputNumber v-model="comisionPeriodica" :min="0" inputId="integeronly"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="portes" class="col-fixed" style="width:200px">Portes</label>
          <InputNumber v-model="portes" :min="0" inputId="integeronly"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="gastosAdministracion" class="col-fixed" style="width:200px">Gastos de Administración</label>
          <InputNumber v-model="gastosAdministracion" :min="0" inputId="integeronly"/>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="porcentajeSeguroDesgravamen" class="col-fixed" style="width:200px">% de Seguro de
            desgravamen</label>
          <InputNumber v-model="porcentajeSeguroDesgravamen" :min="0" inputId="integeronly"/>
          <label class="col-fixed">%</label>
        </div>
      </div>
      <div class="formgroup-inline">
        <div class="field">
          <label for="porcentajeSeguroRiesgo" class="col-fixed" style="width:200px">% de Seguro de riesgo</label>
          <InputNumber v-model="porcentajeSeguroRiesgo" :min="0" inputId="integeronly"/>
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
        <InputNumber v-model="cok" :min="0" inputId="integeronly"/>
        <label class="col-fixed">%</label>
      </div>
    </div>
    <div class="card col-5">
      <h4>Resultado de Indicadores de Rentabilidad</h4>
      <div class="formgroup-inline">
        <div class="field">
          <label for="tasaDeDescuento" class="col-fixed" style="width:150px">Tasa de descuento</label>
          <InputNumber v-model="tasaDeDescuento" :min="0" :minFractionDigits="0" :maxFractionDigits="2"
                       class="md: w-10rem"/>
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
          <InputNumber v-model="tceaDeLaOperacion" :min="0" :minFractionDigits="0" :maxFractionDigits="2"
                       class="md: w-10rem"/>
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

</template>

<script setup>
import {ref, onMounted} from "vue";
import {calculatorApiService} from "@/Calculator/services/calculator-api.service";

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
const calcularOnBu = ()=>{
    saldoAfinanciar.value = precioVenta.value - (cuotaInicial.value)/100 * precioVenta.value;
}
var montoDelPrestamo = ref(null);
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
var TEA = ref(null);
var saldoFinal = ref(null);
var periodoGracia = ref(null);
var tasaInflacion = 0;
var inflacionPeriodo = ref(null);


var sumaCostesGastosIniciales = costesNotariales + costesRegistrales + tasacion + comisionDeEstudio + comisionActivacion;



montoDelPrestamo = saldoAfinanciar + sumaCostesGastosIniciales;

nCuotasPorAnio = diasPorAnio / frec;

nTotalDeCuotas = nCuotasPorAnio / nAnios;

segDesgravamenPer = porcentajeSeguroDesgravamen / (30 * frec);

segRiesgoPer = porcentajeSeguroRiesgo * precioVenta / nCuotasPorAnio;

tasaDeDescuento = Math.pow((1 + cok), (frec / diasPorAnio)) - 1;

tceaDeLaOperacion = Math.pow((1 + tirDeLaOperacion), (diasPorAnio / frec)) - 1;

function TEP() {
  if (cuotaActual <= nTotalDeCuotas) {
    return Math.pow((1 + TEA), (frec / diasPorAnio)) - 1;
  } else {
    return 0;
  }
}

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
}


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
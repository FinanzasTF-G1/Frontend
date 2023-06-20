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
          <label for="NA" class="col-fixed" style="width:200px">N° de Años</label>
          <InputNumber v-model="NA" :min="0" :minFractionDigits="0" :maxFractionDigits="2"/>
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
    <div class="card col-5">
      <h4>Resultado del financiamiento</h4>
      <div class="formgroup-inline">
        <div class="field">
          <label for="saldoAfinanciar" class="col-fixed" style="width:200px">Saldo a financiar</label>
          <InputNumber v-model="saldoAfinanciar" :min="0" :minFractionDigits="0" :maxFractionDigits="2"/>
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
        <div class="field">
          <label for=diasPAnio class="col-fixed" style="width:200px">Días por año</label>
          <InputNumber v-model="diasPAnio" :min="0" inputId="integeronly"/>
        </div>
        <div class="field">
          <label for="tazaDescuento" class="col-fixed" style="width:200px">Tasa de descuento</label>
          <InputNumber v-model="tazaDescuento" :min="0" :minFractionDigits="0" :maxFractionDigits="2"/>
          <label class="col-fixed">% anual</label>
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
          <label for="segRiesgo" class="col-fixed" style="width:150px">Seguro riesgo</label>
          <InputNumber v-model="segRiesgo" :min="0" :minFractionDigits="0" :maxFractionDigits="2" class="md: w-10rem"/>
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
const precioVenta = ref(null);
const NA = ref(null);
const frec = ref(null);
const diasPAnio = ref();
const tazaDescuento = ref();


const valorTransaccion = ref(null);
const cuotaInicial = ref(null);
const nCuotas = ref(null);
const intervaloSeleccionado = ref();
const frecuenciaPago = ref();
const fechaPago = ref();
const periodoGracia = ref();
const tazaEfAnual = ref();

const segDesgrabamen = ref();
const intervSegDesg = ref();
const segBien = ref();
const intervSegBien = ref();
const na = ref();

console.log();

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
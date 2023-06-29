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
    <DataTable v-model:editingRows="editingRows" :value="datos" editMode="row" dataKey="id"
               @row-edit-save="onRowEditSave" tableClass="editable-cells-table" tableStyle="min-width: 50rem">
      <Column field="cuotaActual" header="N° Cuota"></Column>
      <Column field="tea" header="TEA">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]"/>
        </template>
      </Column>
      <Column field="tep" header="TEP"></Column>
      <Column field="ia" header="IA"></Column>
      <Column field="ip" header="IP"></Column>
      <Column field="peridoGracia" header="Periodo Gracia" style="width: 20%">
        <template #editor="{ data, field }">
          <Dropdown v-model="data[field]" :options="statuses" optionLabel="label" optionValue="value"
                    placeholder="Seleccione una opción">
            <template #option="slotProps">
              <Tag :value="slotProps.option.value" :severity="getStatusLabel(slotProps.option.value)"/>
            </template>
          </Dropdown>
        </template>
        <template #body="slotProps">
          <Tag :value="slotProps.data.periodoGracia" :severity="getStatusLabel(slotProps.data.periodoGracia)"/>
        </template>
      </Column>
      <Column field="saldoInicial" header="Saldo Inicial"></Column>
      <Column field="saldoInicialIndexado" header="Saldo Inicial Indexado"></Column>
      <Column field="interes" header="Interés"></Column>
      <Column field="pagoCuota" header="Cuota"></Column>
      <Column field="amortizacion" header="Amortización"></Column>
      <Column field="prepago" header="Prepago">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]"/>
        </template>
      </Column>
      <Column field="seguroDesgravamen" header="Seguro Desgravamen"></Column>
      <Column field="seguroRiesgo" header="Seguro Riesgo"></Column>
      <Column field="comision" header="Comisión"></Column>
      <Column field="portes" header="Portes"></Column>
      <Column field="gastosAdministrativos" header="Gastos Administrativos"></Column>
      <Column field="saldoFinal" header="Saldo Final"></Column>
      <Column field="flujo" header="Flujo"></Column>

      <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
    </DataTable>

  </div>

</template>

<script setup>
import {ref, onMounted} from "vue";
import {CalculatorService} from "@/Calculator/services/CalculatorService";
import {
  calcularArrayNumeroCuotas, calcularArrayTeas, calcularTEP, saldoInicial, saldoInicialIndexado,
  fIntereses, seguroDeDesgravamen, seguroRiesgo, comision, calcularPortes, calcularVAR, PAGO, Cuota,
  calcularTIR, calcularIP, calcularGastosAdministracion, Fila
} from "@/Calculator/services/formulas";

onMounted(() => {
  CalculatorService.getData().then((data) => (datos.value = data));
});

CalculatorService.editData('1001', {price: 880})
    .then(updatedData => {
      CalculatorService.totalData = updatedData;
      console.log('Datos modificados:', updatedData);
    })
    .catch(error => {
      console.error('Error al modificar los datos:', error);
    });

//datos de tabla de ejemplo
const datos = ref();

const editingRows = ref([]);
const statuses = ref([
  {label: 'Total', value: 'TOTAL'},
  {label: 'Parcial', value: 'PARCIAL'},
  {label: 'Sin plazo de gracia', value: 'NOPLAZODEGRACIA'}
]);
const onRowEditSave = (event) => {
  let {newData, index} = event;

  datos.value[index] = newData;
};
const getStatusLabel = (status) => {
  switch (status) {
    case 'TOTAL':
      return 'success';

    case 'PARCIAL':
      return 'warning';

    case 'NOPLAZODEGRACIA':
      return 'danger';

    default:
      return null;
  }
};

// Valores ingresados - Inputs

// Datos del prestamo

const precioVenta = ref();
const cuotaInicial = ref();
const nAnios = ref();
const frec = ref();
const diasPorAnio = ref();
var tea = ref();

// Datos de los costes/gastos iniciales
const costesNotariales = ref();
const costesRegistrales = ref();
const tasacion = ref();
const comisionDeEstudio = ref();
const comisionActivacion = ref(0);

// Datos de los costes/gastos periódicos
const comisionPeriodica = ref(0);
const portes = ref();
const gastosAdministracion = ref();
const porcentajeSeguroDesgravamen = ref();
const porcentajeSeguroRiesgo = ref();

// Datos del costo de oportunidad
const cok = ref();

// Resultados calculados - Outputs

// Resultados del financiamiento
var saldoAfinanciar = 0;
var montoDelPrestamo = 0;
var nCuotasPorAnio = 0;
var nTotalDeCuotas = 0;


// Resultado de los costes/gastos periodicos
var segDesgravamenPer = 0;
var segRiesgoPer = 0;

// Resultado totales por...
const intereses = ref();
const amortCapital = ref();
const seguroDesgravamen = ref();
const segContraTodoRiesgo = ref();
const comisionesPeriodicas = ref();
const portesGastosAdministracion = ref();

// Resultado de indicadores de Rentabilidad
var tasaDeDescuento = 0;
const tirDeLaOperacion = ref();
var tceaDeLaOperacion = 0;
const vanDeLaOperacion = ref();

// Datos modificables pertenecientes a la tabla ya generada
var porcentajeTea = ref();
var periodoGracia = ref('S');

// Sumatoria de los datos de los costes/gastos iniciales:
var sumaCostesGastosIniciales = 0;

// Otras variables

var cuotaActual = 1;
var TEPn = 0
var cuotas = ref([]);

/*const varResultado = calcularVAR(flujosEfectivo, tasaDescuento);
const tirResultado = calcularTIR(flujosEfectivo);*/




// Resultados de los calculos realizados en esta vista de VUE
const calcularOnBu = () => {
  saldoAfinanciar = precioVenta.value - (cuotaInicial.value / 100) * precioVenta.value;
  sumaCostesGastosIniciales = costesNotariales.value + costesRegistrales.value + tasacion.value + comisionDeEstudio.value + comisionActivacion.value;
  montoDelPrestamo = saldoAfinanciar + sumaCostesGastosIniciales;
  nCuotasPorAnio = diasPorAnio.value / frec.value;
  nTotalDeCuotas = nCuotasPorAnio * nAnios.value;
  segDesgravamenPer = (porcentajeSeguroDesgravamen.value / 30) * frec.value;
  segRiesgoPer = (porcentajeSeguroRiesgo.value / 100) * precioVenta.value / nCuotasPorAnio;
  tasaDeDescuento = ((Math.pow((1 + (cok.value / 100)), (frec.value / diasPorAnio.value)) - 1) * 100).toFixed(5);
  TEPn = calcularTEP(cuotaActual, nTotalDeCuotas, tea.value, frec.value, diasPorAnio.value);
  calcularArrayTeas();
  calcularArrayNumeroCuotas();
  tea.value = porcentajeTea.value / 100;
  tceaDeLaOperacion = Math.pow((1 + tirDeLaOperacion), (diasPorAnio / frec)) - 1;
  var miFila = new Fila(1, nTotalDeCuotas, montoDelPrestamo, tea.value, frec.value, diasPorAnio.value, cuotaInicial.value, precioVenta.value, porcentajeSeguroDesgravamen.value, segRiesgoPer, comisionPeriodica.value, portes.value, gastosAdministracion.value, 0);
  console.log(miFila.fTEP(), miFila.fIA(), miFila.fIP(), miFila.fPG(), miFila.fSaldoInicial(), miFila.fSaldoInicialIndexado(), miFila.fInteres(), miFila.fCuota(), miFila.fAmortizacion(), miFila.fPP(), miFila.fSeguroDeDesgravamen(), miFila.fSeguroRiesgo(), miFila.fComision(), miFila.fPortes(), miFila.fGastosAdministracion(), miFila.fSaldoFinal(), miFila.fFlujo());
}
/*

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

</script>

<style scoped>

.card {
  background: beige;
  border-radius: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  font-family: sans-serif;
}
</style>
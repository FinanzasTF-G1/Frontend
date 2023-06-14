<template>
    <div class="grid pt-2 text-center">
        <div class="card col-11">
            <h2>Método Francés vencido - Ordinario</h2>
        </div>
        <div class="card col-5">
            <h4>Valor del Bien</h4>
            <div class="formgroup-inline">
                <div class="field">
                    <label for="precioVenta" class="col-fixed" style="width:200px">Precio de venta</label>
                    <InputNumber v-model="precioVenta" :min="0" :minFractionDigits="0" :maxFractionDigits="2" />
                </div>
            </div>
            <div class="formgroup-inline">
                <div class="field">
                    <label for="valorTransaccion" class="col-fixed" style="width:200px">Valor de transacción</label>
                    <InputNumber v-model="valorTransaccion" :min="0" :minFractionDigits="0" :maxFractionDigits="2" />
                </div>
            </div>
            <div class="formgroup-inline">
                <div class="field">
                    <label for="cuotaInicial" class="col-fixed" style="width:200px">Cuota inicial</label>
                    <InputNumber v-model="cuotaInicial" :min="0" :minFractionDigits="0" :maxFractionDigits="2" />
                </div>
            </div>
        </div>
        <div class="col-5 card">
            <h4>Plazo de Pago</h4>
            <div class="formgroup-inline">
                <div class="field">
                    <label for="nCuotas" class="col-fixed" style="width:150px">N de años / cuotas</label>
                    <InputNumber v-model="nCuotas" :min="0" :minFractionDigits="0" :maxFractionDigits="2" class="md: w-10rem"/>
                    <Dropdown v-model="intervaloSeleccionado" :options="intervalos" optionLabel="name" placeholder="Selecciona un intervalo" class="w-full md:w-10rem" />
                </div>
                <div class="field">
                    <label for="frecuenciaPago" class="col-fixed" style="width:200px">Frecuencia de pago</label>
                    <Dropdown v-model="frecuenciaPago" :options="frecuencias" optionLabel="name" placeholder="Selecciona una frecuencia" class="w-full md:w-15rem" />

                </div>
                <div class="field">
                    <label for="fechaPago" class="col-fixed" style="width:200px">Fecha de préstamo</label>
                    <Calendar v-model="fechaPago" dateFormat="dd/mm/yy" />
                </div>
                <div class="field">
                    <label for="periodoGracia" class="col-fixed" style="width:200px">Periodo de gracia</label>
                    <InputNumber v-model="periodoGracia" :min="0" inputId="integeronly" />
                    <label class="col-fixed">días</label>
                </div>
            </div>
        </div>
        <div class="col-5 card">
            <h4>Tazas</h4>
            <div class="formgroup-inline">
                <div class="field">
                    <label for="tazaEfAnual" class="col-fixed" style="width:200px">Taza efectiva anual</label>
                    <InputNumber v-model="tazaEfAnual" :min="0" :minFractionDigits="0" :maxFractionDigits="2" />
                    <label class="col-fixed">%</label>
                </div>
                <div class="field">
                    <label for=diasPAnio class="col-fixed" style="width:200px">Días por año</label>
                    <InputNumber v-model="diasPAnio" :min="0" inputId="integeronly" />
                </div>
                <div class="field">
                    <label for="tazaDescuento" class="col-fixed" style="width:200px">Tasa de descuento</label>
                    <InputNumber v-model="tazaDescuento" :min="0" :minFractionDigits="0" :maxFractionDigits="2" />
                    <label class="col-fixed">% anual</label>
                </div>
            </div>
        </div>
        <div class="col-5 card">
            <h4>Pagos porcentuales</h4>
            <div class="formgroup-inline">
                <div class="field">
                    <label for="segDesgrabamen" class="col-fixed" style="width:150px">% Seg. de desgrabamen</label>
                    <InputNumber v-model="segDesgrabamen" :min="0" :minFractionDigits="0" :maxFractionDigits="2" class="md: w-10rem"/>
                    <Dropdown v-model="intervSegDesg" :options="intervalos" optionLabel="name" placeholder="Selecciona un intervalo" class="w-full md:w-10rem" />
                </div>
                <div class="field">
                    <label for="segBien" class="col-fixed" style="width:150px">% Seg. Bien</label>
                    <InputNumber v-model="segBien" :min="0" :minFractionDigits="0" :maxFractionDigits="2" class="md: w-10rem"/>
                    <Dropdown v-model="intervSegBien" :options="intervalos" optionLabel="name" placeholder="Selecciona un intervalo" class="w-full md:w-10rem" />
                </div>
            </div>
        </div>
        <div class="col-5 card">
            <h4>Pagos iniciales</h4>
            <p>Desembolso</p>
            <p>Concepto y monto</p>
        </div>
        <div class="col-5 card">
            <h4>Pagos por período</h4>
            <p>Concepto y monto</p>
        </div>
    </div>
    <div class="card">
        Usaré esto para la tabla :T
    </div>
    
</template>

<script setup>
import {ref} from "vue";

const precioVenta = ref(null);
const valorTransaccion = ref(null);
const cuotaInicial = ref(null);
const nCuotas = ref(null);
const intervaloSeleccionado = ref();
const frecuenciaPago = ref();
const fechaPago = ref();
const periodoGracia = ref();
const tazaEfAnual = ref();
const diasPAnio = ref();
const tazaDescuento = ref();
const segDesgrabamen = ref();
const intervSegDesg = ref();
const segBien = ref();
const intervSegBien = ref();
const intervalos = ref([
    { name: 'Días', code: 'D' },
    { name: 'Meses', code: 'M' },
    { name: 'Bimestres', code: 'B' },
    { name: 'Semestres', code: 'S' },
    { name: 'Años', code: 'A' }
]);
const frecuencias = ref([
    { name: 'Mensual', cant: '30' },
    { name: 'Semestral', cant: '180' },
    { name: 'Anual', cant: '360' },
]);

</script>

<style scoped>

.card {
    background: beige;
    border-radius: 5px;
    margin: auto;
    margin-bottom: 1rem;
    font-family: sans-serif;
}
</style>
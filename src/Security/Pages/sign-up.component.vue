<template>
    <div class="signUp">
        <div class="brand">
            <img src="src/assets/images/hogar-logo.png" alt="Company Logo">
        </div>

        <pv-card class="signUpCard">
            <template #content>
                <div class="p-fluid">
                    <div v-focustrap class="card">
                        <div class="field">
                            <pv-inputText id="input" v-model="name" type="text" placeholder="Nombre" autofocus />
                        </div>
                        <div class="field">
                            <div class="p-input-icon-right">
                                <i class="pi pi-envelope" />
                                <pv-inputText id="email" v-model="email" type="email" placeholder="Email" />
                            </div>
                        </div>
                        <div class="field">
                            <div class="p-float-label">
                                <pv-password v-model="password">
                                    <template #header>
                                        <h6>Crea una contraseña</h6>
                                    </template>
                                    <template #footer>
                                        <pv-divider />
                                        <p class="mt-2">Sugerencias</p>
                                        <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                            <li>Por lo menos una minúscula</li>
                                            <li>Por lo menos una mayúscula</li>
                                            <li>Por lo menos un número</li>
                                            <li>Mínimo 8 caracteres</li>
                                        </ul>
                                    </template>
                                </pv-password>
                                <label for="password">Contraseña</label>
                            </div>
                        </div>
                        <div class="field-checkbox">
                            <pv-checkbox id="accept" v-model="accept" name="accept" value="Accept" />
                            <label for="accept">Estoy de acuerdo con los términos y condiciones*</label>
                        </div>
                        <router-link to="/home">
                            <pv-button type="submit" label="Regístrate" class="mt-2" />
                        </router-link>

                    </div>
                </div>
            </template>

        </pv-card>

    </div>
</template>

<script setup>

import {ref} from 'vue';
const name = ref();
const email = ref();
const password = ref();
const accept = ref();
</script>

<style scoped>
.signUp{
    background-color: #443988;
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
}
.signUpCard{

    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
}
</style>
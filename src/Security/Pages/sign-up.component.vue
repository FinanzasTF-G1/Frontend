<template>
    <div class="signUp">
        <div class="brand">
            <img src="src/assets/images/hogar-logo.png" alt="Company Logo">
        </div>

        <Card class="signUpCard">
            <template #content>
                <div class="p-fluid">
                    <div v-focustrap class="card">
                        <div class="field">
                            <InputText id="input" v-model="name" type="text" placeholder="Nombre" autofocus />
                        </div>
                        <div class="field">
                            <div class="p-input-icon-right">
                                <i class="pi pi-envelope" />
                                <InputText id="email" v-model="email" type="email" placeholder="Email" />
                            </div>
                        </div>
                        <div class="field">
                            <div class="p-float-label">
                                <Password v-model="password">
                                    <template #header>
                                        <h6>Crea una contraseña</h6>
                                    </template>
                                    <template #footer>
                                        <Divider />
                                        <p class="mt-2">Sugerencias</p>
                                        <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                            <li>Por lo menos una minúscula</li>
                                            <li>Por lo menos una mayúscula</li>
                                            <li>Por lo menos un número</li>
                                            <li>Mínimo 8 caracteres</li>
                                        </ul>
                                    </template>
                                </Password>
                                <label for="password">Contraseña</label>
                            </div>
                        </div>
                        <div class="field-checkbox">
                            <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
                            <label for="accept">Estoy de acuerdo con los términos y condiciones*</label>
                        </div>
                        <router-link to="/home">
                            <Button type="submit" label="Regístrate" class="mt-2" />
                        </router-link>

                    </div>
                </div>
            </template>

        </Card>

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
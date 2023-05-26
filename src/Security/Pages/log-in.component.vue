<template>
  <div class="login">
      <div class="brand">
          <img src="src/assets/images/hogar-logo.png" alt="Company Logo">
      </div>

      <pv-card class="loginCard">
          <template #content>
              <div class="p-fluid">
                  <div v-focustrap class="card">
                      <div class="field">
                          <div class="p-input-icon-right">
                              <i class="pi pi-envelope" />
                              <pv-inputText id="email" v-model="email" type="email" placeholder="Email" />
                          </div>
                      </div>
                      <div class="field">
                          <div class="p-float-label">
                              <pv-password v-model="password" :feedback="false" />
                              <label for="password">Contraseña</label>
                          </div>
                      </div>
                      <router-link to="/home">
                          <pv-button type="submit" label="Ingresa" class="mt-2" />
                      </router-link>

                      <div class="field-toSignUp">
                          <label><br>¿Aún no te has registrado?</label>
                          <router-link to="/sign-up">
                              <pv-button type="button" label="Regístrate ahora" class="mt-2" />
                          </router-link>
                      </div>
                  </div>
              </div>
          </template>

      </pv-card>

  </div>
</template>

<script setup>
import {ref} from 'vue';
const email = ref();
const password = ref();

</script>

<style scoped>
.login{
    background-color: #443988;
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
}
.loginCard{

    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
}
</style>
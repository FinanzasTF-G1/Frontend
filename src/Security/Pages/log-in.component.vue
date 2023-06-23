<template>
  <div class="login">
      <div class="brand">
          <img src="src/assets/images/hogar-logo.png" alt="Company Logo">
      </div>

      <Card class="loginCard">
          <template #content>
              <form @submit.prevent="handleSubmit">
                  <div class="p-fluid">
                      <div v-focustrap class="card">
                          <div class="field">
                              <div class="p-input-icon-right">
                                  <i class="pi pi-envelope" />
                                  <InputText id="email" v-model="email" type="email" placeholder="Email" />
                              </div>
                          </div>
                          <div class="field">
                              <div class="p-float-label">
                                  <Password v-model="password" :feedback="false" />
                                  <label for="password">Contraseña</label>
                              </div>
                          </div>

                          <router-link to="/home">
                              <Button type="submit" label="Ingresa" class="mt-2" />
                          </router-link>



                          <div class="field-toSignUp">
                              <label><br>¿Aún no te has registrado?</label>
                              <router-link to="/sign-up">
                                  <Button type="button" label="Regístrate ahora" class="mt-2" />
                              </router-link>
                          </div>
                      </div>
                  </div>
              </form>

          </template>

      </Card>

  </div>
</template>

<script setup>
import {ref} from 'vue';
import axios from "axios";
const email = ref();
const password = ref();

//useVuelidate()
const handleSubmit = async () => {
    const data = {
        email: email.value,
        password: password.value,
    };

    const response = await axios.post('http://localhost:3000/api/v1/login', data);
    console.log(response);
}

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
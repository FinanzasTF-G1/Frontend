import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'axios'

import ToastService from "primevue/toastservice";
import PrimeVue from "primevue/config";

// PrimeVue Material Design Theme
import "primevue/resources/themes/md-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

// PrimeVue Components
import Toolbar from 'primevue/toolbar';
import Toast from 'primevue/toast';
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Divider from 'primevue/divider';
import FocusTrap from 'primevue/focustrap';
import Password from "primevue/password";
import Checkbox from "primevue/checkbox";

const app = createApp(App)
app.use(createPinia())
app.use(router)

// Toast Service
app.use(ToastService);

// PrimeVue Configuration
app.use(PrimeVue, { ripple: true });
app.component("pv-toast", Toast);
app.component("pv-toolbar", Toolbar);
app.component('pv-button', Button);
app.component('pv-card', Card);
app.component('pv-inputText', InputText);
app.component('pv-divider', Divider);
app.component('pv-password', Password);
app.component('pv-checkbox', Checkbox);
app.directive('focustrap', FocusTrap);
app.mount('#app')
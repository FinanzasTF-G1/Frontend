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
import InputNumber from "primevue/inputnumber";
import Divider from 'primevue/divider';
import FocusTrap from 'primevue/focustrap';
import Password from "primevue/password";
import Checkbox from "primevue/checkbox";
import CascadeSelect from 'primevue/cascadeselect';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';

const app = createApp(App)
app.use(createPinia())
app.use(router)

// Toast Service
app.use(ToastService);

// PrimeVue Configuration
app.use(PrimeVue, { ripple: true });
app.component("Toast", Toast);
app.component("Toolbar", Toolbar);
app.component('Button', Button);
app.component('Card', Card);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('Divider', Divider);
app.component('Password', Password);
app.component('Checkbox', Checkbox);
app.directive('focustrap', FocusTrap);
app.component('CascadeSelect', CascadeSelect);
app.component('Dropdown', Dropdown);
app.component('Calendar', Calendar);
app.mount('#app')
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';




// Axios
import axios from 'axios';
import VueAxios from 'vue-axios';


// bootstrap
import 'bootstrap'


// mitt
import emitter from './methods/bus.js';



// 表單驗證
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// 表單規則
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
});
// 設定預設語系
setLocale('zh_TW');



// 讀取效果
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'










const app = createApp(App);



// use axios 
app.use(VueAxios, axios);

// mitt加入全域
app.config.globalProperties.emitter = emitter;


// VeeValidate npm載入/元件形式使用(在main.js全域註冊)
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

// vue3-loading-overlay npm載入/元件形式使用(在main.js全域註冊)
app.component('Loading', Loading)


app.use(router);
app.mount('#app');

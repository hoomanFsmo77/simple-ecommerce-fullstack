import 'sweetalert2/dist/sweetalert2.min.css';
import VueSweetalert2 from 'vue-sweetalert2';
export default defineNuxtPlugin(nuxtApp=>{
    nuxtApp.vueApp.use(VueSweetalert2)
})
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VuePaginate from 'vue-paginate'

const app = createApp(App)



app.use(router)

app.use(VuePaginate)

app.mount('#app')

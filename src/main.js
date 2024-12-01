import { createApp } from 'vue'
import App from './App.vue'
// import VueMeta from 'vue-meta'
import router from './router/index.js'
import './assets/main.css'

const app = createApp(App)

app.use(router)
// app.use(VueMeta)
app.mount('#app')

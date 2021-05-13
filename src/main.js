import { createApp } from 'vue'
// App imports
import App from './App.vue'
import router from './router/router'
// CSS frameworks imports
import './main.css'
import '@fortawesome/fontawesome-free/css/all.css'


// import './assets/css/main.css'
// import "tailwindcss/tailwind.css"

// createApp(App).use(router).mount('#app')

const app = createApp(App);
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

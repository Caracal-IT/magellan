import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import { createI18n } from 'vue-i18n'

// Import icon libraries
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'

import 'quasar/src/css/index.sass'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import en from './locales/en.json'

// configure i18n
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  /*
    config: {
      brand: {
        // primary: '#e46262',
        // ... or all other brand colors
      },
      notify: {...}, // default set of options for Notify Quasar plugin
      loading: {...}, // default set of options for Loading Quasar plugin
      loadingBar: { ... }, // settings for LoadingBar Quasar plugin
      // ..and many more (check Installation card on each Quasar component/directive/plugin)
    }
    */
})

app.mount('#app')

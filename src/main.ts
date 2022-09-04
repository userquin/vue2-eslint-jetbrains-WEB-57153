import Vue from 'vue'
import { createApp, h } from 'vue-demi'
import App from '@/App.vue'
import pinia from '@/plugins/pinia-plugin'
import vuetify from '@/plugins/vuetify-plugin'
import router from '@/plugins/router-plugin'

import 'uno.css'

Vue.config.productionTip = false
Vue.config.performance = import.meta.env.DEV
Vue.config.devtools = import.meta.env.DEV

const app = createApp({
    vuetify,
    router,
    pinia,
    render: () => h(App),
})

app.mount('#app')

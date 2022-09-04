import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
  lang: {
    current: 'en',
    defaultLocale: 'en',
  },
  theme: {
    options: {
      customProperties: true,
    },
    dark: false,
    themes: {
      light: {
        primary: '#078930',
        accent: '#fa6400',
        secondary: '#424242',
        info: '#2196F3',
        warning: '#ffc107',
        error: '#b71c1c',
        success: '#4caf50',
      },
    },
  },
}

export default new Vuetify(opts)

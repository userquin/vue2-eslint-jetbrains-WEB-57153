declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
// Vuetify
declare module 'vuetify/lib/framework' {
  import 'vuetify/types'
  import Vuetify from 'vuetify/lib'
  export default Vuetify
}

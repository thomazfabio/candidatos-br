// plugins/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Importa os ícones MDI

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdi', // Configura o Vuetify para usar MDI
  },
})

export default vuetify

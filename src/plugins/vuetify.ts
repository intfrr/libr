import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import colors from 'vuetify/es5/util/colors'


Vue.use(Vuetify, {
  theme: {
    primary: "#673AB7",
    secondary: "#9C27B0",
    accent: "#E91E63",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  },
  iconfont: 'md',
})

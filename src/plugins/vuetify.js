// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Components
import { VBtn } from 'vuetify/components/VBtn'


const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#000000',
    surface: '#212121',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: '#63fff2',
    'primary-darken-1': '#278b83',
    secondary: '#ec009e',
    'secondary-darken-1': '#8b005d',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    color: '#ec009e'
  },
  variables: {
    'border-color': '#ffffff',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
  aliases: {
    MyButton: VBtn,
  },
  defaults: {
    MyButton: {
      color: 'primary',
      variant: 'tonal',
    },
    VBtn: {
      color: 'primary',
      variant: 'outlined',
    },
    VCard: {
      MyButton: { color: 'secondary' },
      VBtn: { color: 'primary' },
    },
  },
})

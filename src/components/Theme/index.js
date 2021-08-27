import { Dimensions } from 'react-native'

export const palette = {
  primary: {
    light: '#54566d',
    main: '#2b2d42',
    dark: '#02021c',
    contrastText: '#fff',
    hoverOpacity: 'rgba(1, 85, 251, 0.1)'
  },
  secondary: {
    light: '#202124',
    main: '#202124',
    dark: '#202124',
    contrastText: '#444'
  },
  success: {
    main: '#00C851',
    dark: '#007E33',
    contrastText: '#fff'
  },
  error: {
    light: '#f44336',
    main: '#e53935',
    dark: '#d32f2f',
    contrastText: '#fff'
  },
  textPrimary: '#000',
  textSecondary: '#606060',
  border: '#e0e0e0',
  backgroundDisabled: '#f1f3f4',
  textDisabled: '#80868b',
  white: '#fff',
  black: '#000',
  hoverOpacity: 'rgba(0, 0, 0, 0.054)'
}

export const shadows = {
  1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
}

export const fontFamily = {
  OverpassRegular: 'OverpassRegular',
  OverpassSemiBold: 'OverpassSemiBold',
  OverpassBold: 'OverpassBold',
  OverpassExtraBold: 'OverpassExtraBold',
  LatoRegular: 'LatoRegular',
  LatoBold: 'LatoBold',
  LatoBlack: 'LatoBlack',
  PromptRegular: 'PromptRegular',
  PromptMedium: 'PromptMedium',
  PromptSemiBold: 'PromptSemiBold',
  PromptBold: 'PromptBold',
}

const { width, height } = Dimensions.get('window')
let calRatio = width <= height ? 16 * (width / height) : 16 * (height / width)
if (width <= height) {
  if (calRatio < 9) {
    calRatio = width / 9
  } else {
    calRatio = height / 18
  }
} else if (calRatio < 9) {
  calRatio = height / 9
} else {
  calRatio = width / 18
}

export const screenWidth = width
export const screenHeight = height
export const ratio = calRatio / (360 / 9)

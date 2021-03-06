import React from 'react'
import { SvgCss } from 'react-native-svg'

const xml = `
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <g>
            <g>
                <path fill="#000" d="M492,291.5c11.046,0,20-8.954,20-20v-131c0-44.112-35.888-80-80-80H80c-44.112,0-80,35.888-80,80v231c0,44.112,35.888,80,80,80h352c44.112,0,80-35.888,80-80c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20c0,22.056-17.944,40-40,40H80c-22.056,0-40-17.944-40-40V144.738l173.755,108.045c13.029,8.101,27.637,12.152,42.245,12.152c14.608,0,29.216-4.051,42.245-12.152L472,144.738V271.5C472,282.546,480.954,291.5,492,291.5z M277.122,218.814c-13.028,8.101-29.216,8.102-42.244,0L56.689,108.012c6.568-4.726,14.62-7.512,23.311-7.512h352c8.691,0,16.743,2.787,23.311,7.513L277.122,218.814z"/>
            </g>
        </g>
    </svg>
`

function EmailLogo({ ...others }) {
  return (
    <SvgCss xml={xml} width="24" height="24" {...others} />
  )
}

export default EmailLogo

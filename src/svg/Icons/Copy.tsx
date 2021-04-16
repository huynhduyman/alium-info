import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" {...props}>
      <path
        d="M20 9.00244H11C9.89543 9.00244 9 9.89787 9 11.0024V20.0024C9 21.107 9.89543 22.0024 11 22.0024H20C21.1046 22.0024 22 21.107 22 20.0024V11.0024C22 9.89787 21.1046 9.00244 20 9.00244Z"
        stroke="#8990A5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        opacity="0.5"
        d="M5 15.0024H4C3.46957 15.0024 2.96086 14.7917 2.58579 14.4167C2.21071 14.0416 2 13.5329 2 13.0024V4.00244C2 3.47201 2.21071 2.9633 2.58579 2.58823C2.96086 2.21316 3.46957 2.00244 4 2.00244H13C13.5304 2.00244 14.0391 2.21316 14.4142 2.58823C14.7893 2.9633 15 3.47201 15 4.00244V5.00244"
        stroke="#8990A5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default Icon

import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
}

export const PaperPlaneIcon: React.FC<IconProps> = ({ width = 24, height = 24, ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 11L22 2L13 21L11 13L3 11Z"
        stroke="#49C3D0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PaperPlaneIcon

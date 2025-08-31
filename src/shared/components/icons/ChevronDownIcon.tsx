import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
}

export const ChevronDownIcon: React.FC<IconProps> = ({ width = 24, height = 24, ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="#667085"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevronDownIcon

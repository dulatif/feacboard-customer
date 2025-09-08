import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
}

export const SmileIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = '#101828', ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21C12 21 14.25 24 18 24C21.75 24 24 21 24 21M13.5 13.5H13.515M22.5 13.5H22.515M33 18C33 26.2843 26.2843 33 18 33C9.71573 33 3 26.2843 3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SmileIcon

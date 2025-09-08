import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
}

export const FlashCircleIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = '#292D32', ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.0189 19.0801H15.6289V25.1551C15.6289 26.0551 16.7389 26.4751 17.3389 25.8001L23.7289 18.5401C24.2839 17.9101 23.8339 16.9201 22.9939 16.9201H20.3839V10.8451C20.3839 9.94512 19.2739 9.52512 18.6739 10.2001L12.2839 17.4601C11.7289 18.0901 12.1789 19.0801 13.0189 19.0801Z"
        stroke={color}
        strokeWidth="2.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9531 33C26.2374 33 32.9531 26.2843 32.9531 18C32.9531 9.71573 26.2374 3 17.9531 3C9.66885 3 2.95312 9.71573 2.95312 18C2.95312 26.2843 9.66885 33 17.9531 33Z"
        stroke={color}
        strokeWidth="2.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default FlashCircleIcon

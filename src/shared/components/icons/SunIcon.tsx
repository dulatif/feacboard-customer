import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
}

export const SunIcon: React.FC<IconProps> = ({ width = 24, height = 24, ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6089_17681)">
        <path
          d="M9.99992 0.833252V2.49992M9.99992 17.4999V19.1666M3.51658 3.51658L4.69992 4.69992M15.2999 15.2999L16.4833 16.4833M0.833252 9.99992H2.49992M17.4999 9.99992H19.1666M3.51658 16.4833L4.69992 15.2999M15.2999 4.69992L16.4833 3.51658M14.1666 9.99992C14.1666 12.3011 12.3011 14.1666 9.99992 14.1666C7.69873 14.1666 5.83325 12.3011 5.83325 9.99992C5.83325 7.69873 7.69873 5.83325 9.99992 5.83325C12.3011 5.83325 14.1666 7.69873 14.1666 9.99992Z"
          stroke="#B54D6E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6089_17681">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SunIcon

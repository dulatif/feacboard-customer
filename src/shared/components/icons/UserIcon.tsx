import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
}

export const UserIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = '#667085', ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.0002 10.0013C12.3013 10.0013 14.1668 8.13582 14.1668 5.83464C14.1668 3.53345 12.3013 1.66797 10.0002 1.66797C7.69898 1.66797 5.8335 3.53345 5.8335 5.83464C5.8335 8.13582 7.69898 10.0013 10.0002 10.0013Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default UserIcon

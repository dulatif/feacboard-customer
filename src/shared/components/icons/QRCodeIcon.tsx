import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
}

export const QRCodeIcon: React.FC<IconProps> = ({ width = 24, height = 24, ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 18V13C4.5 8.02 8.52 4 13.5 4H18.5"
        stroke="#344054"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.5 4H35.5C40.48 4 44.5 8.02 44.5 13V18"
        stroke="#344054"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.5 32V35C44.5 39.98 40.48 44 35.5 44H32.5"
        stroke="#344054"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 44H13.5C8.52 44 4.5 39.98 4.5 35V30"
        stroke="#344054"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 14V18C21.5 20 20.5 21 18.5 21H14.5C12.5 21 11.5 20 11.5 18V14C11.5 12 12.5 11 14.5 11H18.5C20.5 11 21.5 12 21.5 14Z"
        stroke="#344054"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.5 14V18C37.5 20 36.5 21 34.5 21H30.5C28.5 21 27.5 20 27.5 18V14C27.5 12 28.5 11 30.5 11H34.5C36.5 11 37.5 12 37.5 14Z"
        stroke="#344054"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 30V34C21.5 36 20.5 37 18.5 37H14.5C12.5 37 11.5 36 11.5 34V30C11.5 28 12.5 27 14.5 27H18.5C20.5 27 21.5 28 21.5 30Z"
        stroke="#344054"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.5 30V34C37.5 36 36.5 37 34.5 37H30.5C28.5 37 27.5 36 27.5 34V30C27.5 28 28.5 27 30.5 27H34.5C36.5 27 37.5 28 37.5 30Z"
        stroke="#344054"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default QRCodeIcon

import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
}

export const LockSuccessIcon: React.FC<IconProps> = ({ width = 24, height = 24, ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.99996 15.8334C11.8409 15.8334 13.3333 14.341 13.3333 12.5C13.3333 10.6591 11.8409 9.16669 9.99996 9.16669C8.15901 9.16669 6.66663 10.6591 6.66663 12.5C6.66663 14.341 8.15901 15.8334 9.99996 15.8334Z"
        stroke="#667085"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.69995 12.5L9.24162 13.0417C9.39995 13.2 9.65828 13.2083 9.81662 13.05L11.3 11.6833"
        stroke="#667085"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.49998 18.3334H12.5C15.85 18.3334 16.45 16.9917 16.625 15.3584L17.25 10.3584C17.475 8.32502 16.8916 6.66669 13.3333 6.66669H6.66664C3.10831 6.66669 2.52498 8.32502 2.74998 10.3584L3.37498 15.3584C3.54998 16.9917 4.14998 18.3334 7.49998 18.3334Z"
        stroke="#667085"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25 6.39167V5.58334C6.25 3.70834 7.75833 1.86667 9.63333 1.69167C11.8667 1.47501 13.75 3.23334 13.75 5.42501V6.57501"
        stroke="#667085"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default LockSuccessIcon

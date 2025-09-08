import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
}

export const CartIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = '#101828', ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6883_9611)">
        <path
          d="M0.833496 0.833984H4.16683L6.40016 11.9923C6.47637 12.376 6.68509 12.7206 6.98978 12.9659C7.29448 13.2112 7.67574 13.3415 8.06683 13.334H16.1668C16.5579 13.3415 16.9392 13.2112 17.2439 12.9659C17.5486 12.7206 17.7573 12.376 17.8335 11.9923L19.1668 5.00065H5.00016M8.3335 17.5007C8.3335 17.9609 7.9604 18.334 7.50016 18.334C7.03992 18.334 6.66683 17.9609 6.66683 17.5007C6.66683 17.0404 7.03992 16.6673 7.50016 16.6673C7.9604 16.6673 8.3335 17.0404 8.3335 17.5007ZM17.5002 17.5007C17.5002 17.9609 17.1271 18.334 16.6668 18.334C16.2066 18.334 15.8335 17.9609 15.8335 17.5007C15.8335 17.0404 16.2066 16.6673 16.6668 16.6673C17.1271 16.6673 17.5002 17.0404 17.5002 17.5007Z"
          stroke={color}
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6883_9611">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CartIcon

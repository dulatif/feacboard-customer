import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
}

export const InstagramIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = '#667085', ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6844_39746)">
        <path
          d="M14.5827 5.41602H14.591M5.83268 1.66602H14.166C16.4672 1.66602 18.3327 3.5315 18.3327 5.83268V14.166C18.3327 16.4672 16.4672 18.3327 14.166 18.3327H5.83268C3.5315 18.3327 1.66602 16.4672 1.66602 14.166V5.83268C1.66602 3.5315 3.5315 1.66602 5.83268 1.66602ZM13.3327 9.47435C13.4355 10.1679 13.3171 10.8762 12.9941 11.4985C12.6712 12.1209 12.1603 12.6255 11.534 12.9407C10.9078 13.256 10.1981 13.3657 9.50584 13.2543C8.81362 13.1429 8.17415 12.8161 7.67838 12.3203C7.18261 11.8245 6.85579 11.1851 6.74441 10.4929C6.63302 9.80064 6.74274 9.09093 7.05795 8.46466C7.37317 7.83839 7.87784 7.32747 8.50017 7.00455C9.1225 6.68163 9.83081 6.56317 10.5243 6.66602C11.2318 6.77092 11.8867 7.10057 12.3924 7.60627C12.8981 8.11197 13.2278 8.76691 13.3327 9.47435Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6844_39746">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default InstagramIcon

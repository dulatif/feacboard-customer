import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
}

export const BrushIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = '#292D32', ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.8055 8.50466L9.67546 11.6247L7.33547 7.78469C6.48047 6.37469 6.93046 4.51469 8.34046 3.65969C9.75046 2.80469 11.6105 3.25467 12.4655 4.66467L14.8055 8.50466Z"
        stroke={color}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.7287 13.7384L12.9887 16.6185C10.2287 18.2985 9.3887 21.6885 10.7237 24.3885L13.7987 30.6585C14.7887 32.6835 17.1887 33.3884 19.1087 32.2034L28.7537 26.3385C30.6887 25.1685 31.1537 22.7235 29.8187 20.9085L25.6637 15.2985C23.8637 12.8685 20.4887 12.0584 17.7287 13.7384Z"
        stroke={color}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1361 7.64723L8.44922 12.3281L11.5698 17.4527L19.2567 12.7718L16.1361 7.64723Z"
        stroke={color}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.4609 25.2148L23.936 29.2799"
        stroke={color}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.625 27.5547L20.1 31.6197"
        stroke={color}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.3047 22.875L27.7797 26.94"
        stroke={color}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default BrushIcon

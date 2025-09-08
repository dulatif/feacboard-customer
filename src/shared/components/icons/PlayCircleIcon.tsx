import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
}

export const PlayCircleIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'white', ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.7969 22.2754C18.3197 22.2754 22.7969 17.7982 22.7969 12.2754C22.7969 6.75254 18.3197 2.27539 12.7969 2.27539C7.27403 2.27539 2.79688 6.75254 2.79688 12.2754C2.79688 17.7982 7.27403 22.2754 12.7969 22.2754Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.56641 12.506V10.836C9.56641 8.756 11.0364 7.906 12.8364 8.946L14.2864 9.786L15.7364 10.626C17.5364 11.666 17.5364 13.366 15.7364 14.406L14.2864 15.246L12.8364 16.086C11.0364 17.126 9.56641 16.276 9.56641 14.196V12.506Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PlayCircleIcon

import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
}

export const InvoiceIcon: React.FC<IconProps> = ({ width = 24, height = 24, ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.60829 16.4167C6.29163 15.6834 7.33329 15.7417 7.93329 16.5417L8.77496 17.6667C9.44996 18.5584 10.5416 18.5584 11.2166 17.6667L12.0583 16.5417C12.6583 15.7417 13.7 15.6834 14.3833 16.4167C15.8666 18 17.075 17.475 17.075 15.2584V5.86669C17.0833 2.50835 16.3 1.66669 13.15 1.66669H6.84996C3.69996 1.66669 2.91663 2.50835 2.91663 5.86669V15.25C2.91663 17.475 4.13329 17.9917 5.60829 16.4167Z"
        stroke="#667085"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.74668 9.16667H6.75417"
        stroke="#667085"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.08203 9.16669H13.6654"
        stroke="#667085"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.74668 5.83335H6.75417"
        stroke="#667085"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.08203 5.83331H13.6654"
        stroke="#667085"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default InvoiceIcon

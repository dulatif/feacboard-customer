import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
}

export const ReceiptIcon: React.FC<IconProps> = ({ width = 24, height = 24, ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.332 5.00008V7.01675C18.332 8.33342 17.4987 9.16675 16.182 9.16675H13.332V3.34175C13.332 2.41675 14.0904 1.66675 15.0154 1.66675C15.9237 1.67508 16.757 2.04175 17.357 2.64175C17.957 3.25008 18.332 4.08341 18.332 5.00008Z"
        stroke="#101828"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.66797 5.83341V17.5001C1.66797 18.1917 2.45128 18.5834 3.00128 18.1667L4.4263 17.1001C4.75963 16.8501 5.22631 16.8834 5.52631 17.1834L6.90962 18.5751C7.23462 18.9001 7.76799 18.9001 8.09299 18.5751L9.49298 17.1751C9.78465 16.8834 10.2513 16.8501 10.5763 17.1001L12.0013 18.1667C12.5513 18.5751 13.3346 18.1834 13.3346 17.5001V3.33341C13.3346 2.41675 14.0846 1.66675 15.0013 1.66675H5.83464H5.0013C2.5013 1.66675 1.66797 3.15841 1.66797 5.00008V5.83341Z"
        stroke="#101828"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 7.5H10" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.625 10.8333H9.375" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default ReceiptIcon

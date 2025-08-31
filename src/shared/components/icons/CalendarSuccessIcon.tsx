import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
}

export const CalendarSuccessIcon: React.FC<IconProps> = ({ width = 24, height = 24, ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.66663 1.66669V4.16669"
        stroke="#667085"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3334 1.66669V4.16669"
        stroke="#667085"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.91663 7.57501H17.0833"
        stroke="#667085"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3333 15.8333C18.3333 16.4583 18.1583 17.05 17.85 17.55C17.275 18.5167 16.2166 19.1667 15 19.1667C14.1583 19.1667 13.3916 18.8583 12.8083 18.3333C12.55 18.1167 12.325 17.85 12.15 17.55C11.8416 17.05 11.6666 16.4583 11.6666 15.8333C11.6666 13.9917 13.1583 12.5 15 12.5C16 12.5 16.8916 12.9417 17.5 13.6333C18.0166 14.225 18.3333 14.9917 18.3333 15.8333Z"
        stroke="#667085"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7 15.8333L14.5249 16.6583L16.2999 15.0167"
        stroke="#667085"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 7.08335V13.6333C16.8917 12.9417 16 12.5 15 12.5C13.1583 12.5 11.6667 13.9917 11.6667 15.8334C11.6667 16.4584 11.8417 17.05 12.15 17.55C12.325 17.85 12.55 18.1167 12.8083 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V7.08335C2.5 4.58335 3.75 2.91669 6.66667 2.91669H13.3333C16.25 2.91669 17.5 4.58335 17.5 7.08335Z"
        stroke="#667085"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.9962 11.4167H10.0037"
        stroke="#667085"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.91197 11.4167H6.91945"
        stroke="#667085"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.91197 13.9167H6.91945"
        stroke="#667085"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CalendarSuccessIcon

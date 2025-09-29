import React from 'react'
import styles from './ChatBubble.module.scss'

export interface ChatBubbleProps {
  text: string
  color: 'primary' | 'secondary'
  corner?: 'top-left' | 'top-right'
}
export const ChatBubble: React.FC<ChatBubbleProps> = ({ text, color, corner }) => {
  return (
    <div
      className={`${styles['chat-bubble']} ${styles[`chat-bubble--${color}`]}`}
      style={{
        borderRadius: 8,
        ...(corner === 'top-left' ? { borderTopLeftRadius: 0 } : {}),
        ...(corner === 'top-right' ? { borderTopRightRadius: 0 } : {}),
      }}
    >
      {text}
    </div>
  )
}

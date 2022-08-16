import React from 'react'

export default function Status({ addClassNames = '', children }) {
  return (
    <p className={`${addClassNames} font-bold text-center uppercase`}>
      {children}
    </p>
  )
}

import React from 'react'

export default function Btn({ addClassNames, onClick, children }) {
  return (
    <>
      <button
        className={`${addClassNames} py-5 text-white transition rounded-full px-7 hover:scale-105`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}

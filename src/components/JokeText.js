import React from 'react'

export default function JokeText({ addClassNames, children }) {
  return <p className={`${addClassNames} text-2xl text-center`}>{children}</p>
}

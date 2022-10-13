import React from 'react'

export default function Course({myCourse}) {
  return (
    <div>
      <div>{myCourse.name} <button>Details</button></div>
    </div>
  )
}

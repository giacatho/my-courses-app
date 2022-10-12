import React from 'react'

export default function Course({myCourse}) {
  return (
    <div>
      <div>Code: {myCourse.code}</div>
      <div>Name: {myCourse.name}</div>
      <div>Description: {myCourse.description}</div>
    </div>
  )
}

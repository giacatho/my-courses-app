import React from 'react'
import Course from './Course'

export default function ListCourse() {
  const myCourse1 = {
    id: 1,
    code: "FOPCS",
    name: "Fundamental of Programming in C Sharp",
    description: "FOPCS description"
  };

  const myCourse2 = {
    id: 2,
    code: "OOPCS",
    name: "Object Oriented Programming",
    description: "OOPCS description"
  };

  return (
    <div>
      <Course myCourse={myCourse1} />
      <div></div>
      <Course myCourse={myCourse2} />
    </div>
  )
}

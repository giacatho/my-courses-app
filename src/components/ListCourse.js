import React from 'react'
import Course from './Course'

export default function ListCourse({myCourseList}) {
  const listItems = myCourseList.map((myCourse) =>
    <div key={myCourse.id}>
      <Course myCourse={myCourse} />
    </div>
  );

  return (
    <div>
      {listItems}
    </div>
  )
}


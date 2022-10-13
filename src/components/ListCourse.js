import React, { useState } from 'react'
import Course from './Course'

export default function ListCourse({myCourseList}) {
  const [ activeId, updateActiveId ] = useState('');
  
  function handleCourseClick(id) {
    updateActiveId(id);
  }

  const listItems = myCourseList.map((myCourse) =>
    <div key={myCourse.id}>
      <Course myCourse={myCourse} handleCourseClick={handleCourseClick} />
    </div>
  );

  const activeCourse = myCourseList.find(myCourse => myCourse.id === activeId);

  function getActiveItem() {
    if (activeCourse) {
      return (
        <div>
          <h4>Active Course</h4>
          <div>Code: {activeCourse.code}</div>
          <div>Name: {activeCourse.name}</div>
          <div>Description: {activeCourse.description}</div>
        </div>
      );
    } 
    return <></>;
  }

  return (
    <div>
      {listItems}
      {getActiveItem()}
    </div>
  )
}


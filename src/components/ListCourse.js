import React, { useState } from 'react'
import Course from './Course'

export default function ListCourse({myCourseList}) {
  const [ detailId, updateDetailId ] = useState('');
  
  function handleCourseClick(id) {
    updateDetailId(id);
  }

  const listCourseHtml = myCourseList.map((myCourse) =>
    <div key={myCourse.id}>
      <Course myCourse={myCourse} handleCourseClick={handleCourseClick} />
    </div>
  );

  const detailCourse = 
    myCourseList.find(myCourse => myCourse.id === detailId);

  function getDetailCourseHtml() {
    if (detailCourse) {
      return (
        <div>
          <h4>Detail Course</h4>
          <div>Code: {detailCourse.code}</div>
          <div>Name: {detailCourse.name}</div>
          <div>Description: {detailCourse.description}</div>
        </div>
      );
    } 
    return <></>;
  }

  return (
    <div>
      {listCourseHtml}
      {getDetailCourseHtml()}
    </div>
  )
}


import React, { useState } from 'react'
import Course from './Course'
import CourseDetail from './CourseDetail';

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
        <CourseDetail detailCourse={detailCourse} />
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


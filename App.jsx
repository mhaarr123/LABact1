import React from 'react';

function CourseTable() {
  const courses = [
    { subject: 'Integrative Programming and Technologies 1 (Laboratory)', day: 'Thursday', time: '11:00 AM - 2:00 PM', room: 'TBA' },
    { subject: 'Database Management System 2 (Laboratory)', day: 'Thursday', time: '6:00 PM - 9:00 PM', room: 'CCS 303' },
    { subject: 'Networking 1 (Laboratory)', day: 'Thursday', time: ' 03:00PM - 06:00PM', room: 'CCS 302' },
    { subject: 'Web Development 2 (Laboratory)', day: 'Wednesday', time: ' 01:00PM - 04:00PM', room: 'CCS 301' },
    { subject: 'Introduction to Human Computer Interaction (Laboratory)', day: 'Wednesday', time: '10:00AM - 01:00PM', room: 'CCS 302' }
  ];

  return (
    <div>
      <h2>My Courses</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Subject Description</th>
            <th>Day</th>
            <th>Time</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.subject}</td>
              <td>{course.day}</td>
              <td>{course.time}</td>
              <td>{course.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseTable;
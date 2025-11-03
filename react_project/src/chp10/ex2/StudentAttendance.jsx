import React from "react"

const students = [
    {id: 1, name: "김철수", grade: 2, major: "인공지능소프트웨어"},
    {id: 2, name: "김짱구", grade: 1, major: "인공지능소프트웨어"},
    {id: 3, name: "김훈이", grade: 2, major: "인공지능소프트웨어"},
    {id: 4, name: "김맹구", grade: 2, major: "인공지능소프트웨어"},
    {id: 5, name: "김유리", grade: 2, major: "인공지능소프트웨어"}
]

function StudentAttendance() {
    return(
        <div>
            <h2>학생 출석부</h2>
            <ul>
                {
                    students.map((student)=>(
                        <li>
                            <b>{student.name}</b> - {student.grade}학년, {student.major}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default StudentAttendance;
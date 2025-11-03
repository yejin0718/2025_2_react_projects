import React from "react"
import "./AttendanceCard.css"
import img6 from './강하늘.png'

const students = [
    {id: 1, name: "김철수", grade: 2, major: "인공지능소프트웨어", avatar: "https://randomuser.me/api/portraits/men/1.jpg"}
]

function AttendanceCard() {
    return(
        <div className="attendance-container">
            <h2 className="attendance-title">학생 출석부</h2>
            <div className={"card-container"}>
                {
                    students.map((student)=>(
                        <div className={"student-card"}>
                            <img className={"student-avatar"} src={student.avatar} />
                            <div className={"student-info"}>
                                <h3>{student.name}</h3>
                                <p>{student.grade}학년 - {student.major}전공</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AttendanceCard;
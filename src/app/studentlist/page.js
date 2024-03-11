import Link from "next/link"

const StudentList = () => {
    const studentNames = [
        {
            id: 1,
            name: "Anil",
            pathname: "anil",
        },
        {
            id: 2,
            name: "Sam",
            pathname: "sam",
        },        {
            id: 3,
            name: "Peter",
            pathname: "peter",
        },        {
            id: 4,
            name: "Bruce",
            pathname: "bruce",
        },
    ]

    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {studentNames.map((student) => 
                    <li key={student.id}>
                        <Link href={"/studentlist/" + student.pathname}>{student.name}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default StudentList

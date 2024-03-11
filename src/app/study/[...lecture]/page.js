const Lecture = ({ params }) => {
  return (
    <div>
        <h1>Day of Lecture {params.lecture[0]}</h1>
        <h2>Lecture no. {params.lecture[1]}</h2>
    </div>
  )
}

export default Lecture

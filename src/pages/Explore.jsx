import { useState } from "react"
import { searchByCourseAndSchool } from "../functions/exploreFunctions";

export default function Explore() {
  const [school, setSchool] = useState('');
  const [course, setCourse] = useState('');

  const handleSchoolChange = e => setSchool(e.target.value);
  const handleCourseChange = e => setCourse(e.target.value);
  const handleSubmitButton = () => {
    searchByCourseAndSchool(course, school)
    .then(
      item => {
        console.log(item)
      }
    )
  }
  return (
    <div className="explore">
      <h1>Explore</h1>

      <h2>School</h2>
      <input type="text" value={school} onChange={handleSchoolChange} />

      <h2>Course</h2>
      <input type="text" value={course} onChange={handleCourseChange} />

      <input type="submit" value="submit" onClick={handleSubmitButton} />

    </div>
  )
}
function UserCard({ name, course, age, college, children}) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>

      <h2>Name: {name}</h2>
      <p>Course: {course}</p>
      <p>Age: {age}</p>
      <p>College: {college}</p>
    
        <div>
            {children}
        </div>
    </div>
  )
}

export default UserCard
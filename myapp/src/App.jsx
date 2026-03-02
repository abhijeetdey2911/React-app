import UserCard from "./components/userCard"

function App() {
  return (
    <div>
      <h1>Student Details</h1>

      <UserCard name="Abhijeet" course="MCA" age={20} college="VIT">
        <p>Topper of the class</p>
        <button>View profile</button>
      </UserCard>

      <UserCard name="Rahul" course="MBA" age={21} college="IIT">
        <button>View profile</button>
      </UserCard>


      <UserCard name="Sneha" course="MSc" age={19} college="DU">
        <button>View profile</button>
      </UserCard>

    </div>
  )
}

export default App
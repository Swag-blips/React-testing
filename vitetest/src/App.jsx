
import './App.css'
import UserProfile from "./UserProfile"
import Counter from "./Counter"
import Greeting from "./Greeting"

function App() {


  return (
    <>
      <Counter />
      <UserProfile userId={4} />
      <Greeting name={"Pedro"} />
    </>
  )
}

export default App

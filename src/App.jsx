import Home from "./pages/Home";

export default function App() {
  let userObject = {
    name:"anuj",
    age:25,
    email:"raidasanuj@gmail.com"
  }

  let userObject2 = {
    name:'ravi',
    age : 52,
    email: "ravi5@gmail.com"
  }
  return (
    <div>
      <Home  user={userObject} />
      <Home user2 = {userObject2}/>
    </div>
  )
}

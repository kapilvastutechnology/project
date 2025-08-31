
export default function Home({user}) {
  return (
    <div>
      <h1>this is home component</h1>
      <h2>{user.name}</h2>
      <h1>{user.age}</h1> 
      <h1>{user.email}</h1>
    </div>
  )
}

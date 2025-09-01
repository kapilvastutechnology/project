
//Faker (Example)
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { faker } from '@faker-js/faker'

// function App() {
//   const [data, setData] = useState([]); 

//   const handleAdd = () => {
//     const fake = {
//       username: faker.internet.username(),
//       avatar: faker.image.avatar(),
//       email: faker.internet.email(),
//     };
//     setData(prev => [...prev, fake]); 
//     console.log(fake);
//   };

//   return (
//     <>
//       <button onClick={handleAdd}>Click</button>
//       <ul>
//         {data.map((user, index) => (
//           <li key={index}>
//             <div>Username: {user.username}</div>
//             <div>Avatar: <img src={user.avatar} alt="avatar" width={50} /></div>
//             <div>Email: {user.email}</div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App




import { useState } from "react"
import { Button } from "./components/ui/button"
export default function App() {

  const [txt, setTxt] = useState("Hello World");

  const handleTxt = () =>{
    setTxt((prev)=> (prev === "Hello World" ? "Goodbye world" : "Hello World"))
  };
  return (
    <div>
      <h1>{txt}</h1>
      <Button 
      onClick={handleTxt}
      >toggles text</Button>
    </div>
  )
}



//(Example) to Color change

// import React, { useState } from 'react';
// import { Button } from './components/ui/button';
// export default function App() {
//   const [color, setColor] = useState('red');

//   return (
//     <div className="p-4 space-y-4">

//       <div className={`w-[100px] h-[100px] bg-${color}-500`}></div>

//       <div className="space-x-2">
//         <Button
//           onClick={() => setColor('red')}
//           className="px-4 py-2 bg-red-500 text-white rounded">
//           Red
//         </Button>



//         <Button
//           onClick={() => setColor('green')}
//           className="px-4 py-2 bg-green-500 text-white rounded"
//         >
//           Green
//         </Button>




//         <Button
//           onClick={() => setColor('blue')}
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//         >
//           Blue
//         </Button>


//       </div>
//     </div>
//   );
// }



//(Example) to check senior, junior and regular 

// import { useState } from "react";
// import { Button } from "./components/ui/button";

// export default function Home() {
//   const [random, setRandom] = useState(0);

//   const handleRandom = () => {
//     const randNum = Math.floor(Math.random() * 100) + 1;
//     setRandom(randNum);
//   };

//   return (
//     <div className="p-5 space-y-4">
//       <Button onClick={handleRandom}>Generate Random Number</Button>

//       <div className="text-lg font-medium">
//           <>
//             <p>Random Number: {random}</p>
//             {random > 50 ? (
//               <p>You are senior</p>
//             ) : random < 20 ? (
//               <p>You are junior</p>
//             ) : (
//               <p>You are regular</p>
//             )}
//           </>
      
//       </div>
//     </div>
//   );
// }

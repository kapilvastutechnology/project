import { FaAtom, FaFacebook, FaInstagram, FaLinkedin, FaSnapchat, FaTwitter } from "react-icons/fa6";
import IconComponent from "./components/IconComponent";
import Home from "./pages/home/Home";
export default function App() {
  return (
    <div>
      <div className="flex bg-black text-white gap-5 ">
      <IconComponent icon={<FaAtom  size={20}/>} />
      <IconComponent icon={<FaFacebook size={20}/>}/>
      <IconComponent icon={<FaInstagram size={20}/>}/>
      <IconComponent icon={<FaSnapchat size={20}/>}/>
      <IconComponent icon={<FaTwitter size={20}/>}/>
      <IconComponent icon={<FaLinkedin size={20}/>}/>
      </div>
    <Home/>

    
    </div>





  )
}

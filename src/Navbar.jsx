import { Link } from "react-router-dom"



const Navbar = () =>{
  return(
    <nav>
      <span><Link to="/">Home</Link></span>
      <span><Link to="/">About Us</Link></span>
    </nav>
  )
}

export default Navbar
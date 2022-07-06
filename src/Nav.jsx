import { Link } from "react-router-dom"



const Nav = () =>{
  return(
    <nav>
      <span><Link to="/">Home</Link></span>
      <span><Link to="/About-Us">About Us</Link></span>
    </nav>
  )
}

export default Nav
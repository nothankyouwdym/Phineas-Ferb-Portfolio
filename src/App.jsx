import { Outlet } from "react-router-dom"
import Nav from "./Nav"



const App = () =>{
  return(
    <section>
      <h1>Phineas and Ferb Portfolio</h1>
      <Nav />
      <Outlet />
    </section>
  )
}


export default App
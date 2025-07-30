import React from 'react'
import { Link } from 'react-router-dom'
function Nav(){
    return (
       <div className="navbar">
  <h1>PORTFOLIO</h1>
  <div className="nav-items">
     <Link to="/">home</Link>
      <Link to="/about">About</Link>
    
    <Link to="/service"> Service</Link>
    <Link to="/experience">Experience</Link>
    <Link to="/project">Project</Link>
    <Link to="/contact">Contact</Link>


    
  </div>
</div>

    )
}
export default Nav 
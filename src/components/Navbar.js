import Icon from "../task.png"
import React from 'react'

const Navbar = () => {
  return (
    <div><nav class="navbar bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="">
        <img src={Icon} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
    Task
      </a>
    </div>
  </nav></div>
  )
}

export default Navbar;
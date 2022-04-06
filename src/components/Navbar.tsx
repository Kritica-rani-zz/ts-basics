import React from 'react'
import './component.css'
const Navbar: React.FC = () => {
  return (
    <div className='navbar-main'>
      <h1>Slate.ai</h1>
      <div className='navbar-main__contents'>
        <div className='navbar-main__contents-tilte'>Home</div>
        <div className='navbar-main__contents-tilte'>Profile</div>
        <div className='navbar-main__contents-tilte'>Contact</div>
      </div>

    </div>
  )
}
export default Navbar;
import React, { useContext } from 'react'
import './Navbar.css'
import { socialContext } from '../Store/store-social'
import { Link } from 'react-router-dom'

function Navbar() {

const {setClickAddpost} = useContext(socialContext)


  return (
      <div className='navbar'>
        <div className='nav_div'>
          {/* <div className='nav_head' onClick={() => setClickAddpost(false)}> */}
          <div className='nav_head'>
            <Link to='/'>
            Social Media
            </Link>
          </div>
        </div>

      </div>
      
  )
}

export default Navbar

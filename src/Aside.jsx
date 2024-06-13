import React, { useContext, useState } from 'react'
import './Aside.css';
import { socialContext } from '../Store/store-social';
import { Link } from 'react-router-dom';


function Aside() {

  // const {setClickAddpost} = useContext(socialContext)  before using router concept

  


  return (
        <div className='inner_aside'>
          <div className='aside_ele'>
            {/* <div className='addPost' onClick={() => setClickAddpost(true)}> when we are not using router*/}

            <div className='addPost'>
              <Link to='/create-post'>
              Add Post
              </Link>
            </div>
            {/* <div className='seePost' onClick={ () => setClickAddpost(false)}> when we are not using router */}
            <div className='seePost' >
              <Link to='/'>
              See Post
              </Link>
            </div>
          </div>
        </div>  
  )
}

export default Aside

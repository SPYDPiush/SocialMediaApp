import React,{useContext, useState} from 'react'
import Aside from './Aside'
import Post from './Post'
import PostForm from './PostForm'
import './MainContext.css'
import { socialContext } from '../Store/store-social'
import { Outlet } from 'react-router-dom'

function MainContent() {


  const {clickaddpost}  = useContext(socialContext)

  // const [clickaddpost,setClickAddpost] = useState(false)

  // const tempPostList = [
  //   {
  //     title:"the man",
  //     disc:"the man is killed the seven people and hide very inteligent",
  //     tags:["man","killed","seven"]
  //   },
  //   {
  //     title:"the crow",
  //     disc:"the crow arrange a water from pot with the help of stone.",
  //     tags:["crow","stone","thristy","pots","water"]
  //   },
  //   {
  //     title:"the student",
  //     disc:"the student how want to do something better but not do anything perfectly only lust covered all intelgent",
  //     tags:["student","lust","focus","study"]
  //   }
  // ]

  // const [postlist,setPostlist] = useState(tempPostList)

  // const addNewItem = (item) => {

  // const newlist = [...postlist,item]

  // setPostlist(newlist)

  // }

  
  
  
  return (
    <div className='main_container'>
      <div className='aside_design'>
      {/* <Aside setClickAddpost={setClickAddpost}/>  when we are props property */}

      <Aside /> {/* while we are using useContext property*/}
      </div>
      <div className='post_design'>

        {/* {clickaddpost ? <PostForm addNewItem={addNewItem} setClickAddpost={setClickAddpost}/> : <Post postlist={postlist}/>} */}

        {/* {clickaddpost ? <PostForm /> : <Post />} */}

        <Outlet />

      </div>
      
      
    </div>
  )
}

export default MainContent

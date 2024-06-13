import React, { useContext } from 'react'
import './Post.css'
import PostCard from './PostCard'
import { socialContext } from '../Store/store-social'

function Post() {

  const {postlist} = useContext(socialContext)

  

  return (
    <main>

      <div className='post'>
        <div className='inner_post'>
          {
            postlist.map( (item) => <PostCard key={item.title} item={item}/>)
          }

        </div>
      </div>

      
    </main>
  )
}

export default Post

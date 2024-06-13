import React, { useContext } from 'react'
import './PostCard.css'
import { socialContext } from '../Store/store-social'

function PostCard({item}) {


  const {deletepost} = useContext(socialContext)


  return (
    <div className='postcard'>
      <div className='innercard'>
        <div className='card_title'>
          {item.title}
        </div>
        <div className='card_disc'>
          {item.body}
        </div>
        <div className='card_tags'>
          {item.tags.map( (tag,index) => <div key={index} className='card_tag'>
           {tag}
           </div>)}
        </div>
        <div className='deleteicon' onClick={() => deletepost(item)}>
          Delete
        </div>

      </div>
      
    </div>
  )
}

export default PostCard

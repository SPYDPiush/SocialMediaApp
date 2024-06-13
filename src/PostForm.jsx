import React, { useContext, useRef, useState } from "react";
import "./PostForm.css";
import { socialContext } from "../Store/store-social";
import { useNavigate } from "react-router-dom";

function PostForm(/*{addNewItem,setClickAddpost}*/) {
  // const [title, setTitle] = useState("");
  // const [disc, setDisc] = useState("");
  // const [tags, setTags] = useState([]);

  const {addNewItem,setClickAddpost} = useContext(socialContext)
  const navigate = useNavigate()

  ///////////////////// without useState //////////////////////////////

  const title = useRef()
  const disc = useRef()
  const tags = useRef()


  const handleonsubmit = (e) => {
    e.preventDefault()

    const temp = {
      title:title.current.value,
      disc:disc.current.value,
      tags:tags.current.value.split(' ')
    }

    addNewItem(temp)


    title.current.value = ""
    disc.current.value = ""
    tags.current.value = ""

    navigate('/')
 
  }

  return (
    <div className="postform">
      <form onSubmit={handleonsubmit}>
        <div className="title">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            placeholder="Enter the Title for post"
            id="title"
            ref={title}

            //////////////////   use in useState hook now we are done with the help of ref ///////////////
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="disc">
          <label htmlFor="disc">Discription:</label>
          <textarea
            cols={40}
            rows={10}
            placeholder="Write Post here."
            id="disc"
            ref={disc}
            // value={disc}
            // onChange={(e) => setDisc(e.target.value)}
          />
        </div>
        <div className="tags">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            placeholder="Enter Tags releated Post with spacing."
            id="tags"
            ref={tags}

            // value={tags}
            // onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default PostForm;

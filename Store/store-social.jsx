import { Children, createContext, useEffect, useState } from "react";

export const socialContext = createContext({
  clickaddpost: false,
  setClickAddpost: () => {},
  addNewItem: () => {},
  postlist: [],
  setPostlist: () => {},
  deletepost: () => {},
});

const SocialContextProvider = ({children}) => {
  const [clickaddpost, setClickAddpost] = useState(false);
  const [postlist, setPostlist] = useState([]);

  // for cleanup the useEffect hook 

  const controller =  new AbortController()
  const signal = controller.signal

  useEffect( () => {

    const fetchpost = async () => {
      try {
        await fetch('https://dummyjson.com/posts',{signal})
        .then(res => res.json())
        .then(data => data.posts)
        .then(data => setPostlist(data))
        
        
      } catch (error) {
        console.log("Error while fetching data ",error) 
      }

    }

    fetchpost()

    return () => {
       // cleanup the useEffect ////////
      controller.abort();
      console.log("useEffect abort")
    };
  },[])

  

  // const tempPostList = [
  //   {
  //     title: "the man",
  //     disc: "the man is killed the seven people and hide very inteligent",
  //     tags: ["man", "killed", "seven"],
  //   },
  //   {
  //     title: "the crow",
  //     disc: "the crow arrange a water from pot with the help of stone.",
  //     tags: ["crow", "stone", "thristy", "pots", "water"],
  //   },
  //   {
  //     title: "the student",
  //     disc: "the student how want to do something better but not do anything perfectly only lust covered all intelgent",
  //     tags: ["student", "lust", "focus", "study"],
  //   },
  // ];


  const addNewItem = (item) => {
    const newlist = [item,...postlist];

    setPostlist(newlist);
  };

  const deletepost = (item) => {
    const newlist = postlist.filter((post) => post != item);
    setPostlist(newlist);
  };

  return (
    <socialContext.Provider
      value={{
        clickaddpost,
        setClickAddpost,
        addNewItem,
        postlist,
        setPostlist,
        deletepost,
      }}
    >
      {children}


    </socialContext.Provider>
  );
};

export default SocialContextProvider;

import React, { useState, useEffect } from 'react'
import axios from 'axios'

function LiveSearch() {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");


  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);
  

  return (
<div className="searchContainer">
    <div className="form">
        <input type="text" id="search" placeholder="Seach..."/>
        <button id="button">Search</button>
    </div>
  
</div>
    
  )
}

export default LiveSearch
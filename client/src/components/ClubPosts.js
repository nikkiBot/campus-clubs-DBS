import React, {Fragment, useState, useEffect} from "react";
import { useLocation , Link} from "react-router-dom";

const ClubPosts = () =>{

    useEffect(()=>{
        getPosts();
    }, [])
    const location = useLocation();
   const clubId = location.state.clubId;
   const clubName = location.state.clubName;

   const [posts, setPosts ] = useState([]);

   const getPosts = async e => {
    try {
        //get posts for club
        
        const response = await fetch(`http://localhost:5000/campusclubs/post/getclubposts/${clubId}`);
        const jsonData = await response.json();
    
        console.log(jsonData.rows);
        setPosts(jsonData.rows);
    
     } catch (error) {
         console.error(error.message);
    }
   }

   //deletePost function : 
  
  const deletePost = async (id) => {
    try {
      const deletePost = await fetch(`http://localhost:5000/campusclubs/post/${id}`,{
        method: "DELETE" 
      });
      setPosts(post.filter(post => post.post_id != id));
      console.log(deletePost)
    } catch (err) {
      console.error(err.message)
    }
  }
   

    return(
        <Fragment>
                <h1 className="text-center mt-5">{clubName}</h1>
                <div class ="container">
                <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">
                        {posts.map(post =>(
                            <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{post.title}</h5>
                                <p class="card-text">{post.body}</p>
                                <p class="card-text">Attached media: <i>{post.media_link}</i></p>
                                <button className="btn btn-lg btn-danger" onClick = {()=> deletePost(post.post_id)} >Delete Post</button>
                            </div>
                            </div>
                        ))}
                    </li>
                </ul>
                </div>
        </Fragment>
    );
}

export default ClubPosts;
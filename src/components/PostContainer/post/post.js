import React from 'react';
import './post.css'

const Post = (props) => {
    return(
        <div className="post_class">
            <input className="post_input" type="text" placeholder="   Add a comment..."></input><button onClick={(e) => props.postaction(e)} className="post_button" type="sumit" value="Post">Post</button>
        </div>
    )
}


export default Post;
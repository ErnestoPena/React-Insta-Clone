import React from 'react';
import './postcontainer.css';
import Userinfo from './user/userinfo';
import Postcontent from './postcontent/postcontent';
import Useraction from './useractions/useraction';
import Messagesection from './messagesection/messagesection';
import Likes from './likes/likes';
import Post from './post/post';

class PostCont extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    
    return(
       <div className="wrapper"> 
            <div className="post_container">
                <Userinfo myuser = {this.props.mybarsearch}/>
                <Postcontent mypicture ={this.props.mybarsearch}/>
                <Useraction triggerlikes = {this.props.triggerlikes}/>
                <Likes likes_var = {this.props.mybarsearch}/>
                    {this.props.mybarsearch.comments.map(mess_map => (
                        <Messagesection message = {mess_map} key={mess_map.com_id}/>
                        ))}   
                <Post />    
            </div>
        </div>
    )
   }   
}

export default PostCont;
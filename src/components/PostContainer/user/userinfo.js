import React from 'react';
import './user.css'

const Userinfo = (props) => {
    console.log(props.myuser.thumbnailUrl);
    return(
        <div className="user_class">
            <img className="user_image" src={props.myuser.thumbnailUrl} alt="User Info"/> <div className="username_class"><a href="#">{props.myuser.username}</a></div>
        </div>
    )
}

export default Userinfo;
import React from 'react';
import './postcontent.css';
import { userInfo } from 'os';

const Postcontent = props => {
    return(
        <div className="postcontent_class">
            <img className="content_image" src={props.mypicture.imageUrl} alt=""/>
        </div>
    )
}

export default Postcontent;
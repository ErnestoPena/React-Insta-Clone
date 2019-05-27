import React from 'react';
import './useraction.css';
import message_logo from './comment-icon.png';
import like_heart_clear from './Instagram-Heart.png';
import like_heart_red from './Instagram-Heart-liked.png'
import share from './share.png'


const Useraction = props => {
    // console.log(props)
     var src_type = props.like_state === false ? like_heart_clear : like_heart_red;

    return(
        <div className="useraction_class">
            <div onClick={(e) => props.triggerlikes(e)}> <img className="message_logo" src={src_type} alt="Like Me"/></div>
            <div><img className="message_logo" src={message_logo} alt="Message"/></div>
            <div><img className="message_logo" src={share} alt="Share"/></div>
        </div>
    )
}

export default Useraction;
import React from 'react';
import './useraction.css';
import message_logo from './comment-icon.png';
import like_heart from './Instagram-Heart.png';
import share from './share.png';


const Useraction = props => {
    return(
        <div className="useraction_class">
            <div><img className="message_logo" src={like_heart} alt="Like Me"/></div>
            <div><img className="message_logo" src={message_logo} alt="Message"/></div>
            <div><img className="message_logo" src={share} alt="Share"/></div>
        </div>
    )
}

export default Useraction;
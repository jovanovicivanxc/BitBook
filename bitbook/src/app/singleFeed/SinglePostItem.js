import React from 'react';

const SinglePostItem = (props) => {
    if (props.type === 'video') {
        return <div className="post"  > <iframe width="400px" src={props.videoUrl} /> </div>
    }
    else if (props.type === 'image') {
        return <div className="post" > <img className="post" src={props.imageUrl} /> </div>
    }

    else if (props.type === 'text') {
        return <div className="post"> <p> {props.text} </p> </div>
    }

    return "should not happen";
}

export default SinglePostItem;
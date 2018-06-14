import React from 'react';
import { Link } from 'react-router-dom';
import ShowPost from './ShowPost';

const renderPost = (props) => {
    if (props.type === 'video') {
        return <div className="post"  > <iframe width="400px" src={props.videoUrl} /> <p className="description"> <span className="typeOfPost">  {props.type} post</span><Link to={`/SingleFeed/${props.type}/${props.id}`}> {props.commentsNum} comments </Link></p></div>
    }
    else if (props.type === 'image') {
        return <div className="post" > <img className="post" src={props.imageUrl} />  <p className="description"> <span className="typeOfPost">  {props.type} post  </span><Link to={`/SingleFeed/${props.type}/${props.id}`}>{props.commentsNum} comments </Link></p></div>
    }

    else if (props.type === 'text') { return <div className="post"> <p> {props.text} </p>  <p className="description"> <span className="typeOfPost">  {props.type} post </span><Link to={`/SingleFeed/${props.type}/${props.id}`}>{props.commentsNum} comments </Link></p></div> }
}

const PostItem = (props) => {
    return (
        renderPost(props)

        // console.log(props.text)
    )
}

export default PostItem;
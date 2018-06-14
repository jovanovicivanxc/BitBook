import React from 'react';

const CommentItem = (props) => {
    return (
        <div className="comment">
            <h3 className="commentAuthor"> {props.authorName} </h3>
            <p> {props.body} </p>
        </div>
    )
}

export default CommentItem;
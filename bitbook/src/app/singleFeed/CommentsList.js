import React from 'react';
import CommentItem from './CommentItem';

const CommentsList = (props) => {
    return (
        <div>
            {props.comments.map((comment) => <CommentItem {...comment} />)}
        </div>
    )


}

export default CommentsList;
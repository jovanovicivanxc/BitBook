import React from 'react';
import PostItem from './PostItem';

const PostList = (props) => {
    return (
        <div>
            {props.postType === "all" ? props.posts.map((post) => <PostItem {...post} onDelete={props.onDelete} />) :
                props.posts.filter(post => post.type === props.postType).map((post) => <PostItem {...post} onDelete={props.onDelete} />)}
        </div>
    );
}

export default PostList;
import React from 'react';
import PostItem from './PostItem';

const PostList = (props) => {
    return (
        <div>
            {props.posts.map((post) => <PostItem {...post} />)}
        </div>
    );
}

export default PostList;
import React from 'react';
import PostService from '../../services/PostService';
import PostsList from './PostsList';

class FeedPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        }
    }

    loadPosts() {
        PostService.getPosts()
            .then((posts) => {
                this.setState({
                    posts: posts,
                });
                console.log(posts);

            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    render() {
        return (
            <main>
                <PostsList posts={this.state.posts} />
            </main>
        )
    }
}

export default FeedPage;
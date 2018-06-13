import React from 'react'
import PostItem from '../feed/PostsList';
import PostService from '../../services/PostService';
import SinglePostItem from './SinglePostItem';
import CommentsList from './CommentsList';

class SingleFeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: "",
            comments: [],
        }
    }
    loadSinglePost() {
        if (this.props.match.params.type === "image") {
            PostService.getImages(this.props.match.params.id)
                .then((post) => {
                    console.log(post)
                    this.setState({
                        post: post,
                    })
                })
        }
        else if (this.props.match.params.type === "video") {
            PostService.getVideos(this.props.match.params.id)
                .then((post) => {
                    this.setState({
                        post: post,
                    })
                })
        }
        else if (this.props.match.params.type === "text") {
            PostService.getStrings(this.props.match.params.id)
                .then((post) => {
                    this.setState({
                        post: post,
                    })
                })
        }
    }
    loadComments() {
        PostService.getComments(this.props.match.params.id)
            .then((comments) => {
                console.log(comments)
                this.setState({
                    comments: comments,
                })
            })
    }


    componentDidMount() {
        this.loadSinglePost();
        this.loadComments();
    }

    render() {
        return (
            <main>
                <SinglePostItem {...this.state.post} />
                <CommentsList comments={this.state.comments} />
            </main>
        )

    }


}
export default SingleFeedPage;


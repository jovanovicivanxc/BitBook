import React from 'react'
import PostItem from '../feed/PostsList';
import PostService from '../../services/PostService';
import SinglePostItem from './SinglePostItem';
import CommentsList from './CommentsList';
import CommentService from '../../services/CommentService';

class SingleFeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: "",
            comments: [],
            comment: "",
        }
        this.handleInput = this.handleInput.bind(this);
        this.postComment = this.postComment.bind(this);

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

    postComment() {
        CommentService.postSingleComment(this.state.comment, this.props.match.params.id)
            .then((comment) => {
                this.loadComments();

                // console.log(comment)
                // this.setState({
                //     comment: comment
                // })
            })
    }

    handleInput(event) {
        console.log(event.target.value);

        this.setState({
            comment: event.target.value
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
                <input value={this.state.comment} onChange={this.handleInput} placeholder="Add your comment" />
                <button onClick={this.postComment}>SEND </button>
                <CommentsList comments={this.state.comments} />
            </main>
        )

    }


}
export default SingleFeedPage;


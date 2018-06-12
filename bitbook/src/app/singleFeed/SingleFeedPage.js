import React from 'react'
import PostItem from '../feed/PostsList';
import PostService from '../../services/PostService';
import SinglePostItem from './SinglePostItem';
import CommentsList from './CommentsList'

class SingleFeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: "",
            comment: "",
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
        else if (this.props.match.params.type === "string") {
            PostService.getStrings(this.props.match.params.id)
                .then((post) => {
                    this.setState({
                        post: post,
                    })
                })
        }
        loadComments() { // Problem sa zagradom
            PostService.getComments(this.props.match.params.id)
                .then((comment) => {
                    console.log(comment)
                    this.setState({
                        comment: comment,
                    })
                })
        }
    }


    componentDidMount() {
        this.loadSinglePost();
        this.loadComments();
    }


    render() {
        return (
            <main>
                <SinglePostItem {...this.state.post} />
                <CommentsList {...this.state.comment} />
            </main>
        )

    }


}
export default SingleFeedPage;


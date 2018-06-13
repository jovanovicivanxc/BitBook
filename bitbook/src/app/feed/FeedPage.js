import React from 'react';
import PostService from '../../services/PostService';
import PostsList from './PostsList';
import newPostImg from './images/newpost.png';
import Modal from 'react-responsive-modal';
import TextPostService from '../../services/TextPostService';

class FeedPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            open: false,
            postContent: "",
        }

        this.handleTextInput = this.handleTextInput.bind(this);
        this.postTextPost = this.postTextPost.bind(this);
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

    onOpenModal = () => {
        this.setState({ open: true });
    };
    onCloseModal = () => {
        this.setState({ open: false });
    };

    postTextPost() {
        TextPostService.postSingleText(this.state.postContent, this.props.match.params.id)
            .then((postContent) => {
                this.loadPosts();

            })
    }

    handleTextInput(event) {
        console.log(event.target.value);

        this.setState({
            postContent: event.target.value
        })
    }

    render() {
        const { open } = this.state;
        return (
            <main>
                <PostsList posts={this.state.posts} />

                <div>
                    <Modal open={open} onClose={this.onCloseModal} center>
                        <h4>New post</h4>
                        <p> Post content </p>
                        <input value={this.state.postContent} onChange={this.handleTextInput} />
                        <button onClick={this.postTextPost}> POST </button>
                    </Modal>
                </div>

                <div id="container-floating">

                    <button onClick={this.onOpenModal} className="nd4 nds" data-toggle="tooltip" data-placement="left" data-original-title="contract@gmail.com"><img className="reminder" />
                        <p className="letter">Post</p>
                    </button>
                    <div className="nd3 nds" data-toggle="tooltip" data-placement="left" data-original-title="Reminder"><img className="reminder" />
                        <p className="letter">Video</p> </div>
                    <div className="nd1 nds" data-toggle="tooltip" data-placement="left" data-original-title="Edoardo@live.it"><img className="reminder" />
                        <p className="letter">Image</p>
                    </div>

                    <div id="floating-button" data-toggle="tooltip" data-placement="left" data-original-title="Create" onclick="newmail()">
                        <p className="plus">+</p>
                        <img className="edit" src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png" />
                    </div>

                </div>

            </main>
        )
    }
}

export default FeedPage;
import React from 'react';
import PostService from '../../services/PostService';
import PostsList from './PostsList';
import Modal from 'react-responsive-modal';
import TextPostService from '../../services/TextPostService';
import VideoPostService from '../../services/VideoPostService';
import ImagePostService from '../../services/ImagePostService';

class FeedPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            postType: "all",
            open: false,
            open2: false,
            open3: false,
            postContent: "",
            postVideoContent: "",
            postImageContent: "",
        }

        this.handleTextInput = this.handleTextInput.bind(this);
        this.handleVideoInput = this.handleVideoInput.bind(this);
        this.handleImageInput = this.handleImageInput.bind(this);

        this.postTextPost = this.postTextPost.bind(this);
        this.postVideoPost = this.postVideoPost.bind(this);
        this.postImagePost = this.postImagePost.bind(this);

        this.loadPosts = this.loadPosts.bind(this);

    }

    loadPosts() {
        PostService.getPosts()
            .then((posts) => {
                this.setState({
                    posts: posts,
                });
            });
    }

    loadVideoOnly = () => {
        this.setState({ postType: 'video' });
    };

    loadImageOnly = () => {
        this.setState({ postType: 'image' });
    };

    loadTextOnly = () => {
        this.setState({ postType: 'text' });
    };

    loadAllPosts = () => {
        this.setState({ postType: 'all' });
    };

    componentDidMount() {
        this.loadPosts();
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
    onOpenModal2 = () => {
        this.setState({ open2: true });
    };
    onOpenModal3 = () => {
        this.setState({ open3: true });
    };
    onCloseModal = () => {
        this.setState({ open: false });
    };
    onCloseModal2 = () => {
        this.setState({ open2: false });
    };
    onCloseModal3 = () => {
        this.setState({ open3: false });
    };

    postTextPost() {
        TextPostService.postSingleText(this.state.postContent, this.props.match.params.id)
            .then((postContent) => {
                this.loadPosts();
            })
    }

    postVideoPost() {
        VideoPostService.postSingleVideo(this.state.postVideoContent, this.props.match.params.id)
            .then((postVideoContent) => {
                this.loadPosts();
            })
    }

    postImagePost() {
        ImagePostService.postSingleImage(this.state.postImageContent, this.props.match.params.id)
            .then((postImageContent) => {
                this.loadPosts();
            })
    }

    handleTextInput(event) {
        this.setState({
            postContent: event.target.value,
        })
    }

    handleVideoInput(event) {
        this.setState({
            postVideoContent: event.target.value,
        })
    }

    handleImageInput(event) {
        this.setState({
            postImageContent: event.target.value,
        })
    }

    render() {
        const { open } = this.state;
        const { open2 } = this.state;
        const { open3 } = this.state;

        return (
            <main>
                <aside className="filterMenu">
                    <br />
                    <p > Show on feed </p>
                    <div class="dropdown">
                        <button class="dropbtn" onClick={this.loadAllPosts} >All posts</button>
                        <div class="dropdown-content">
                            <a onClick={this.loadVideoOnly}>Videos</a>
                            <a onClick={this.loadImageOnly}>Images</a>
                            <a onClick={this.loadTextOnly}>Text</a>
                        </div>
                    </div>

                </aside>
                <section>
                    <PostsList posts={this.state.posts} postType={this.state.postType} onDelete={this.loadPosts} />

                    <div>
                        <Modal open={open} onClose={this.onCloseModal} center>
                            <h4>New post</h4>
                            <p> Post content </p>
                            <input value={this.state.postContent} onChange={this.handleTextInput} />
                            <button onClick={this.postTextPost}> POST </button>
                        </Modal>
                    </div>

                    <div>
                        <Modal open={open2} onClose={this.onCloseModal2} center>
                            <h4>New video post</h4>
                            <p> Post content </p>
                            <input value={this.state.postVideoContent} onChange={this.handleVideoInput} />
                            <button onClick={this.postVideoPost}> POST </button>
                        </Modal>
                    </div>

                    <div>
                        <Modal open={open3} onClose={this.onCloseModal3} center>
                            <h4>New image post</h4>
                            <p> Post content </p>
                            <input value={this.state.postImageContent} onChange={this.handleImageInput} />
                            <button onClick={this.postImagePost}> POST </button>
                        </Modal>
                    </div>



                    <div id="container-floating">

                        <button onClick={this.onOpenModal} className="nd4 nds" data-toggle="tooltip" data-placement="left" data-original-title="contract@gmail.com"><img className="reminder" />
                            <p className="letter">Post</p>
                        </button>
                        <button onClick={this.onOpenModal2} className="nd3 nds" data-toggle="tooltip" data-placement="left" data-original-title="Reminder"><img className="reminder" />
                            <p className="letter">Video</p> </button>
                        <button onClick={this.onOpenModal3} className="nd1 nds" data-toggle="tooltip" data-placement="left" data-original-title="Edoardo@live.it"><img className="reminder" />
                            <p className="letter">Image</p>
                        </button>

                        <div id="floating-button" data-toggle="tooltip" data-placement="left" data-original-title="Create" onclick="newmail()">
                            <p className="plus">+</p>
                            <img className="edit" src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png" />
                        </div>

                    </div>
                </section>
            </main>
        )
    }
}

export default FeedPage;
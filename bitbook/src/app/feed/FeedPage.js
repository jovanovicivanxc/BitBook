import React from 'react';
import PostService from '../../services/PostService';
import PostsList from './PostsList';
import newPostImg from './images/newpost.png';
import Modal from 'react-responsive-modal';

class FeedPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            open: false,
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

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <main>
                <PostsList posts={this.state.posts} />

                <div>
                    <button onClick={this.onOpenModal}>Open modal</button>
                    <Modal open={open} onClose={this.onCloseModal} center>
                        <h2>Simple centered modal</h2>
                    </Modal>
                </div>

                <div id="container-floating">

                    <div className="nd4 nds" data-toggle="tooltip" data-placement="left" data-original-title="contract@gmail.com"><img className="reminder" />
                        <p className="letter">Post</p>
                    </div>
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
import React from 'react';
import ProfileService from '../../services/ProfileService';
import SingleProfile1 from './SingleProfile1';
import SingleProfile2 from './SingleProfile2';
import Modal from 'react-responsive-modal';
import defImg from './def.png';


class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {},
            open: false,
            name: "",
            description: "",
            imgUrl: "",
        }
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
        this.handleImgUrlInput = this.handleImgUrlInput.bind(this);
        this.postUpdate = this.postUpdate.bind(this);
    }

    loadProfile() {
        ProfileService.getProfile()
            .then((profile) => {
                this.setState({
                    profile: profile,
                    name: profile.name,
                    description: profile.about,
                    imgUrl: profile.avatarUrl,
                });
            });
    }

    postUpdate() {
        ProfileService.UpdateProfile(this.state.name, this.state.profile.email, this.state.description, this.state.description, this.state.imgUrl)
            .then(() => {
                this.loadProfile();

            })
    }

    handleNameInput(event) {
        console.log(event.target.value)
        this.setState({
            name: event.target.value
        })
    }

    handleDescriptionInput(event) {
        console.log(event.target.value)
        this.setState({
            description: event.target.value
        })
    }

    handleImgUrlInput(event) {
        console.log(event.target.value)
        this.setState({
            imgUrl: event.target.value
        })
    }

    componentDidMount() {
        this.loadProfile();
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
                <SingleProfile1 profile={this.state.profile} />
                <button onClick={this.onOpenModal} > Edit profile </button>
                <SingleProfile2 profile={this.state.profile} />
                <div>
                    <Modal open={open} onClose={this.onCloseModal} center>
                        <h4>Update profile</h4>
                        <p>Name </p>
                        <input value={this.state.name} onChange={this.handleNameInput} placeholder="Full Name" />
                        <br />
                        <input value={this.state.description} onChange={this.handleDescriptionInput} placeholder="User description and all text that describes user" />
                        <br />
                        <input value={this.state.imgUrl} onChange={this.handleImgUrlInput} placeholder="image URL" />
                        <br />
                        <img className="uploadImg" src={defImg} alt="img" />
                        <input type="file" name="pic" accept="image/*" />
                        <br />
                        <button onClick={this.onCloseModal} >CLOSE</button>
                        <input type="button" onClick={() => { this.postUpdate(); this.onCloseModal() }} value="UPDATE" />

                    </Modal>
                </div>

            </main>
        )
    }
}

export default ProfilePage;
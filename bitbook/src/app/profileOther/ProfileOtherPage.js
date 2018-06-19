import React from 'react';
import ProfileService from '../../services/ProfileService';
import SingleProfile from './SingleProfile';

class ProfileOtherPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {},
            name: "",
            description: "",
            imgUrl: "",
        }
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
        this.handleImgUrlInput = this.handleImgUrlInput.bind(this);
        this.postUpdate = this.postUpdate.bind(this);
    }

    loadProfile(id) {
        ProfileService.getOtherProfile(this.props.match.params.id)
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

    componentDidMount(id) {
        this.loadProfile(id);
    }

    render() {
        const { open } = this.state;

        return (
            <main>
                <SingleProfile profile={this.state.profile} />
            </main>
        )
    }
}

export default ProfileOtherPage;
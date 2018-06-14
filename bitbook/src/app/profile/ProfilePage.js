import React from 'react';
import ProfileService from '../../services/ProfileService';
import SingleProfile from './SingleProfile';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: "",
        }
    }

    loadProfile() {
        ProfileService.getProfile()
            .then((profile) => {
                this.setState({
                    profile: profile,
                });
            });
    }

    componentDidMount() {
        this.loadProfile();
    }

    render() {
        return (
            <main>
                <SingleProfile profile={this.state.profile} />
            </main>
        )
    }
}

export default ProfilePage;
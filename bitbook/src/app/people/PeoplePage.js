import React from 'react';
import ProfileService from '../../services/ProfileService';
import UsersList from './UsersList';

class PeoplePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            inputText: "",

        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        console.log(event.target.value);
        this.setState({
            inputText: event.target.value,
        })
    }

    loadUsers() {
        ProfileService.getUsers()
            .then((users) => {
                this.setState({
                    users: users,
                });
                console.log(users);
            });
    }

    componentDidMount() {
        this.loadUsers();
    }
    render() {
        return (
            <main>
                <br />
                <input className="searchBox" type="text" value={this.state.inputText} onChange={this.handleInput} />
                <UsersList inputText={this.state.inputText} users={this.state.users} />
            </main>
        )
    }
}

export default PeoplePage;

import React from 'react';
import PeopleService from '../../services/PeopleService';
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
        PeopleService.getUsers()
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
                {this.state.users.map((user) => user.name.includes(this.state.inputText) ? <UsersList users={this.state.users} /> : <p>No search results </p>)}
            </main>
        )
    }
}

export default PeoplePage;

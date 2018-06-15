import React from 'react';
import PeopleService from '../../services/PeopleService';
import UsersList from './UsersList';

class PeoplePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
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
                <input type="text" />
                <UsersList users={this.state.users} />
            </main>
        )
    }
}

export default PeoplePage;

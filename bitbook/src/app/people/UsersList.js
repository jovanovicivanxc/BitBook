import React from 'react';
import UserItem from './UserItem';

const UsersList = (props) => {
    return (
        <div>
            {props.users.map((user) => <UserItem {...user} />)}
        </div>
    );
}

export default UsersList;
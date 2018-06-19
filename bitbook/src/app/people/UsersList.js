import React from 'react';
import UserItem from './UserItem';

const UsersList = (props) => {
    return (
        <div>
            {props.users.filter(user => user.name.includes(props.inputText)).map((user) => <UserItem {...user} />)}
        </div>
    );
}

export default UsersList;
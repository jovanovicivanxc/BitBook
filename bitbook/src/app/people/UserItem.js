import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
    return (
        <div className="userItem">
            <img className="avatar" src={props.avatarUrl} alt="img" />
            <h3 className="userName"><Link to={`/Profile`}> {props.name} </Link></h3>
            <br />
            <br />
            <p className="userAbout"> {props.aboutShort}</p>
            <p className="userDate"> Last post at {props.lastPostDate.slice(11, 16)} </p>
        </div >

    )
}

export default UserItem;
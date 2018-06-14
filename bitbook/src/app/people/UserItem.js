import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
    return (
        <div className="userItem">
            <img className="avatar" src={props.avatarUrl} />
            <h3 className="userName"><Link to={`/SingleAuthorPage/${props.id}`}> {props.name} </Link></h3>
            <br />
            <br />
            <p className="userAbout"> {props.aboutShort}</p>
            <p> Last post at {props.lastPostDate.slice(11, 16)} </p>


        </div >

    )
}

export default UserItem;
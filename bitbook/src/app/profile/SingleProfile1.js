import React from 'react';

const SingleProfile1 = (props) => {
    return (
        <div>
            <img className="profPic" src={props.profile.avatarUrl} />
            <br />

        </div>
    )
}

export default SingleProfile1;

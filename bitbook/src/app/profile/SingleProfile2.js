import React from 'react';

const SingleProfile2 = (props) => {
    return (
        <div>
            <br />
            <p className="profName"> {props.profile.name}</p>
            <br />
            <p className="profAbout"> {props.profile.about}</p>
            <br />

            <div className="profPost"><span className="profC">&nbsp;c&nbsp;</span> {props.profile.postsCount} posts </div>
            <div className="profPost"><span className="profC">&nbsp;c&nbsp;</span>  {props.profile.commentsCount} comments</div>

        </div>
    )
}

export default SingleProfile2;

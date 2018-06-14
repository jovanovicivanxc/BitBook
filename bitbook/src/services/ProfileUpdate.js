import Axios from 'axios';
import serviceUrl from '../shared/Constants';

class ProfileUpdate {
    UpdateProfile(name, email, aboutShort, about, avatarUrl) {
        return Axios({
            method: 'PUT',
            url: `${serviceUrl}profiles`,
            headers: {
                'key': 'bitbookdev',
                'sessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
                'content-type': 'application/json',
            },
            data: {
                name: name,
                email: email,
                aboutShort: aboutShort,
                about: about,
                avatarUrl: avatarUrl,
            }

        })

    }
}

export default new ProfileUpdate();
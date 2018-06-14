import Axios from 'axios';
import serviceUrl from '../shared/Constants';
import Profile from '../entities/Profile';


class ProfileService {
    getProfile() {
        return Axios.get(`${serviceUrl}profile`, {
            headers: {
                'key': 'bitbookdev',
                'sessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
            }
        })
            .then(function (response, data) {
                const prof = response.data
                return new Profile(prof.userId, prof.name, prof.email, prof.aboutShort, prof.about, prof.avatarUrl, prof.postsCount, prof.commentsCount)
            }
            )
    }
}

export default new ProfileService();

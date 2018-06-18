import Axios from 'axios';
import serviceUrl from '../shared/Constants';
import Profile from '../entities/Profile';
import User from '../entities/User';


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

    getOtherProfile(id) {
        return Axios.get(`${serviceUrl}users/${id}`, {
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
    getUsers() {
        return Axios.get(`${serviceUrl}users`, {
            headers: {
                'key': 'bitbookdev',
                'sessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
            }
        })
            .then(function (response, data) {
                data = response.data
                return data.map((user) => {
                    return new User(user.id, user.name, user.aboutShort, user.lastPostDate, user.avatarUrl)
                }
                )
            }
            )
    }
}

export default new ProfileService();

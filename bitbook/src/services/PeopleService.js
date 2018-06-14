import Axios from 'axios';
import serviceUrl from '../shared/Constants';
import User from '../entities/User';

class PeopleService {
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

export default new PeopleService();

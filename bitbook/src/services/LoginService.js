import Axios from 'axios';
import serviceUrl from '../shared/Constants';

class LoginService {
    login(username, password) {
        return Axios({
            method: 'post',
            url: `${serviceUrl}login`,
            headers: {
                'key': 'B0DD28D',
                'sessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
                'content-type': 'application/json',
            },
            data: {
                username: username,
                password: password,
            }
        })
    }

    register(name, email, password) {
        return Axios({
            method: 'post',
            url: `${serviceUrl}register`,
            headers: {
                'key': 'B0DD28D',
                'sessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
                'content-type': 'application/json',
            },
            data: {
                name: name,
                username: email,
                email: email,
                password: password,
            }
        })
    }
}

export default new LoginService();

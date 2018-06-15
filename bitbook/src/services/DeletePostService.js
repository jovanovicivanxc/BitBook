import Axios from 'axios';
import serviceUrl from '../shared/Constants';

class DeletePostService {
    DeletePost(id) {
        return Axios({
            method: 'DELETE',
            url: `${serviceUrl}Posts/${id}`,
            headers: {
                'key': 'bitbookdev',
                'sessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
                'content-type': 'application/json',
            },
            data: {
                id: id,
            }
        })
    }
}

export default new DeletePostService();
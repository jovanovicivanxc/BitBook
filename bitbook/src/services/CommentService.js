import Axios from 'axios';
import serviceUrl from '../shared/Constants';

class CommentService {
    postSingleComment(body, postId) {
        return Axios({
            method: 'post',
            url: `${serviceUrl}Comments/`,

            headers: {
                'key': 'bitbookdev',
                'sessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
                'content-type': 'application/json',
            },
            data: {
                body: body,
                postId: postId
            }

        })

    }
}

export default new CommentService();
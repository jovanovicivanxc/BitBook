import Axios from 'axios';
import serviceUrl from '../shared/Constants';

class ImagePostService {
    postSingleImage(imageUrl, userId) {
        return Axios({
            method: 'post',
            url: `${serviceUrl}ImagePosts/`,
            headers: {
                'key': 'bitbookdev',
                'sessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
                'content-type': 'application/json',
            },
            data: {
                imageUrl: imageUrl,
                userId: userId
            }

        })

    }
}

export default new ImagePostService();
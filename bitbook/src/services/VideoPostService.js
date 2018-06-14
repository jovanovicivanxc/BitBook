import Axios from 'axios';
import serviceUrl from '../shared/Constants';

class VideoPostService {
    postSingleVideo(videoUrl, userId) {
        return Axios({
            method: 'post',
            url: `${serviceUrl}VideoPosts/`,
            headers: {
                'key': 'bitbookdev',
                'sessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
                'content-type': 'application/json',
            },
            data: {
                videoUrl: videoUrl,
                userId: userId
            }

        })

    }
}

export default new VideoPostService();
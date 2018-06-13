import Post from './Post';

class VideoPost extends Post {
    constructor(videoUrl, id, dateCreated, userId, userDisplayName, type, commentsNum) {
        super(id, dateCreated, userId, userDisplayName, type, commentsNum)
        this.videoUrl = videoUrl;
    }
}

export default VideoPost;
import Post from './Post';

class ImagePost extends Post {
    constructor(imageUrl, id, dateCreated, userId, userDisplayName, type, commentsNum) {
        super(id, dateCreated, userId, userDisplayName, type, commentsNum)
        this.imageUrl = imageUrl;
    }
}

export default ImagePost;
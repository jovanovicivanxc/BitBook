import Post from './Post';

class TextPost extends Post {
    constructor(text, id, dateCreated, userId, userDisplayName, type, commentsNum) {
        super(id, dateCreated, userId, userDisplayName, type, commentsNum)
        this.text = text;
    }
}

export default TextPost;
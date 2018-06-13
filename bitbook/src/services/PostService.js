import Axios from 'axios';
import serviceUrl from '../shared/Constants';
import TextPost from '../entities/TextPost';
import VideoPost from '../entities/VideoPost';
import ImagePost from '../entities/ImagePost';
import Comment from '../entities/Comment';

class PostService {
    getPosts() {
        return Axios.get(`${serviceUrl}Posts`, {
            headers: {
                'key': 'bitbookdev',
                'sessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
            }
        })
            .then(function (response, data) {
                data = response.data
                return data.map((post) => {

                    if (post.type === 'text') {
                        return new TextPost(post.text, post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum)
                    }
                    else if (post.type === 'video') {
                        return new VideoPost(post.videoUrl, post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum)
                    }
                    else if (post.type === 'image') {
                        return new ImagePost(post.imageUrl, post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum)
                    }
                })
            }
            )
    }

    getImages(id) {
        return Axios.get(`${serviceUrl}ImagePosts/${id}`, {
            headers: {
                'key': 'bitbookdev',
                'sessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
            }
        })
            .then(function (response, data) {
                const post = response.data

                return new ImagePost(post.imageUrl, post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum);
            });
    }

    getVideos(id) {
        return Axios.get(`${serviceUrl}VideoPosts/${id}`, {
            headers: {
                'key': 'bitbookdev',
                'sessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
            }
        })
            .then(function (response, data) {
                const post = response.data

                return new VideoPost(post.videoUrl, post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum);
            });
    }
    getStrings(id) {
        return Axios.get(`${serviceUrl}TextPosts/${id}`, {
            headers: {
                'key': 'bitbookdev',
                'sessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
            }
        })
            .then(function (response, data) {
                const post = response.data

                return new TextPost(post.text, post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum);
            });
    }

    getComments(id) {
        return Axios.get(`${serviceUrl}Comments/?postid=${id}`, {
            headers: {
                'key': 'bitbookdev',
                'sessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
            }
        })
            .then(function (response, data) {
                return response.data.map((comment) => new Comment(comment.id, comment.dateCreated, comment.body, comment.postId, comment.authorName, comment.authorId));
            });
    }
}

export default new PostService();
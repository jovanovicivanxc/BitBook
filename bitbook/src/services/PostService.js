import serviceUrl from '../shared/Constants';

class PostService {
    getPosts(title, content) {
        return fetch(`${serviceUrl}Posts`)
            .then(response => response.json())
            .then((data) => {
                return data;
            })
    }
}
export default PostService;
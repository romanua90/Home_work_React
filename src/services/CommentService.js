export class CommentService {
    url = 'https://jsonplaceholder.typicode.com/comments';

    getAllComments() {
        return fetch(this.url)
            .then(value => value.json())
            .then(value => {
                return value
            })

    }

    getCommentById(id) {
        return fetch(`${this.url}/${id}`)
            .then(value => value.json())
            .then(value => {
                return value
            })
    }
}
export default class UserPostService {
 url='https://jsonplaceholder.typicode.com'
    getAllUsers() {
        return fetch(`${this.url}/users`)
            .then(value => value.json())
            .then(value => value)
    }

    getAllPostsforUser(id) {
        return fetch(`${this.url}/posts?userId=${id}`)
            .then(value => value.json())
            .then(value => value)
    }
}
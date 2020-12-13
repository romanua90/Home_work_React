export class UserService {
    url = 'https://jsonplaceholder.typicode.com/users';

    getAllUsers() {
        fetch(this.url)
            .then(value => value.json())
            .then(value => value)
    }

    getUserById(id) {
        fetch(`${this.url}/${id}`)
            .then(value => value.json())
            .then(value => value)
    }
}
export default class UserPostService {

    getAllUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())

            }

}
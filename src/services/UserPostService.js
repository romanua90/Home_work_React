export default class UserPostService {

    getAllUsers() {
       return  fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => value)
            }

}
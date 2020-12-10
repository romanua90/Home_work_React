export class PostService{
    url='https://jsonplaceholder.typicode.com/posts';
    async getAllPost(){
        return await fetch(this.url)
            .then (value => value.json())
               }
    async getPostbById(id){
        return await fetch(`${this.url}/${id}`)
            .then(value => value.json())
    }
}
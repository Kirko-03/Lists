import axios from "axios"

export  class postsAPI{
    static async  fetchPosts(){
        let response=await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
        }
}
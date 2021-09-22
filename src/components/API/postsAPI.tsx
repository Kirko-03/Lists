import axios from "axios"

export  class postsAPI{
    static async  fetchPosts(limit:number,page:number){
        let response=await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
                _limit:limit,
            _page:page
            }
        })
        return response
        }
}
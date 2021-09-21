import { useState } from "react"

export const useFetching = (callback:()=>any) =>{
    let [isLoading,setIsLoading] = useState<boolean>(true)
    let [error,setError] = useState('')
      async function fetchPosts(){
          try{
        setIsLoading(true)
        await callback()
          }
           catch(e:any){
             setError(e.message) 
           }
           finally{
            setIsLoading(false)
           }
        }
        return {isLoading,error,fetchPosts}
}
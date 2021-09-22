import { useState } from "react"

export const useFetching = (callback:(...args:any)=>any) =>{
    let [isLoading,setIsLoading] = useState<boolean>(true)
    let [error,setError] = useState('')
      async function fetchPosts(...args:any){
          try{
        setIsLoading(true)
        await callback(...args)
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
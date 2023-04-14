import { useEffect, useState } from "react"

// const makeRequest = (url, method, body=null) => {
//     const data = {
//         method: method,
//         headers:{'Content-Type': 'application/json'},
//     }

//     if (body) {
//         data.body = JSON.stringify(body)
//     }

//     fetch(url, data)
//     .then(res => {

//     })
// }

const useFetch = (content)=>{
    const[val,setVal]=useState(null)
    const[error,setError]=useState(null)
    const[ispending,setIsPendding]=useState(true)
    useEffect(()=>{
        const abortc= new AbortController()
        fetch('https://app.shrtco.de/',{
        signal :abortc.signal,
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({
                content
            })
        })
        .then(res=>{
            if(!res.ok){
                throw Error('could not fetch data from resources')
            }
            return res.json()})
        .then(data=>{
            console.log(data)
            setIsPendding(false)
            setVal(data.data)
            setError(null)
        })
        .catch(err=>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            }
            else{
                setIsPendding(false)
                  setError(err.message)
            }
            
        })
        return()=> abortc.abort()
    },[content])
    return[val,ispending,error]
}
export default useFetch
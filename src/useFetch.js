import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
const [is_pending, setIs_pending] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
        setTimeout(() => {
            fetch(url)
    .then(res => {
        if(!res.ok){
            throw Error("Cannot fetch data from the server")
        }
       return res.json()
    })
    .then(data => {
        setData(data)
        setIs_pending(false)
        setError(null)
    }).catch(err => {
        setError(err.message)
        setIs_pending(false)
    })
}, 1000)
        }, [url])


return {data, is_pending, error}
}

export default useFetch
import { useState , useEffect} from "react";
import BlogList from "./BlogList";


const Homepage = () => {

const [blogs, setBlogs] = useState(null)
const [is_pending, setIs_pending] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
        fetch("http://localhost:8000/blogs")
    .then(res => {
        if(!res.ok){
            throw Error("Cannot fetch data from the server")
        }
       return res.json()
    })
    .then(data => {
        setBlogs(data)
        setIs_pending(false)
        setError(null)
    }).catch(err => {
        setError(err.message)
        setIs_pending(false)
    })
}, [])

// const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id)
//     setBlogs(newBlogs)
// }

    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {is_pending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Homepage;
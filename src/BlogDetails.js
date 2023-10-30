import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const { id } = useParams()
    const {data: blog, is_pending, error} = useFetch("http://localhost:8000/blogs/" + id)
    const history = useHistory()
    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        }).then( () => {
            history.push('/')
        })
    } 
    return (
        <div className="blog-details">
            { is_pending && <div>Loading...</div> }
            { error && <div>{error}</div> }
            { blog && 
                <article>
                    <h2 className="blog-title">{blog.title}</h2>
                    <p className="author">Written by {blog.author}</p>
                    <p className="body">{blog.body}</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            }
        </div>
    );
}
 
export default BlogDetails;
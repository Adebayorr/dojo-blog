import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Homepage = () => {
const {error, is_pending, data: blogs} = useFetch("http://localhost:8000/blogs")

    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {is_pending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Homepage;
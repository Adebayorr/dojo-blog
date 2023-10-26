import { useState , useEffect} from "react";
import BlogList from "./BlogList";


const Homepage = () => {

const [blogs, setBlogs] = useState([
    {title: "My First Journey to Guatemala", author: 'Harry', id: 1},
    {title: "The Endangered Jewels of Africa", author: 'Bayor', id: 2},
    {title: "The Pace-Setter", author: 'Bayor', id: 3}
])
const [name, setName] = useState('Bitcoin')
useEffect(() => {
    console.log("UseEffect ran")
}, [name])

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
}

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
           {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Bayor")} title="Bayor's Blog"/> */}
           <button onClick={() => setName('Ethereum')}>Change Name</button>
           <p>{name}</p>
        </div>
     );
}
 
export default Homepage;
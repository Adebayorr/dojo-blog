const BlogList = (props) => {
    const {blogs, title, handleDelete} = props
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
            <div className="blog-details" key={blog.id}>
                <h2 className="title">{blog.title}</h2>
                <p className="author">written by {blog.author}</p>
                <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
            </div>
           ))}
        </div>
     );
}
 
export default BlogList;
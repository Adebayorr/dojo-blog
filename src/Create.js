import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {


    const [title, setTitle] = useState('')
    const [body, setBody ]  = useState('')
    const [author, setAuthor] = useState('Harry')
    const [is_pending, set_isPending] = useState(false)
    const history = useHistory()
    function handleSubmit (e) {
        e.preventDefault()
        const blog = {title, body, author}
        set_isPending(true)
        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers :{"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() =>  {
            console.log("Added a new blog")
            setAuthor("")
            setBody("")
            setTitle("")
            set_isPending(false)
            history.push('./')
        })

    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text"
                    value={title} 
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Content</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}>

                </textarea>
                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Bayor">Bayor</option>
                    <option value="Harry">Harry</option>
                </select>
                { !is_pending && <button>Create Blog</button> }
                { is_pending && <button disabled>Creating Blog...</button> }
                
            </form>
        </div>
     );
}
 
export default Create;
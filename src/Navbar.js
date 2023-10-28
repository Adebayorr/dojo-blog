import { Link} from "react-router-dom" 
const Navbar = () => {
    const pointer = {
        cursor: 'pointer'
    }
    return ( 
        <div>
            <nav className="navbar">
                <h1 className="logo">The Dojo Blog</h1>
                <div className="links">
                    <Link to="/" style={pointer}>Home</Link>
                    <Link to="/create" style={pointer}>New Blogs</Link>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;
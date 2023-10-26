const Navbar = () => {
    const pointer = {
        cursor: 'pointer'
    }
    return ( 
        <div>
            <nav className="navbar">
                <h1 className="logo">The Dojo Blog</h1>
                <div className="links">
                    <a href="/" style={pointer}>Home</a>
                    <a href="/create" style={pointer}>New Blogs</a>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;
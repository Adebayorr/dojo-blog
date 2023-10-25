const Homepage = () => {
    const handleClick = () => {
        console.log("Hello, Ninja")
    }

    const handleClickAgain = (name) => {
        console.log("Hello, " + name)
    }

    // const handleDOMElement = (e) => {
    //     console.log(e.target)
    // }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => {
                handleClickAgain("Mahmoud")
            }}>Click Again</button>
        </div>
     );
}
 
export default Homepage;
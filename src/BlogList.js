import {Link} from "react-router-dom"
const BlogList = (props) => {
    const { blogs, title } = props
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`./blogs/${blog.id}`}>
                    <h2 className="title">{blog.title}</h2>
                    <p className="author">written by {blog.author}</p>
                </Link>
            </div>
           ))}  
        </div>
     );
}
 
export default BlogList;



// {
//     "blogs" : [
//         {
//             "title": "My First Journey to Guatemala", 
//             "body": "My first journey to Guatemala was nothing short of a breathtaking adventure. From the moment I set foot in this Central American gem, I was captivated by its vibrant culture, lush landscapes, and warm-hearted people. \nExploring the ancient Mayan ruins of Tikal was a surreal experience, as I marveled at the grandeur of these ancient civilizations. The colorful markets in Antigua left me in awe of the local craftsmanship and textiles, while the bustling streets of Guatemala City offered a taste of urban life in this enchanting country. \nBut it was the natural beauty that truly stole my heart. The shimmering waters of Lake Atitlán, surrounded by towering volcanoes, were a sight to behold, and the dense jungles of Petén were alive with the calls of exotic birds and monkeys. \nGuatemala's rich tapestry of history, culture, and natural wonders make it a must-visit destination for any traveler seeking an unforgettable adventure.",
//             "author" : "Harry", 
//             "id": 1
//         },
//         {
//         "title": "The Endangered Jewels of Africa", 
//         "body": "Africa, the cradle of biodiversity, is home to some of the most magnificent and endangered species on our planet. These remarkable creatures are the true jewels of the African wilderness, and their survival is a critical concern for conservationists worldwide.\nThe African elephant, with its iconic tusks and gentle demeanor, faces the relentless threat of poaching for ivory. The regal lion, once considered the king of the jungle, is struggling to maintain its reign as habitat loss and human-wildlife conflict continue to pose serious challenges. The enigmatic rhinoceros, with its ancient armor-like skin, is on the brink of extinction due to demand for its horns.\nBut it's not just the charismatic megafauna that needs our protection. Africa's rhinoceros, pangolins, African wild dogs, and countless other species all play unique roles in maintaining the delicate balance of their ecosystems.\nConservation efforts, anti-poaching initiatives, and wildlife sanctuaries are working tirelessly to safeguard these precious jewels, but the battle is far from over. It is our collective responsibility to ensure the survival of Africa's endangered species, for they are not just Africa's jewels; they are a global heritage worth preserving for generations to come.",
//         "author": "Bayor", 
//         "id": 2},
//         {
//         "title": "The Pace-Setter",
//         "body": "In a world of rush and race,\nThere's a steady, guiding grace.\nThe pace-setter, calm and wise,\nLeads with purpose, under open skies.\nIn haste, others may come and go,\nBut the pace-setter lets wisdom flow.\n With each step, a lesson shared,\nIn their presence, souls are bared.\nThey set the tempo, strong and true,\nWhile others wonder what to do.\n In their wake, we find our way,\nA beacon in the light of day. ", 
//         "author": "Bayor", 
//         "id": 3
//     }
//     ]
// }
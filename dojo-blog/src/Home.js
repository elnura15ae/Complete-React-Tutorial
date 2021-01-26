import {useState} from 'react';

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        {title:'My new website', body:'lore ipsum...', author: 'Mario', id:1},
        {title:'Welcome to party', body:'lore ipsum...', author: 'Yoshi', id:2},
        {title:'Web dev top tips', body:'lore ipsum...', author: 'Nuri', id:3}
    ])



    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-review" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
    
        </div>
     )
}
 
export default Home;
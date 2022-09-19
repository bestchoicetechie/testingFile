import { useState, useEffect } from "react";

const Blogs = () =>{
    const [blogs,setBlogs] = useState([]);
    const [loading,setLoading] = useState(true);
   

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((response)=> response.json()).then((data)=> {
            setBlogs(data)
        })
    }, []);

    return (
        <div>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id} role="listitem">{blog.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Blogs



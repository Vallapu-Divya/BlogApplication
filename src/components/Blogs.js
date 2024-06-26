import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import Blog from './Blog'

const Blogs = () => {
  
    const [blogs, setBlogs] = useState()
    const sendRequest = async () => {
        /* const res = await axios.get("https://mern-blog-app-2022.herokuapp.com/api/blog").catch((err) => {console.log(err)}); */
        const res = await axios.get("http://localhost:5000/api/blog").catch((err) => {console.log(err)});
        const data = await res.data;
        return data
      }

    useEffect(() => {
        sendRequest().then(data => setBlogs(data.blogs))
    
      }, [])
  return (
    <div>
        {blogs && blogs.map((blog, index) => (
      <Blog  id={blog._id} isUser = { localStorage.getItem('userId') === blog.user._id} 
      title = {blog.title} description ={blog.description} 
      imageURL = {blog.image} userName = {blog.user.name}/>))}
      
    </div>
  )
}

export default Blogs
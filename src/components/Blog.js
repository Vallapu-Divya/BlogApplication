import React from 'react'
//import {Card, CardContent, Typography, CardHeader, CardMedia, Avatar } from '@mui/material'
import { Box, Card, CardContent, Typography, CardHeader, CardMedia, Avatar , IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Blog = ({title, description, imageURL, userName,isUser,id}) => {

    const navigate = useNavigate()
    const handleEdit = (e) => {
        navigate(`/myBlogs/${id}`)
    }
  
    
    const deleteRequest = async () =>{
      //const res = await axios.delete(`https://mern-blog-app-2022.herokuapp.com/api/blog/${blogId}`).catch((err) => {console.log(err)})
      const res = await axios.delete(`http://localhost:5000/api/blog/${id}`).catch(err => console.log(err))
      const data = await res.data
      
      return data
    }
  
  
    const handleDelete = () => {
  
      deleteRequest().then(()=>navigate("/")).then(()=>navigate("/blogs"));
    }
  return (
    <div>  <Card sx={{ width: "40%", margin:'auto',mt:2,padding:2,boxShadow : "5px 5px 10px #ccc",":hover:":{boxShadow : "10px 10px 20px #ccc"} }}>

{ isUser && (
        <Box display="flex">
          <IconButton sx={{marginLeft:"auto"}} onClick={handleEdit} > <EditIcon color="primary" /></IconButton>
          <IconButton onClick={handleDelete }> <DeleteIcon color="primary" /> </IconButton>
        </Box>
      )}
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          {userName}
        </Avatar>
      }
     
      title={title}
      //subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="194"
      image={imageURL}
      alt="Paella dish"
    />
    
    <CardContent>
    <hr/>
    <br/>
      <Typography variant="body2" color="text.secondary">
       <b>{userName}</b> {":"} {description}
      </Typography>
    </CardContent>
    
  </Card></div>
  )
}

export default Blog
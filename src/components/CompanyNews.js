import React, { useEffect, useState } from "react"
import { API_URL, API_KEY } from './Config';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import NewsImage from "./NewsImage";




export default function CompanyNews() {  

  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`${API_URL}news/AAPL?token=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setPosts(data) // new
      })
  }, [])


  return (
    <Container maxWidth=" ">
    <NewsImage/>
    <List component="nav" aria-label="main mailbox folders">
    {posts.map(item => (
        <div key={item.title}>
        <ListItem button onClick >
            <ListItemText
            primary={item.headline}
            secondary={item.summary}
            />
        </ListItem>
        <Divider/>
        </div>
    ))}  
    </List>


    
    </Container>
  )
}
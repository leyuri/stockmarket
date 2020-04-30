import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { API_URL, API_KEY } from './Config';




export default function CompanyList() {  

  const [companys, setCompanys] = useState([])
  useEffect(() => {
    fetch(`${API_URL}stock/symbol?exchange=US&token=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setCompanys(data) // new
      })
  }, [])


  return (
    <Container maxWidth=" ">
      CompanyList
    <List component="nav" aria-label="main mailbox folders">
    {companys.map(item => (
        <div key={item.symbol}>
        <ListItem>
            <ListItemText
            primary={item.description}
            secondary={item.displaySymbol}
            />
        </ListItem>
        <Divider/>
        </div>
    ))}  
    </List>
    </Container>
  )
}


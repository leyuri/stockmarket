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


// class CompanyList extends Component{
//   componentDidMount() {
//     this.props.fetchCompanyList();
//   }

//   render() {
//     const arr_company = ['AAPL','IBM','ADRE'];
//     var company_list = this.props.company_list;
//     if (!company_list || company_list.length === 0) {
//       return <div/>;
//     }
//     return (
//       <Container maxWidth=" ">
//       <List component="nav" aria-label="main mailbox folders">
//       { _.map(arr_company => (
//           <div key={arr_company}>
//           <ListItem button onClick >
//               <ListItemText
//               primary={arr_company}
//               secondary={arr_company}
//               />
//           </ListItem>
//           <Divider/>
//           </div>
//       ))}  
//       </List>
//       </Container>
//     )
//   }
// }

// function mapStateToProps(state) {
//   return {
//     company_list: state.company_list.data,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchCompanyList }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
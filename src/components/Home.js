import React from 'react'
import Container from '@material-ui/core/Container';
import Chart from './Chart.js'
import CompanyList from './CompanyList.js'




function Home() {
    return (
        <Container maxWidth=" ">
        {/* <Chart/> */}
        <CompanyList/>

        </Container>

    )
}

export default Home

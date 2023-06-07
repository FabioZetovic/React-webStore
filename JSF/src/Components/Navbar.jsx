import React from 'react'
import styled from'styled-components'
import{ Search , ShoppingCartOutlined }from"@material-ui/icons"
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';



const Container = styled.div`
    height: 60px;
    margin-bottom: 10px;
`

const Omot = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const Livo = styled.div`
flex:1;
display: flex;
align-items: center;
`;

const TrazilicaCont = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
width: 40%;
justify-content: space-between;
`;

const Upis = styled.input`
    border: none;
    width: 90%;
`

const Sredina = styled.div`
flex:1;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    font-size: 50px;
    color: black;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    
`

const Desno = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 20px;
    cursor: pointer;
    margin-left: 35px;
    color: black;
`
const Pocetna = styled.a`
    color: black;
    font-size: 20px;
    cursor: pointer;
`
const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
   
    return (
    <Container>
        <Omot>
            <Livo>
                <Link to="/">
                <Pocetna> Početna </Pocetna>
                </Link>
                <TrazilicaCont>
                    <Upis placeholder='Potraži'/>
                    <Search style = {{color:"gray",fontSize:16}}/>
                </TrazilicaCont>
            </Livo>
            <Sredina>
            <Logo style={{ textDecoration: 'none' }}>Fabeo.</Logo></Sredina>
            <Desno>
                <Link to = "/Logiraj">
                <MenuItem>Logiraj se</MenuItem>
                </Link>
                <Link to = "/Kosarica">
                <MenuItem>
                <Badge badgeContent={quantity} color="primary" >
                    <ShoppingCartOutlined></ShoppingCartOutlined>
                </Badge>
                </MenuItem>
                </Link>
            </Desno>
        </Omot>
    </Container>
  )
}

export default Navbar
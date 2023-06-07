import React, {useContext} from 'react'
import styled from 'styled-components'
import {UserContext} from '../Context/UserCont';
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #a3f5f5;
    align-items: center;
    display: flex;
    justify-content: center;
    
`

const Omot = styled.div`
    height: 50%;
    width: 50%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #d3eaff;
   
`

const Gemail = styled.h1`
    color: red;
    font-weight: 600;
    align-items: center;
    display: flex;
    justify-content: center;
    z-index: 2;
`
const TextCaps = styled.h1`
color: black;
font-weight: 500;
font-size: 40px;
    
`
const Leenk = styled.h1`
color: blue;
font-size: 20px;
`
const Uspjeh = () => {

    const {gmail} = useContext(UserContext);

  return (
    <Container>
    <Omot>
        <TextCaps>Email je poslan na ovu adresu:</TextCaps>
        <br />
        <Gemail>
                {gmail}
        </Gemail>
        <br />
        <Link to = "/"> <Leenk>Vrati se na početnu</Leenk> </Link>
    </Omot>
    </Container>
  )
}

export default Uspjeh
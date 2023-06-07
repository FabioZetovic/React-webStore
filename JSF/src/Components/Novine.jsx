import styled from 'styled-components'
import { Send } from '@material-ui/icons'
import React, { useContext } from 'react'

import {UserContext} from '../Context/UserCont';

import { Link } from 'react-router-dom'
const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Naslov = styled.h1`
font-size:70px;
margin-bottom: 20px;

`
const Opis = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border:1px solid lightgray;
`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
font-size: 20px;
`
const Button = styled.button`
flex: 1;
border: none;
background-color: #054545;
color: #ffffff;
cursor: pointer;
transition:all 0.5s ease;
&:hover{
    background-color: #ffffff;
    color: #054545

}
`

const Novine = () => {

  const {setGmail} = useContext(UserContext);

  return (
    
    <Container>
        <Naslov>Obavjesti</Naslov>
        <Opis> Dobivajte obavjesti o našim proizvodima</Opis>
        <InputContainer>
            <Input placeholder='Vaš email' onChange={(event)=>{setGmail(event.target.value);}}/>
            <Link to="Uspjeh">
              <Button><Send/></Button>
            </Link>
        </InputContainer>

    </Container>
  )
}

export default Novine
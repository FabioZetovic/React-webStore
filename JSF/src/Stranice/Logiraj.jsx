import React, { useState } from 'react'
import styled from'styled-components'
import { Link } from 'react-router-dom'
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:
    url("https://www.teahub.io/photos/full/225-2252925_men-jewelry.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 80%;

    align-items: center;
    display: flex;
    justify-content: center;
`
const Omotac = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
`
const Naslov = styled.h1`
    font-size: 30px;
    font-weight: 300;
    color: black;
`
const Form = styled.form`
    display: flex;
 flex-direction: column;
    

`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:10px 0px ;
    padding: 10px;
    font-size: 20px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    color: white;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 10px;
    &:disabled{
        color: black;
        background-color: gray;
        opacity: 0.6;
        cursor: not-allowed;

    }
`
const Error = styled.span`
    color: red;
`

/*const Stvar = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`*/


const Logiraj = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state)=>state.user);

 

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch,{username, password})
      
      };
  return (
    <Container>
        
        <Omotac>
            <Naslov>LOGIRAJ SE</Naslov>
            <Form>
                <Input type="text" placeholder='Korisničko ime' onChange={(e)=>setUsername(e.target.value)}/>
                <Input type="text" placeholder='Šifra' onChange={(e)=>setPassword(e.target.value)}/>
                <Button onClick={handleClick} disabled={isFetching}>LOGIRAJ SE</Button>
                {error && <Error>Nešto je pošlo po zlu</Error>}
                <Link to="/" style={{color:"teal"}}>
                 Početna 
                </Link>
                <Link to = "/Registriraj" style={{color:"teal"}}>Napravi novi račun </Link>
            </Form>
        </Omotac>
        </Container>
  )
}

export default Logiraj
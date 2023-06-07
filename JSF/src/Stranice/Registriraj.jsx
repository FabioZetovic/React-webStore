import React from 'react'
import styled from'styled-components'
import {  useRef } from "react";
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:
    url("https://ak.picdn.net/shutterstock/videos/7311988/thumb/9.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 80%;

    align-items: center;
    display: flex;
    justify-content: center;
`
const Omotac = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
`
const Naslov = styled.h1`
    font-size: 30px;
    font-weight: 300;
    color: black;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    

`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:20px 10px 0px 0px ;
    padding: 10px;
    font-size: 20px;
`

const Suglasnost = styled.span`
    font-size: 20px;
    margin: 20px 0px;
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
`
const Registriraj = () => {

    const fokus = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        fokus.current.focus();
      };
  return (
      
    <Container>
        <Omotac>
            <Naslov>NAPRAVI RAČUN</Naslov>
            <Form style={{display:'flex'}}>
                <Input type="text" placeholder='Ime'  ref={fokus}/>
                <Input type="text" placeholder='Prezime' />
                <Input type="text" placeholder='Korisničko ime' />
                <Input type="text" placeholder='Gmail' />
                <Input type="text" placeholder='Šifra' />
                <Input type="text" placeholder='Potvrdi Šifru' />
                <Suglasnost>Izradom računa pristajem na obradu mojih osobnih podataka,
                podatci u skladu s <b>POLITIKOM PRIVATNOSTI</b></Suglasnost>
                
                <Button onClick={handleSubmit} style={{flex:1}}>NAPRAVI</Button>
            </Form>
            <Link to="/" style={{float:"none", flex:1, alignItems:"center",justifyContent:"center",margin:"45%",fontSize:"1.3rem",color:"red",fontFamily:"monospace"}}>
                 Početna 
                </Link>
        </Omotac>
        </Container>
  )
}

export default Registriraj
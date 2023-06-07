
import React from 'react'
import styled from'styled-components'
import { Link } from 'react-router-dom'
const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Infor = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    font-size: 50px;

`

const Button=styled.button`
    border: none;
    padding: 10px;
    font-size: 15px;
    background-color: white;
    color: grey;
    cursor: pointer;
    font-weight: 600;
`


const KategorijaProizvod = ({item}) => {
  return (
    <Container>
        <Link to={`/ListaProdukta/${item.cat}`}>
        <Image src={item.img}/>
        <Infor>
            <Title>{item.title}</Title>
            <Link to = "/ListaProdukta">
            <Button>POGLEDAJ</Button>
            </Link>
        </Infor>
        </Link>
    </Container>
  )
}

export default KategorijaProizvod
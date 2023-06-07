import React, { useState } from 'react'
import styled from'styled-components'
import{ ArrowLeftOutlined , ArrowRightOutlined }from"@material-ui/icons"
import { sliderItems } from '../podaci'
import { Link } from 'react-router-dom'
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    margin-top: 2%;

`

const Strelica = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "lijeva" && "10px"};
right:${props => props.direction === "desna" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.6;
z-index: 2;
`
const Omotac = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);

`
const Slajd = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};
`

const ImgContainer = styled.div`
height: 100%;
flex: 1;
`;

const Slika = styled.img`
height: 80%;
margin-top: 5%;
    
`

const InfoContainer = styled.div`
flex: 1;
padding: 10%;
align-items: center;
justify-content: center;
`;

const Naslov = styled.h1`
    font-size: 70px;
`
const Opis = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Botun = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: #eaeaf0;
    cursor: pointer;
`


const Slajder = () => {

    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction) => {

        if(direction==="lijeva"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

  return (
    <Container>
        <Strelica direction="lijeva" onClick={()=>handleClick("lijeva")}>
            <ArrowLeftOutlined></ArrowLeftOutlined>
        </Strelica>
        <Omotac slideIndex = { slideIndex }>
            {sliderItems.map(item=>(
            <Slajd bg={item.bg} key={item.id}>
            <ImgContainer>
                <Slika src={item.img}/>
            </ImgContainer>
            <InfoContainer>

            <Naslov>{item.title}</Naslov>
            <Opis>{item.desc}</Opis>
            <Link to = "/ListaProdukta/chain">
            <Botun>POGLEDAJ</Botun>
            </Link>
            </InfoContainer>
            </Slajd>
            ))}
        </Omotac>
        <Strelica direction="desna" onClick={()=>handleClick("desna")}>
            <ArrowRightOutlined></ArrowRightOutlined>
        </Strelica>
    </Container>
  )
}

export default Slajder
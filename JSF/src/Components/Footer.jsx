import { Instagram, MapOutlined, Twitter , AlternateEmailOutlined , PhoneIphoneOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    display: flex;

`
const Lijevo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 0px;
`
const Drustvene = styled.div`
display: flex;
`
const DrustvenaIkona = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 10px;
`

const Sredina = styled.div`
   flex: 1; 
   padding: 20px;
`

const Naslov = styled.h3`
margin-bottom: 30px;
`
const Lista = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`

const Ulisti = styled.li`
width: 50%;
margin-bottom: 10px;
`


const Desno = styled.div`
    flex: 1;
    padding: 20px;
`

const Kontakt = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Placanje = styled.img`
    width: 50%;
`




const Footer = () => {
  return (
    <Container>
        <Lijevo>
           <Logo>FABEO.</Logo>
           <Desc>S vama od 2004, najbolji nakit uz najbolju cijenu</Desc>
            <Drustvene>
                <DrustvenaIkona color="E4405F">
                    <Instagram/>
                </DrustvenaIkona>
                <DrustvenaIkona color="55ACEE">
                    <Twitter/>
                </DrustvenaIkona>
            </Drustvene>

        </Lijevo>

        <Sredina>
            <Naslov> Korisne poveznice</Naslov>
            <Lista>
                <Ulisti>naslovna</Ulisti>
                <Ulisti>Košarica</Ulisti>
                <Ulisti>Muški nakit</Ulisti>
                <Ulisti>Ženski nakit</Ulisti>
                <Ulisti>Ostalo</Ulisti>
                <Ulisti>Moj račun</Ulisti>
                <Ulisti>Prati narudžbu</Ulisti>
                <Ulisti>Wishlist</Ulisti>
                <Ulisti>Fabio Zetovič</Ulisti>
                <Ulisti>Pravila o Suglasnosti</Ulisti>
            </Lista>
        </Sredina>
        <Desno>
            <Naslov>Kontakt</Naslov>
            <Kontakt>
                <MapOutlined style={{marginRight:"10px"}}/> Put Mira -- , Solin 21210
            </Kontakt>
            <Kontakt>
                <PhoneIphoneOutlined style={{marginRight:"10px"}}/>+385 99 758 2078
            </Kontakt>
            <Kontakt>
                <AlternateEmailOutlined style={{marginRight:"10px"}}/>zetovicfabio1@gmailcom
            </Kontakt>
            <Placanje src="https://i.ibb.co/Qfvn4z6/payment.png"/>

        </Desno>
    </Container>
  )
}

export default Footer
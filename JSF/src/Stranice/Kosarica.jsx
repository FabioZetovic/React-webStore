import StripeCheckout from 'react-stripe-checkout';
import {useState,useEffect} from "react";
import axios from 'axios';
import { Add, Remove } from '@material-ui/icons';
import React  from 'react';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Obavijest from '../Components/Obavijest';
import { useSelector } from 'react-redux';
import { userRequest } from "../requestMethode";
import { useHistory } from 'react-router-dom';

const KEY = "pk_test_51MwlQxLVZ2j50k0T1LI6NQmtqszow4LXzyWKw7QYvU6TYwgLDV9Ayi3QcWviSQDKVGl080OlG0P32bG8cNozmXjZ00jmljsNDp";

const Container = styled.div`
    
`
const Omot = styled.div`
    padding: 20px;
`
const Naslov = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopBotun = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 1px;
    border: ${props=>props.type === "pun" && "none"};
    background-color: ${props=>props.type === "pun" ? "black" : "transparent"};
    color: ${props=>props.type === "pun" && "white"};
 
`
const TopTextovi = styled.div`
   align-items: center;
   justify-content: center;
   position: relative;
   color:red;
   font-size: 20px;
  
`
const TopText = styled.span`
   text-decoration : underline ;
   cursor: pointer;
   margin: 0px 10px;

`


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Infor = styled.div`
    flex: 3;
`


const Proizvod = styled.div`
    display: flex;
    justify-content: space-between;
`
const PrDetalj = styled.div`
    flex: 2;
    display: flex;
`


const Imeg = styled.img`
    width: 200px;
`
const Detalji = styled.span`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`


const ImeProizvoda = styled.span`
    
`
const ProizvodID = styled.span`
    
`
const ProizvodBoja = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProizvodVel = styled.span`
    
`
const CjeDetalj = styled.div`
     flex: 1;
     flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ProduktKolCon = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;

`
const ProAmm = styled.div`
font-size: 30px;
margin: 5px;
`
const Cijena = styled.div`
font-size: 35px;
font-weight: 200;
`
const Hr = styled.hr`
    background-color: #000000;
    
    margin: 5px;
`
const Saz = styled.div`
     flex: 1;
     border: 0.5px solid lightgray;
     border-radius: 10px;
     padding: 20px;
     height: 50vh;
`


const Saznasl = styled.h1`
    font-weight: 200;
`
const SumStv = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;

    font-weight: ${props=>props.type === "total" && '500'};
    font-size: ${props=>props.type === "total" && '24px'};
`
const SumStvTxt = styled.span`
    
`
const SumStvCj = styled.span`
    
`
const Buttonn = styled.button`
    width: 100%;
    padding: 10px;
    background-color: green;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

const Kosarica = () => {
    const cart = useSelector(state=>state.cart)
    const [stripeToken,setStripeToken] = useState(null);
    const history = useHistory()

    //printanje racuna
    const onToken = (token) =>{
        console.log(token);
    };
    
    /*const onToken = (token) =>{
        setStripeToken(token);
    };
console.log(stripeToken)
   

    useEffect(() => {
        const makeRequest = async () => {
          try {
            const res = await userRequest.post("/checkout/payment", {
              tokenId: stripeToken.id,
              amount: cart.total * 100,
            });
            history.push("/success",{data:res.data})
          } catch (err){
            console.log(err);
          }
        };
        stripeToken && makeRequest();
      }, [stripeToken,cart.total,history]);
    */
  return (

    <Container>
        <Navbar/>
        <Obavijest/>
        <Omot>
            <Naslov>VAŠA KOŠARICA</Naslov>
            <Top>
                <TopBotun>
                    Nastavi s kupovinom
                </TopBotun>
                <TopTextovi>
                    <TopText>
                    VAŠA KOŠARICA(2)
                    </TopText>
                    <TopText>
                    VAŠA LISTA ŽELJA(0)
                    </TopText>
                </TopTextovi>
                <TopBotun type="pun">
                    Završi s kupovinom
                </TopBotun>
            </Top>
            <Bottom>

                <Infor>
                    {cart.products.map(product=>(<Proizvod>
                        <PrDetalj>
                        <Imeg src = {product.img}/>
                        <Detalji>
                            <ImeProizvoda> <b>PROIZVOD/i:</b>{product.title}</ImeProizvoda>
                            <ProizvodID> <b>ID:</b> {product._id}</ProizvodID>
                            <ProizvodBoja color={product.color}/>
                            <ProizvodVel>VELIČINA: {product.size}</ProizvodVel>
                        </Detalji>
                        </PrDetalj>
                        <CjeDetalj>
                            <ProduktKolCon>
                                <Add/>
                                <ProAmm>{product.quantity}</ProAmm>
                                <Remove/>
                            </ProduktKolCon>
                            <Cijena>€{product.price*product.quantity}</Cijena>
                        </CjeDetalj>
                    </Proizvod>))}
                    <Hr></Hr>
                    
                </Infor>

                <Saz>
                    <Saznasl>SAŽETAK NARUDŽBE</Saznasl>
                    <SumStv>
                        <SumStvTxt>Cijena: </SumStvTxt>
                        <SumStvCj>€{cart.total}</SumStvCj>
                    </SumStv>
                    <SumStv>
                        <SumStvTxt>Poštarina: </SumStvTxt>
                        <SumStvCj>€5.99</SumStvCj>
                    </SumStv>
                    <SumStv>
                        <SumStvTxt>Popust na poštarinu: </SumStvTxt>
                        <SumStvCj>-€5.99</SumStvCj>
                    </SumStv>
                    <SumStv type = "total">
                        <SumStvTxt>Sveukupno: </SumStvTxt>
                        <SumStvCj>€{cart.total}</SumStvCj>
                    </SumStv>
                    <StripeCheckout 
                    name='Fabeo.' 
                    image='https://static.wixstatic.com/media/84b06e_717d310324e54451a0195d5658c70004~mv2.png/v1/fill/w_640,h_366,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84b06e_717d310324e54451a0195d5658c70004~mv2.png'
                    billingAddress
                    shippingAddress
                    description='Tvoj Iznos je 20$'
                    amount={cart.total*100}
                    token={onToken}
                    stripeKey={KEY}
                    >
                        <Buttonn>ZAVRŠI S NARUDŽBOM</Buttonn>
                    </StripeCheckout>
                    
                </Saz>
            </Bottom>
        </Omot>
        <Footer/>
    </Container>
  )
}

export default Kosarica
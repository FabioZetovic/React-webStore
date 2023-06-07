import { Add, Remove } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import styled from'styled-components'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Obavijest from '../Components/Obavijest'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container = styled.div`

`
const Omot = styled.div`
padding: 50px;
display: flex;
`
const ImgCont = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;

`
const InfoCont = styled.div`
flex: 1;
padding: 0px 50px;
`
const Naslov = styled.h1`
    font-weight: 200;
    font-size: 40px;
`
const Opis = styled.p`
margin: 20px 0px;
font-size: 20px;
`
const Cijena = styled.span`
font-weight: 100;
font-size: 40px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterNaslov = styled.span`
    font-size: 30px;
    font-weight: 200;
`
const FilterMaterijal = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterVel = styled.select`
    margin-left: 10px;
    padding: 5px;
    font-size: 20px;
`
const FilterVelOpc = styled.option`
    
`
const DodajCont = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
`
const KolicnaK = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Kolicina = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0px 5px;
`
const Botun = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;

    &:hover{
        background-color:teal;
        border:1px solid white;
        color: white;
        };
`


const Proizvod = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();


    useEffect(()=>{
        const getProduct = async () => {
            try{
                const res = await axios.get("http://localhost:5000/api/products/find/"+id)
                setProduct(res.data);
            }catch(err){
                console.log(err)
            }
        }
        getProduct()
    },[id])


    const handleQuantity = (type) =>{
        if(type === "dec"){
            quantity>1 && setQuantity(quantity-1)

        }else{
            setQuantity(quantity+1)
        }
    }


    let pc = product.color;
    let ps = product.size;


    const handleClick  = () =>{
        dispatch(addProduct({...product, quantity, color, size }))
        //updateanje carta
        

    }
console.log(product.color)
  return (
    <Container>
        <Navbar/>
        <Obavijest/>

        <Omot>
            <ImgCont>
            <Image src = {product.img}/>
            </ImgCont>
            
            <InfoCont>
                <Naslov>{product.title}</Naslov>
                <Opis> {product.desc}</Opis>
                <Cijena>€{product.price}</Cijena>
                <FilterContainer>
                    <Filter>
                        <FilterNaslov>Materijal</FilterNaslov>
                        {pc && pc.map((c) => (
                            <FilterMaterijal color={c} key={c} onClick={() => setColor(c)} />
                        ))}
                    </Filter>
                    <Filter>
                        <FilterNaslov>Veličina</FilterNaslov>
                        <FilterVel onChange={(e)=>{
                            setSize(e.target.value)
                        }}>
                        {ps && ps.map((s) => (
                            <FilterVelOpc key={s}>{s}</FilterVelOpc>
                        ))}
                        </FilterVel>
                    </Filter>
                </FilterContainer>
                <DodajCont>
                    <KolicnaK>
                        <Remove onClick={()=>{
                            handleQuantity("dec")
                        }}/>
                        <Kolicina>{quantity}</Kolicina>
                        <Add onClick={()=>{
                            handleQuantity("inc")
                        }}/>
                    </KolicnaK>
                    <Botun onClick={handleClick}>DODAJ U KOŠARICU</Botun>
                </DodajCont>
            </InfoCont>
        </Omot>

        <Footer/>
    </Container>
  )
}

export default Proizvod
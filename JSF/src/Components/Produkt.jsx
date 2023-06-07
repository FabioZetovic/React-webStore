import { ShoppingCartOutlined , SearchOutlined , FavoriteBorderOutlined } from '@material-ui/icons'
import React from 'react'
import styled from'styled-components' 
import { Link } from 'react-router-dom'
const Infor = styled.div`
width: 100%;
height: 100%;
position: absolute;
opacity: 0;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.7s ease;
cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 400px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#f5fbfd;
    position: relative;


    &:hover ${Infor}{
        opacity: 1;
    }

`


const Image = styled.img`
height: 80%;
z-index: 2;
border-radius: 40%;
`

const Ikona = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition:all 0.5s ease;

&:hover{
    background-color: #f4ffff;
    transform: scale(1.1);

}


`


const Produkt = ({item}) => {
  return (
    <Container>
        
        <Image src={item.img}/>
        <Infor>
            <Ikona>
                <ShoppingCartOutlined/>
            </Ikona>
            <Ikona>
            <Link to = {`/proizvod/${item._id}`}>
                <SearchOutlined/>
            </Link>
            </Ikona>
            <Ikona>
                <FavoriteBorderOutlined/>
            </Ikona>


        </Infor>
    </Container>
  )
}

export default Produkt
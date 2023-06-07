import React from 'react'
import styled from'styled-components'
import { kategorije } from '../podaci'
import KategorijaProizvod from './KategorijaProizvod'
//import { Link } from 'react-router-dom'
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`


const Kategorije = () => {
  return (
    <Container>
      
        {kategorije.map(item=>(
            <KategorijaProizvod item={item} key={item.id}/>
        ))}
        
    </Container>
    
  )
}

export default Kategorije
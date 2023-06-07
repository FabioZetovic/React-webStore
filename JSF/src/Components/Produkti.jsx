import React, { useEffect, useState } from 'react'
import styled from'styled-components'
import Produkt from './Produkt'
import axios from 'axios'


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Produkti = (cat) => {
const [produkti, setProdukti] = useState([]);
const [filtriraniProdukti, setFiltriraniProdukti] = useState([]);
const filterPodaci = cat.filters




useEffect(() => {
  const getProdukti = async () => {
    try {
      const res = await axios.get(
        cat ? `http://localhost:5000/api/products?category=${cat.cat}` : 'http://localhost:5000/api/products?category'
      );
    
      setProdukti(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  getProdukti();
}, [cat]);

useEffect(() => {
  cat &&
  setFiltriraniProdukti(
    produkti.filter((item) =>
        Object.entries(filterPodaci).every(([key, value]) =>
          item[key].includes(value),
        )
      )
    );
}, [produkti,cat,filterPodaci]);



  return (
    <Container>
        {cat ? filtriraniProdukti.map((item)=>(
            <Produkt item = {item} key={item.id}/>
        )) : produkti.slice(0,8)
          .map((item)=>(
          <Produkt item = {item} key={item.id}/>
        
      ))}

    </Container>
  )
}

export default Produkti
//import { Announcement } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from'styled-components'
import Navbar from "../Components/Navbar"
import Obavijest from "../Components/Obavijest"
import Produkti from "../Components/Produkti"

import Footer from "../Components/Footer"
import { useLocation } from 'react-router-dom'



const Container = styled.div`

`
const Naslov = styled.h1`
margin: 20px;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
`

const FilterText = styled.span`
font-size: 25px;
font-weight: 600;
margin-right: 20px;
`
const Select = styled.select` 
padding: 10px;
margin-right: 20px;
`
//const Option = styled.option` `



const ListaProdukta = () => {

const location = useLocation();
//ispadne ko json
const cat = location.pathname.split("/")[2];

const  [filters,setFilters] = useState({})
const  [sort,setSort] = useState("newest")


const HandleFilters = (e) =>{
    const value = e.target.value;
    setFilters({
        ...filters,
       [e.target.name]: value,
    });
};
   
  return (
    <Container>
        <Navbar/>
        <Obavijest/>
        <Naslov>KATEGORIJA JE: {cat.toUpperCase()}</Naslov>
        <FilterContainer>
            <Filter>
                <FilterText>Filtriraj Proizvode: </FilterText>
                <Select name = "color" onChange={HandleFilters}>
                    <option disabled>
                        Materijal
                    </option>
                    <option value="yellow">
                        Zlato
                    </option>
                    <option value="lightgray">
                        Srebro
                    </option>
                </Select>
                <Select name = "size" onChange={HandleFilters}>
                    <option disabled>
                        Veličina
                    </option>
                    <option>
                        50cm
                    </option>
                    <option>
                        60cm
                    </option>
                </Select>
            </Filter>
        </FilterContainer>
        <Produkti cat={cat} filters={filters} sort={sort}/>
        
        <Footer/>
    </Container>
  )
}

export default ListaProdukta
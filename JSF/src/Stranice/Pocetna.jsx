import React from 'react'
import Footer from '../Components/Footer'
import Kategorije from '../Components/Kategorije'
import Navbar from'../Components/Navbar'
import Obavijest from '../Components/Obavijest'
import Produkti from '../Components/Produkti'
import Slajder from '../Components/Slajder'
import Produkt from '../Components/Produkt'
const Pocetna = () => {
  return (
    <div>
      <Obavijest/>
      <Navbar/>
      <Slajder/>
      <Kategorije/>
      <Produkti/>
      <Footer/>
      
    </div>
  )
}

export default Pocetna
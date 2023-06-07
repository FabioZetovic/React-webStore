import React from 'react'
import styled from'styled-components'

const Container = styled.div`
    height: 40px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 500;
`
const Obavijest = () => {
  return (
    <Container>
        Besplatan shipping na proizvode preko 100$! Ponuda vrijedi samo 3 dana!
    </Container>
  )
}

export default Obavijest
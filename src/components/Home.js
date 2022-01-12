import React from 'react'
import styled from 'styled-components'
import Section from './Section'
const Home = () => {
    return (
        <Container>
           <Section  
           title="Model S"
           description="Order Online for Touchless Delivery"
           
           leftButton="Custom Order"
           rightButton="Existing Inventory"
           backgroundImg="model-s.jpg"
           />
           <Section 
           title="Model Y"
           description="Order Online for Touchless Delivery"
           backgroundImg="model-y.jpg"
           leftButton="Custom Order"
           rightButton="Existing Inventory"
           />
           <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftButton="Custom Order"
            rightButton="Existing Inventory"
            />
           
           <Section 
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftButton="Custom Order"
            rightButton="Existing Inventory"
           />
           <Section 
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftButton="Order now"
            rightButton="Learn more"
           />
            <Section 
            title="Solar for New Roofs"
            description="Solar Roofs Costs Less Than a New Roofs Plus Solar Panel"
            backgroundImg="solar-roof.jpg"
            leftButton="Order now"
            rightButton="Learn more"
           />
            <Section 
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftButton="Shop Now"
            
           />
        </Container>
    )
}

export default Home


const Container=styled.div`
height:100vh;

`
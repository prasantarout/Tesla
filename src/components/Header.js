import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
// import { selectCars } from '../feature/carMenu/CarSlice';
// import {useSelector} from 'react-redux';
const Header = () => {

    const [burgerOpen,setBurgerOpen]=useState(false);
    // const cars=useSelector(selectCars)
    // console.log(cars)
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt=''/>
            </a>
            <Menu>
               <a href='#'>MODEL S</a>
               <a href='#'>MODEL 3</a>
               <a href='#'>MODEL X</a>
               <a href='#'>MODEL Y</a>
            </Menu>
            <RightMenu>
                <a href='#'>SHOP</a>
                <a href='#'>TESLA ACCOUNT</a>
                <CustomMenu onClick={()=>setBurgerOpen(true)}/>
            </RightMenu>
            <BurgerNav show={burgerOpen}>
                <CloseWrapper>
                <CustomCLose onClick={()=>setBurgerOpen(false)}/>
                </CloseWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">CyberTruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container=styled.div`

min-height:60px;
position:fixed;
display:flex;
align-items:center;
padding:0 20px;
top:0;
left:0;
right:0;
justify-content:space-between;
z-index:1;

`
const Menu=styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;
a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}
@media(max-width:768px){
    display:none;
}
`
const RightMenu=styled.div`

display:flex;
align-items:center;

a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
    
}
`
const CustomMenu=styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform:${props=>props.show ? 'translateX(0)' :'translateX(100%)'};
transition:transform 0.2s ease-in;
li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);
    a{
        font-weight:600;
    }

}
`
const CustomCLose=styled( CloseIcon)`
cursor:pointer;

`
const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;

`
import styled from "styled-components";


export const ContainerCabecario = styled.div`
    background:#6950A1;
    border: 1px solid #6950A1;
    padding: 1rem;
    margin-bottom: 10px;
    display:flex;
    align-items: center;
    justify-content:space-between;
    color:white;
    font-size:32px;
    font-weight: 400;
`
export const Container=styled.div`
    width:600px;
    margin: auto;
    background-color: #6950A1;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    padding: 2px 15px;
    border: none;
`
export const Button = styled.button`
    background: #6950A1;
    border: 1px solid #6950A1;
    border-radius: 9px;
    color:white;
    align-items: center;
    width: 211px;
    height: 43px;
    margin: 30px auto 10px 383px;
    display: block;
    font-size: 20px;
    cursor: pointer;
    
`
export const PtGd = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    max-width: 600px;
    margin: 0 auto;
`
export const PCt = styled.div`
    position: relative;
`
export const PtI = styled.img`
    width: 100%;
    height: auto;
    
`
export const ContainerPagto = styled.div` 
    border: 3px solid #6950A1;
    margin-bottom: 10px;
    padding:1rem;
    display:flex;
    align-items:center;
    justify-content:space-around;
`
export const PtP = styled.span`
    font-size: 20px;
    font-weight: 700;
    display: block;
    margin-top: 10px;
`
export const P = styled.p`
font-weight: 700;
font-size: 24px;
line-height: 36px;
text-transform: capitalize;
color: #141212;
`
export const PtB = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    background-color: rgba(26, 23, 23, 0.5);
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 800;
    font-size: 12px;
    color: #FFFFFF;
    z-index: 1;
`
export const PtE = styled.button`
    width: 49px;
    height: 44px;
    background: #6950A1;
    border: 1px solid #6950A1;
    border-radius: 9px;
    margin-top:5px;
    margin-left:550px;
    color:white;
    font-size:32px;
    font-weight: 400;
    margin-bottom:800;
`
export const Qtd = styled.button`
width: 49px;
height: 44px;
background: #6950A1;
border: 1px solid #6950A1;
border-radius: 9px;
color:white;
font-weight: 800;
font-size: 32px;
margin: 15px 10px;
`
export const BaseStyle = styled.div`
  > img{
    margin-left:40px;
  }
  > p {
    font-size: 11px;
    font-weight: 400;
    text-align: start;
    margin-left: 5px;
  }
  max-width: 540px;
  border: 3px solid #6950A1;
  margin: 10px auto; 
  text-align: center;
  `
export const Image = styled.img`
    position: absolute;
    width: 189px;
    height: 179px;
    left: 0px;
    top: 184px;
`
export const ProductTitle = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #1C1818;
`
export const h1 = styled.div`    
    color:white;
    align-items: center;

`
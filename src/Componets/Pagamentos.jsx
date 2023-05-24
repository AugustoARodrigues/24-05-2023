import styled from "styled-components";
import {title, price, image } from "./Products"
import Conteiner from './Products'
import React, { useEffect, useState } from "react";
import Carrinho from "./Carrinho";


function PagProdutos() {
  const [produtos, setProdutos] = useState([]);
useEffect(()=> {
  setProdutos([{title},{image},{id},{price}])
},[]);

   function renderizaDados() {
      return( 
     <div>
      {produtos.map((item,id) => (    
     <Ul key={id}>
          <Li>{item}</Li>          
       </Ul>
    ))
   }
   </div>
     )
   }
  return (
    <Conteiner>
      <Cabecario>Produtos </cabecario>
      <Carrinho/>
    </Conteiner>
  );
}

export default Produtos;



  
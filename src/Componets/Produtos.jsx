
import  products  from './Products';
import { Button, PtI, PtP, PtGd, PCt, PtB, PtE } from './styles';
import { useState } from 'react';

export default function Produtos({ mudarTela, adicionarAoCarrinho }) {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarCarrinho = (produto) => {
    const novoProduto = { ...produto, quantidade: 1 }; 
    setCarrinho((prevCarrinho) => [...prevCarrinho, novoProduto]);
    adicionarAoCarrinho(novoProduto);
  };

  const qntSelecionada = carrinho.length;

  return (
   <>
   <h1>Produtos</h1>
    <PtE>{qntSelecionada} </PtE>
    <PtGd> 
     {products.map((product) => (
      <PCt key={product.id}>
      <PtI src={product.image} alt={product.title} />
      <PtB onClick={() => adicionarCarrinho(product)}>Adicionar carrinho</PtB>
      <PtP>Valor: R${product.price}</PtP>
      </PCt>
        ))}
      </PtGd>
      <Button onClick={() => mudarTela(TELAS.Carrinho)}> Ir para carrinho</Button>
    </>
  );
}

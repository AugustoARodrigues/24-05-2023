import { ProductTitle, Button } from "./styles";
import Products from "./Carrinho2";
import Produtos from "./Produtos";


export default function Carrinho({ mudarTela, carrinho,  }) {
  const calcularValorTotal = () => {
    let valorTotal = 0;
    carrinho.forEach((products) => {
      valorTotal += produto.price * produto.quantidade;
    });
    return valorTotal;
  };

  return {(
    <>
    <Cabecario/>
     <h1>Carrinho</h1>
     <div>{Carrinho.map((produtos) => (
      <div key={produtos.id}>
         <img src={produtos.image} alt={produtos.title} />
      <div>
      <div> <ProductTitle>{produtos.title}</ProductTitle></div>
      <div><ProductTitle>Valor: R${produtos.price}</ProductTitle></div>
      <div><ProductTitle>Quantidade: {produtos.quantidade}</ProductTitle>
      <div>
         <Button onClick={() => (produtos, produtos.quantidade + 1)}>+</Button>
         <Button onClick={() => (produtos, produtos.quantidade - 1)}>-</Button>
      </div></div></div></div>
        ))}
      </div>
      <footer/>
  )[];
}
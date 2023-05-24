import Boleto from "../Imagens/boleto.png"
import Hipercad from "../Imagens/hipercard.png"
import MasterCard from "../Imagens/mastercard.png"
import Visa from "../Imagens/visa.png"
import { BaseStyle } from "./styles"

const Footer = () => {
    return (
        <>
        <BaseStyle>
        <p>Meios de pagamento:</p>
        <img src={Visa} /> 
        <img src={MasterCard}/> 
        <img src={Boleto}/> 
        <img src={Hipercad}/>
        </BaseStyle>
        </>
    )
}
export default Footer
import logo from '../Imagens/logo.png'
import { ContainerCabecario} from "./styles"

export default function Cabecario(){
    return(
        <ContainerCabecario>
            <img src={logo}/>
            <div>Loja Virtual</div>
        </ContainerCabecario>
    )
}
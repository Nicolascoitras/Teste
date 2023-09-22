import './styles.css'
import { useNavigate } from 'react-router-dom'
import { CardContainer } from './styles'

/* em um componente dinamico recebemos os valores em um parametro 
de objeto cujo nome por convenção se chama props. 
Neste caso, nomeamos o objeto de evento e não da nada {}
*/



export function EventCard(props) {
    const navigate = useNavigate()
    /* retorna uma função pra mudar de página */

    function navegarParaDetalhes() {
        navigate(`/eventos/${props.id}`, {
            state: {
                nome: props.nome,
                data: props.data,
                img: props.img,
                descricao: props.descricao,
                id: props.id
            }
        })
    }
const dataUltrapassada = new Date(props.data).getTime() < new Date().getTime()  
    return (
        <CardContainer dataUltrapassada={dataUltrapassada}>
            {
                props.img && <img src={props.img} /> 
            }

            <div> {/* criei uma div */}
                <h2>{props.nome}</h2>
                <p>{props.descricao ? props.descricao : "Sem descrição"}</p>
                <p>{props.data ? props.data : "Sem data Definida"}</p>

                <button onClick={() => props.deletarEvento(props.id)} >Deletar</button>
                <button onClick={navegarParaDetalhes} >Ver detalhes</button>
            </div>
        </CardContainer>
    )
}
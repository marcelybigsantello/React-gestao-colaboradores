import { AiFillCloseCircle } from 'react-icons/ai';
import './Colaborador.css';

const Colaborador = (props) => {
    const textoAlternativoModificado = `Imagem de ${props.colaborador}`;

    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={25} 
                className="deletar" 
                onClick={() => props.aoExcluir(props.colaborador.id)} 
            />
            <div className='cabecalho' style={{ backgroundColor: props.corDeFundo }}>
                <img src={props.colaborador.imagem} alt={textoAlternativoModificado}></img>
            </div>
            <div className='rodape'>
                <h4>{props.colaborador.nome}</h4>
                <h5>{props.colaborador.cargo}</h5>
                <h5>{props.colaborador.formacao}</h5>
            </div>
        </div>
    );
}

export default Colaborador;
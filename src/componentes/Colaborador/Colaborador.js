import { AiFillCloseCircle } from 'react-icons/ai';
import './Colaborador.css';

const Colaborador = (props) => {

    const textoAlternativoModificado = `Imagem de ${props.nome}`
    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className="deletar" onClick={props.aoExcluir} />
            <div className='cabecalho' style={{ backgroundColor: props.corDeFundo }}>
                <img src={props.imagem} alt={textoAlternativoModificado}></img>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
                <h5>{props.formacao}</h5>
            </div>
        </div>
    );
}

export default Colaborador;
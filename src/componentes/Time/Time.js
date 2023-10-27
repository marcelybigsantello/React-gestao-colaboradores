import Colaborador from '../Colaborador/Colaborador';
import './Time.css';

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria };

    return (
        (props.listaColaboradores.length > 0) ? <section className="time" style={css}>
            <h3>{props.nome}</h3>
            <div className='colaboradores'>
                {props.listaColaboradores.map(colaborador => <Colaborador key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem} 
                    formacao={colaborador.formacao}/>)}
            </div>
        </section>
        : ''
    );
}

export default Time;
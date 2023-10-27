import Colaborador from '../Colaborador/Colaborador';
import './Time.css';

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria };

    return (
        <section className="time" style={css}>
            <h3>{props.nome}</h3>
            <div className='colaboradores'>
                {props.listaColaboradores.map(colaborador => <Colaborador key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
    );
}

export default Time;
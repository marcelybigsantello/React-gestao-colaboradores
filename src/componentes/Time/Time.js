import Colaborador from '../Colaborador/Colaborador';
import './Time.css';

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria, backgroundImage: 'url(/imagens/fundo.png)' };

    function excluirColaborador() {
        console.log("Excluindo o colaborador");
    }

    return (
        (props.listaColaboradores.length > 0) ? <section className="time" style={css}>
            <input type='color' onChange={evento => props.alterarCor(evento.target.value, props.nome)}
                value={props.corPrimaria} className='input-cor' />
            <h3>{props.nome}</h3>
            <div className='colaboradores'>
                {props.listaColaboradores.map(colaborador => {
                    return <Colaborador key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        formacao={colaborador.formacao}
                        corDeFundo={props.corPrimaria}
                        aoExcluir={excluirColaborador} />
                }
                )}
            </div>
        </section>
            : ''
    );
}

export default Time;
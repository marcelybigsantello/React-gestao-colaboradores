import Colaborador from '../Colaborador/Colaborador';
import hexToRgba from 'hex-to-rgba';
import './Time.css';

const Time = ({ time, listaColaboradores, aoExcluir, alterarCor, aoFavoritar }) => {

    const css = { backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor) };

    return (
        listaColaboradores.length > 0 && <section className="time" style={css}>
            <input type='color' className='input-cor' value={time.cor} onChange={evento => {
                alterarCor(evento.target.value, time.id);
            }} />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {listaColaboradores.map((colaborador, indice) => {
                    return <Colaborador key={indice}
                        colaborador={colaborador}
                        corDeFundo={time.cor}
                        aoExcluir={aoExcluir} 
                        aoFavoritar={aoFavoritar}
                    />}
                )}
            </div>
        </section>
    );
}

export default Time;
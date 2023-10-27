import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div>
                <img src='./imagens/fb.png' alt='Logo do Facebook' className='left'></img>
                <img src="./imagens/tw.png" alt='Logo do Twitter' className='left'></img>
                <img src='./imagens/ig.png' alt='Logo do Instagram' className='left'></img>
            </div>
            <div className='center'>
                <img src='./imagens/logo.png' alt='Logo do Organograma'></img>
            </div>
            <div className='right'>
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    );
}

export default Rodape;
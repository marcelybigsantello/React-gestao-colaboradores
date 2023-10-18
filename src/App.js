import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" id="Nome" name="Nome" placeholder="Informe o seu nome" />
      <CampoTexto label="Idade" id="Idade" name="Idade" placeholder="Informe a sua idade"/>
      <CampoTexto label="Formacao" id="Formacao" name="Formacao" placeholder="Informe a sua formação"/>
      <CampoTexto label="Cargo" id="Cargo" name="Cargo" placeholder="Informe o seu cargo"/>
      <CampoTexto label="Imagem" id="Imagem" name="Imagem" placeholder="Informe o endereço da imagem"/>
    </div>
  );
}

export default App;

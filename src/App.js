import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        Como deletar sua conta no aplicativo <i>MemoryLife</i>
      </h1>
      <article style={{ marginTop: 50, textAlign: "left", marginLeft: 50 }}>
        <lu>
          <li>Para solicitar a deleção de sua conta o usario precisa estar logado</li>
          <li>
            Clicar na aba <b>Cofigurações</b> (Icone de engrenagem localizado no canto inferior direito)
          </li>
          <li>
            Clicar no botão <b>Excluir minha conta</b>
          </li>
        </lu>
        O processo de exclusão anonimisa os seguintes campos: Nome, Email e Registro Profissional do Cuidador responsável pela aplicação do aplicativo. O nome do paciente também será anonimisado, o que singfica que serão transformados em um camp hash que impossibilitára qualquer identificação
        daqueles dados ao seu respectivo usuário de acordo com a LGPD. O aplicativo MemoryLife se reserva ao direito de manter os outros dados para fins de pesquisa e validação das funcionalidades do mesmo.
      </article>
    </div>
  );
}

export default App;

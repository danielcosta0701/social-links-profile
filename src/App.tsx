import './App.css'

function App() {
  return (
    <>
      <main className="main">
        <div className="card">
          <div className="card__header">
            <div className="card__profile-image">Imagem</div>
            <div className="card__profile-name">Daniel</div>
            <div className="card__profile-description">Descrição</div>
          </div>

          <div className="card__content">
            <ul className="card__social-list">
              <li className="card__social-item">
                <a href="#">Link 1</a>
              </li>
              <li className="card__social-item">
                <a href="#" className="link">Link 2</a>
              </li>
              <li className="card__social-item">
                <a href="#" className="link">Link 3</a>
              </li>
            </ul>
          </div>

          <div className="card__footer"></div>
        </div>
      </main>

      <footer className="footer">
        <p className="footer__copyright">
          Desenvolvido por <a href="https://github.com/danielcosta0701">Daniel Costa</a>
        </p>
      </footer>
    </>
  )
}

export default App

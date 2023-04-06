import * as S from './styles';

import Logo from '../../assets/Drive_branco.png';
import { BiMenu } from 'react-icons/bi'


const Header = () => {
  function MenuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile?.classList.contains('open')) {
      menuMobile?.classList.remove('open');
    } else {
      menuMobile?.classList.add('open');
    }
  }

  return <S.Box>
    <body>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            {/* <h1>Logo</h1> */}
            <img src={Logo} alt="Imagem Cel" />
          </div>

          <div className="nav-list">
            <ul>
              <li className="nav-item"> <a href="/" className="nav-link">Home</a></li>
              <li className="nav-item"> <a href="#sobre" className="nav-link">Sobre</a></li>
              <li className="nav-item"> <a href="#planos" className="nav-link">Planos</a></li>
              <li className="nav-item"> <a href="#clientes" className="nav-link">Clientes</a></li>
              <li className="nav-item"> <a href="#duvidas" className="nav-link">Dúvidas</a></li>
              <li className="nav-item"> <a href="/politicas" className="nav-link">Políticas de Privacidade</a></li>
            </ul>
          </div>
          {/* <div className="login-button">
            <button> <a href="#">Entrar</a> </button>
          </div> */}
          <div className="mobile-menu-icon">
            <button onClick={MenuShow}><BiMenu className="icon" /></button>
          </div>
        </nav>

        <div className="mobile-menu">
          <ul>
            <li className="nav-item"> <a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"> <a href="#sobre" className="nav-link">Sobre</a></li>
            <li className="nav-item"> <a href="#planos" className="nav-link">Planos</a></li>
            <li className="nav-item"> <a href="#clientes" className="nav-link">Clientes</a></li>
            <li className="nav-item"> <a href="#duvidas" className="nav-link">Dúvidas</a></li>
            <li className="nav-item"> <a href="/politicas" className="nav-link">Políticas de Privacidade</a></li>
          </ul>
        </div>
      </header>
    </body>
  </S.Box>
}

export default Header;
import * as S from './styles';

import LogoBranca from '../../assets/Drive_branco.png';
import Social from '../Social Icons';

const Footer = () => {
  return (
    <>
      <S.Container>
        <div className="footer-content">
          <img src={LogoBranca} alt="Logo Branca" />
          {/* <h3>drive - IO</h3> */}
          <p>Que tal reinventar sua gestão de frota com tecnologia?
            Novos caminhos nos levam a novos resultados. </p>
          <Social />
        </div>
        <div className="footer-bottom">
          <p>copyright &copy;2023 Drive-IO. designed by <span>Update</span></p>
        </div>
      </S.Container>
    </>
  )
}

export default Footer;
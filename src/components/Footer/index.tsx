import * as S from './styles';

import LogoBranca from '../../assets/Drive_branco.png';
import Social from '../Social Icons';

const Footer = () => {
  return (
    <S.Container>
      <div>
        <img src={LogoBranca} alt="Logo Branca" />
        <Social />
      </div>
      <div id="linha-horizontal"></div>
      <div>
        <h6>Copyright © 2022-2023 Drive-IO.
          Todos os direitos reservados.</h6>
        <h6>(27)37112145</h6>
      </div>
    </S.Container>
  )
}

export default Footer;
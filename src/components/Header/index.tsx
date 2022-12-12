import * as S from './styles';

import Logo from '../../components/Logo';
import Menu from '../../components/Menu';

const Header = () => {
  return <S.Box>
    <Logo />
    <Menu />
  </S.Box>
}

export default Header;
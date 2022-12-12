import Button from '../../components/Button';
import Header from '../../components/Header';
import * as S from './styles';

import Image from '../../assets/mockupCel.png';

function Home() {

  return (
    <S.Container className="App">
      <Header />
      <S.Content>
        <div>
          <h1>Orquestre o seu processo de gestão de frotas e ativos</h1>
          <h6>
            Com um bom controle de frota você garante a redução de custos da sua operação de forma fácil, rápida e inteligente!
            </h6>
            <Button />
        </div>
        <S.Image>
          <img src={Image} alt="Imagem Cel" />
        </S.Image>
      </S.Content>
    </S.Container>
  )
}

export default Home

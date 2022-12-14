import Button from '../../components/Button';
import Header from '../../components/Header';
import * as S from './styles';

import Image1 from '../../assets/mockupCel.png';
import Image2 from '../../assets/fotcel.png';
import Video from '../../assets/video.mp4';

import { AiOutlineCheckCircle } from 'react-icons/ai'

function Home() {

  return (
    <S.Container className="App">
      <Header />
      <S.Content1>
        <div>
          <h1>Orquestre o seu processo de gestão de frotas e ativos</h1>
          <h6>
            Com um bom controle de frota você garante a redução de custos da sua operação de forma fácil, rápida e inteligente!
          </h6>
          <Button />
        </div>
        <S.Image1>
          <img src={Image1} alt="Imagem Cel" />
        </S.Image1>
      </S.Content1>
      <S.Content2>
        <h2>Veja como funciona o sistema completo</h2>
        <h2>para gestão de frotas</h2>
        <video width="50%">
          <source src={Video} type="video/mp4" />
        </video>
      </S.Content2>
      <S.Content3>
        <S.Image2>
          <img src={Image2} alt="imagem cel de lado" />
        </S.Image2>
        <div>
          <h1>Aplicativo Drive IO</h1>
          <h6>Não está na frente do computador?</h6>
          <h6>Tenha visibilidade da sua frota onde estiver:</h6>
          <h5>
            <ul>
              <AiOutlineCheckCircle className="iconCheck" />
              LOCALIZAÇÃO DOS VEÍCULOS NO MAPA
            </ul>
            <ul>
              <AiOutlineCheckCircle className="iconCheck" />
              STATUS DA IGNIÇÃO
            </ul>
            <ul>
              <AiOutlineCheckCircle className="iconCheck" />
              VELOCIDADE DOS VEÍCULOS
            </ul>
          </h5>
        </div>
      </S.Content3>
    </S.Container>
  )
}

export default Home

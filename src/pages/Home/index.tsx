import Button from '../../components/Button';
import Header from '../../components/Header';
import * as S from './styles';

import Image1 from '../../assets/especial.png';
import Image2 from '../../assets/mockup1.png';
import Video from '../../assets/video.mp4';
import LogoUpdate from '../../assets/updategeral.png';

import { AiOutlineCheckCircle } from 'react-icons/ai'

function Home() {

  return (
    <S.Container className="App">
      <Header />
      <S.Content1>
        <div>
          <h1>Orquestre o seu processo de <span>gestão de frotas</span> e ativos</h1>
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
        <h1>Veja como funciona o <span>sistema completo</span> <br/> para <span>gestão de frotas</span></h1>
        <video width="50%">
          <source src={Video} type="video/mp4" />
        </video>
      </S.Content2>
      <S.Text>
        <h1>Mais do que um rastreador, uma <span>solução</span> <br /> integrada de <span>controle de frota</span></h1>
      </S.Text>
      <S.Content3>
        <S.Image2>
          <img src={Image2} alt="imagem cel de lado" />
        </S.Image2>
        <div>
          <img src={LogoUpdate} alt="logo update" />
          <h1>Aplicativo <span>Drive IO</span></h1>
          <h6>Não está na frente do computador? <br /> Tenha visibilidade da sua frota onde estiver:</h6>
          <h5>
            <ul><AiOutlineCheckCircle className="iconCheck" />LOCALIZAÇÃO DOS VEÍCULOS NO MAPA</ul>
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

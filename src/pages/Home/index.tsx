import * as S from './styles';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Image1 from '../../assets/especial_1.png';
import Image2 from '../../assets/mockup1.png';
import Video from '../../assets/video.mp4';
import LogoUpdate from '../../assets/updategeral.png';
import ImageProva1 from '../../assets/provaSocial1.jpeg';
import ImageProva2 from '../../assets/provaSocial2.jpeg';
import ImageProva3 from '../../assets/provaSocial3.jpeg';
import ImageProva4 from '../../assets/provaSocial4.jpeg';
import Footer from '../../components/Footer';
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Faq from '../../components/Faq';
import Price from '../../components/Price';

function Home() {

  return (
    <S.Container className="App">
      <Header />
      <S.Content1 id="home">
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
      <S.Content2 id="sobre">
        <h1>Veja como funciona o <span>sistema completo</span> <br /> para <span>gestão de frotas</span></h1>
        <video width="50%" controls>
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
      <S.Prices id="planos">

        <Price />

      </S.Prices>
      <S.Text2 id="clientes">
        <h1>O que nossos <span>clientes</span> dizem</h1>
      </S.Text2>
      <S.Content4>
        <div className="prova">
          <div><S.TextProva>“Hoje, nossas equipes atendem até 50% mais incidentes e nossa alocação caiu de 5 para 3 minutos. No nosso ramo, o tempo representa vida.”</S.TextProva></div>
          <div className="box">
            <img src={ImageProva1} alt="imagem cel de lado" />
            <div>
              <h1>KÁTIA MARQUES</h1>
              <h2>Supervisora da Central<br />
                Bem Emergências</h2></div>
          </div>
          <div><S.TextProva>“Com o monitoramento, conseguimos eliminar idas desnecessárias ao posto de gasolina e nosso custo com combustível caiu 37%.”</S.TextProva></div>
          <div className="box">
            <img src={ImageProva2} alt="imagem cel de lado" />
            <div>
              <h1>PAULO SILVA</h1>
              <h2>Gerente de frota<br />
                Construrise</h2></div>
          </div>
        </div>
        <div className="prova">
          <div><S.TextProva>"Com o monitoramento, conseguimos abolir maus hábitos no uso dos veículos e, assim, reduzimos em 50% os gastos com combustível.”
          </S.TextProva></div>
          <div className="box">
            <img src={ImageProva3} alt="imagem cel de lado" />
            <div>
              <h1>FELIPE ORLANDO</h1>
              <h2>Gestor de equipe técnica<br />
                HVAC Engenharia</h2></div>
          </div>
          <div><S.TextProva>“Nossa capacidade ociosa diminuiu e somos mais pontuais nos atendimentos graças ao monitoramento. Nossas multas caíram em 50%.”</S.TextProva></div>
          <div className="box">
            <img src={ImageProva4} alt="imagem cel de lado" />
            <div>
              <h1>LUIZ HENRIQUE
              </h1>
              <h2>Diretor Executivo<br />
                Império</h2></div>
          </div>
        </div>
      </S.Content4>
      <S.Text3 id="duvidas">
        <h1><span>Dúvidas</span> frequentes</h1>
      </S.Text3>
      <div >
        <Faq />
        <div className='button'>
          <Button />
        </div>
        <Footer />
      </div>
    </S.Container>
  )
}

export default Home

import * as S from "./styles";
import { useState } from "react";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';

const Faq = () => {
  const [selected, setSelected] = useState(null)

  const toggle = (i: any) => {
    if (selected == i) {
      return setSelected(null)
    }

    setSelected(i)
  }
  const data = [
    {
      question: 'Para que serve ?',
      answer: "O software permite saber todas as viagens realizadas por veículo, como é o comportamento de cada condutor (se dirige rápido ou faz manobras perigosas, por exemplo) e o tempo das paradas ao longo da viagem – uma forma eficaz de não só medir eventuais atrasos, mas também verificar se o motorista está cumprindo com os períodos de descanso previstos na legislação trabalhista. Com esse tipo de dados, o gestor da frota é capaz de extrair informações e relatórios úteis para o dia a dia da empresa."
    },
    {
      question: 'Por que contratar ?',
      answer: "Um bom sistema de controle de frotas é capaz de armazenar dados sobre as viagens feitas pelos veículos da empresa e, a partir disso, gerar benefícios. Usando ele, é possível analisar essas informações e aprender como reduzir custos, aumentar a segurança e ainda tornar a operação mais eficiente."
    },
    {
      question: 'Como contratar ?',
      answer: "Clique no botão abaixo para preencher o formulário. Nossos especialistas entrarão em contato dentro do horário comercial, de segunda à sexta."
    },
  ]

  return (
    <S.Faq>
      <div className="wrapper">
        <div className="accordion">
          {data.map((item, i) => (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected == i ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</span>
              </div>
              <div className={selected == i ? 'content show' : 'content'}>{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </S.Faq>
  );

}

export default Faq;
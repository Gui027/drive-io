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
      question: 'Question 1',
      answer: "Lorem ipsum dolor sit amet. Cum minima soluta quo blanditiis quam qui quidem facilis. Et animi eius eum veniam vitae vel tenetur repellat. Aut dolore pariatur quo nisi sunt At blanditiis velit qui officiis quaerat est ipsa voluptates."
    },
    {
      question: 'Question 2',
      answer: "Lorem ipsum dolor sit amet. Cum minima soluta quo blanditiis quam qui quidem facilis. Et animi eius eum veniam vitae vel tenetur repellat. Aut dolore pariatur quo nisi sunt At blanditiis velit qui officiis quaerat est ipsa voluptates."
    },
    {
      question: 'Question 3',
      answer: "Lorem ipsum dolor sit amet. Cum minima soluta quo blanditiis quam qui quidem facilis. Et animi eius eum veniam vitae vel tenetur repellat. Aut dolore pariatur quo nisi sunt At blanditiis velit qui officiis quaerat est ipsa voluptates."
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
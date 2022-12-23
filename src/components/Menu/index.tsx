import * as S from "./styles";

const Menu = () => {
  return <S.MenuList>
    <S.ItemList> <a href="#content1">Home</a></S.ItemList>
    <S.ItemList><a href="#content2">Sobre Nós</a></S.ItemList>
    <S.ItemList><a href="#">Planos</a></S.ItemList>
    <S.ItemList><a href="#content3">Clientes</a></S.ItemList>
    <S.ItemList><a href="#">Dúvidas</a></S.ItemList>
  </S.MenuList>

};

export default Menu;
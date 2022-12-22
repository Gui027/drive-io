import * as S from "./styles";

const Menu = () => {
  return <S.MenuList>
    <S.ItemList> <a href="#">Home</a></S.ItemList>
    <S.ItemList><a href="#">Sobre Nós</a></S.ItemList>
    <S.ItemList><a href="#">Planos</a></S.ItemList>
    <S.ItemList><a href="#">Clientes</a></S.ItemList>
    <S.ItemList><a href="#">Dúvidas</a></S.ItemList>
  </S.MenuList>

};

export default Menu;
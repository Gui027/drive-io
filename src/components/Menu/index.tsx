import * as S from "./styles";

const Menu = () => {
  return <S.MenuList>
    <S.ItemList> <a href="#">Home</a></S.ItemList>
    <S.ItemList><a href="#">Sobre Nós</a></S.ItemList>
    <S.ItemList><a href="#">Preços</a></S.ItemList>
    <S.ItemList><a href="#">Serviços</a></S.ItemList>
    <S.ItemList><a href="#">Contato</a></S.ItemList>
  </S.MenuList>

};

export default Menu;
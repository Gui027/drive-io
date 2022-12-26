import * as S from "./styles";

const Menu = () => {
  return <S.MenuList>
    <S.ItemList> <a href="#home">Home</a></S.ItemList>
    <S.ItemList><a href="#sobre">Sobre</a></S.ItemList>
    <S.ItemList><a href="#planos">Planos</a></S.ItemList>
    <S.ItemList><a href="#clientes">Clientes</a></S.ItemList>
    <S.ItemList><a href="#duvidas">Dúvidas</a></S.ItemList>
  </S.MenuList>

};

export default Menu;
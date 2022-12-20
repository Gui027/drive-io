import * as S from "./styles";
import { TiSocialLinkedin } from 'react-icons/ti'
import { TiSocialFacebook } from 'react-icons/ti'
import { TiSocialInstagram } from 'react-icons/ti'
import { TiSocialYoutube } from 'react-icons/ti'

const Social = () => {
  return <S.SocialList>
    <S.ItemList> <a href="#"> <TiSocialLinkedin className="iconSocial" /> </a></S.ItemList>
    <S.ItemList> <a href="#"> <TiSocialFacebook className="iconSocial" /> </a></S.ItemList>
    <S.ItemList> <a href="#"> <TiSocialInstagram className="iconSocial" /> </a></S.ItemList>
    <S.ItemList> <a href="#"> <TiSocialYoutube className="iconSocial" /> </a></S.ItemList>
  </S.SocialList>
};

export default Social;
import {Header} from "../../components/Header";
import {Card} from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
    <Header autenticado={true}/>
    <Container>
      <Column flex={3}>
        <Title>Feed</Title>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Column>
      <Column flex={1}>
        <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
        <UserInfo percentual={35} nome="Junileninhas" 
        image="https://ik.imagekit.io/x2dirkim6/images/avatars/characters/character_avatar_v5r4JPxy0.webp?tr=w-3840" />
        <UserInfo percentual={53} nome="Junileninhas" 
        image="https://ik.imagekit.io/x2dirkim6/images/avatars/characters/character_avatar_v5r4JPxy0.webp?tr=w-3840" />
        <UserInfo percentual={65} nome="Junileninhas" 
        image="https://ik.imagekit.io/x2dirkim6/images/avatars/characters/character_avatar_v5r4JPxy0.webp?tr=w-3840" />
        <UserInfo percentual={75} nome="Junileninhas" 
        image="https://ik.imagekit.io/x2dirkim6/images/avatars/characters/character_avatar_v5r4JPxy0.webp?tr=w-3840" />
        <UserInfo percentual={85} nome="Junileninhas" 
        image="https://ik.imagekit.io/x2dirkim6/images/avatars/characters/character_avatar_v5r4JPxy0.webp?tr=w-3840" />
        <UserInfo percentual={95} nome="Junileninhas" 
        image="https://ik.imagekit.io/x2dirkim6/images/avatars/characters/character_avatar_v5r4JPxy0.webp?tr=w-3840" />
      </Column>
    </Container>
    </>
  )
}

export {Feed}
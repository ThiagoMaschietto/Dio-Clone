import { Button } from '../Button'
import logo from "../../assets/logo-dio.png"
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper

} from './styles'


const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da Dio" height="25" width="63"/>
                {autenticado ? (
                <>
                    <BuscarInputContainer>
                    <Input placeholder="Buscar..." />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>
            ) : null }
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://ik.imagekit.io/x2dirkim6/images/avatars/characters/character_avatar_v5r4JPxy0.webp?tr=w-3840' />
                ) : (
                    <>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title={"Entrar"}/>
                        <Button title={"Cadastrar"}/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header}
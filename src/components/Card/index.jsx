import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'
import { FiThumbsUp } from 'react-icons/fi'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://images8.alphacoders.com/966/thumb-1920-966117.jpg'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://ik.imagekit.io/x2dirkim6/images/avatars/characters/character_avatar_v5r4JPxy0.webp?tr=w-3840'/>
                <div>
                    <h4>Junileninhas</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito para o curso de html e css... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card};

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 5px;
`;

const Circle = styled.div``;

const Image = styled.div`
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
const Icon = styled.div``;

export const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
        <InfoContainer>
            <Icon>
                <FontAwesomeIcon icon={solid('cart-shopping')} />
            </Icon>
            <Icon>
                <FontAwesomeIcon icon={solid('magnifying-glass')} />
            </Icon>
            <Icon>
                <FontAwesomeIcon icon={solid('heart')} />
            </Icon>
        </InfoContainer>
    </Container>
  )
}

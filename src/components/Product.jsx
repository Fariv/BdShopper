import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 300px;
    height: 440px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(150, 210, 245, 0.5);
`;

const Circle = styled.div``;

const Image = styled.div`
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 280px;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 25px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
const Icon = styled.div`
    margin: 0 40px;
    background-color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 5px #009fff;
    }
    &:active {
        box-shadow: 0px 0px 10px #009fff;
    }
`;

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

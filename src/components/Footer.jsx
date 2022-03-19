import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import styled from 'styled-components';

const Container = styled.div`
    display: flex; 
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
    margin: 3px 0 20px 0;
`;

const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-right: 16px;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 9px ${props => props.hoverColor};
    }
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-top: 25px;
    margin-bottom: 35px;
`;

const List = styled.ol`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img``;

export const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>BDSHOPPER.</Logo>
            <Description>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga
            </Description>
            <SocialContainer>
                <SocialIcon hoverColor="#006af4" bgColor="#1877f2">
                    <FontAwesomeIcon icon={brands('facebook')} />
                </SocialIcon>
                <SocialIcon hoverColor="#ff006e" bgColor="#d4005b">
                    <FontAwesomeIcon icon={brands('instagram')} />
                </SocialIcon>
                <SocialIcon hoverColor="#0098ff" bgColor="#1d9bf0">
                    <FontAwesomeIcon icon={brands('twitter')} />
                </SocialIcon>
                <SocialIcon hoverColor="#b40000" bgColor="#f00">
                    <FontAwesomeIcon icon={brands('youtube')} />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <FontAwesomeIcon icon={solid('location-dot')} style={{fontSize:"18px", marginRight:"10px"}} /> 7/8/3 Balashpur, Nayapara, Maskanda Bus Terminal, Mymensingh
            </ContactItem>
            <ContactItem>
                <FontAwesomeIcon icon={solid('mobile')} style={{fontSize:"18px", marginRight:"10px"}} /> +880 17 19 565998
            </ContactItem>
            <ContactItem>
                <FontAwesomeIcon icon={solid('envelope')} style={{fontSize:"18px", marginRight:"10px"}} /> contact@bdshopper.dev
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

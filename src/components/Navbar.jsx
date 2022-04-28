import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react'
import styled from 'styled-components';
import { Badge } from './Badge';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 100px;
    margin: 0;
    ${mobile({height: "80px"})}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-contnet: space-between;
    ${mobile({padding: "10px 0"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
`;

const SearchIcon = styled.span`
    margin: 0 5px;
`;

const Input = styled.input`
    border: none;
    margin: 0;
    padding: 5px;
    &:focus-visible {
        outline: none;
    }
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin: 15px;
    position: relative;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

export const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <SearchIcon>
                        <FontAwesomeIcon icon={solid('magnifying-glass')} color="grey" fontSize="12px" />
                    </SearchIcon>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>BDSHOPPER.</Logo>
            </Center>
            <Right>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>SIGN UP</MenuItem>
                <MenuItem>
                    <FontAwesomeIcon icon={solid('cart-shopping')} fontSize="17px" />
                    <Badge color="white" bgColor="blue" value={5} />
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

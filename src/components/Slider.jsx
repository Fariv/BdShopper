import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position:relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: all 0.5s ease-in-out;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    align-items: center;
    background-color: ${props => props.bgColor};
`;
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.div`
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
`;
const InforContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 60px;
`;
const Description = styled.p`
    margin: 50px 0;
    font-size: 20;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {

  let [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    
    const maxIndex = sliderItems.length-1;
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : maxIndex)
    } else {
      setSlideIndex(slideIndex < maxIndex ? slideIndex + 1 : 0)
    }
  }
  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <FontAwesomeIcon icon={solid('arrow-left')} />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {
                sliderItems.map(item => (
                    <Slide key={item.id} bgColor={item.bgColor}>
                        <ImageContainer>
                            <Image src={item.img} />
                        </ImageContainer>
                        <InforContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.description}</Description>
                            <Button>SHOW NOW</Button>
                        </InforContainer>
                    </Slide>
                ))
            }
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <FontAwesomeIcon icon={solid('arrow-right')} />
        </Arrow>
    </Container>
  )
}

export default Slider
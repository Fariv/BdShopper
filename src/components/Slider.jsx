import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Slider = () => {
  return (
    <Container>
        <Arrow>
            <FontAwesomeIcon icon={solid('arrow-left')} />
        </Arrow>
        <Arrow>
            <FontAwesomeIcon icon={solid('arrow-right')} />
        </Arrow>
    </Container>
  )
}

export default Slider
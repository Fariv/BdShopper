import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    padding: 10px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.2;
`;

export const Announcement = () => {
  return (
    <Container>Super Deal in BDShopper for purcahse over 2000 BDT! Buy One and free One!!!</Container>
  )
}

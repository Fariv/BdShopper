import React from 'react'
import styled from 'styled-components';

const BadgeArea = styled.span`
    position: absolute;
    top: -15px;
    right: -15px;
    border-radius: 50%;
    color: ${props => props.color ? props.color : 'white'};
    background-color: ${props => props.bgColor ? props.bgColor : 'black'};
    padding: 2px 6px;
    text-align: center;
    margin-left: 3px;
`;

export const Badge = ({color, bgColor, value}) => {
  return (
    <BadgeArea color={color} bgColor={bgColor}>{value}</BadgeArea>
  )
}

import styled from 'styled-components'
import { categories } from "../data";
import { mobile } from '../responsive';
import CategoryItems from './CategoryItems';

const Container = styled.div`
    display: flex;
    padding: 15px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories = () => {
  return (
    <Container>
        {
            categories.map(item => (
                <CategoryItems key={item.id} item={item} />
            ))
        }
    </Container>
  )
}

export default Categories
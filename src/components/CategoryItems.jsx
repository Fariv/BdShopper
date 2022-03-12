import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 12px;
    height: 80vh;
    position: relative;
`;

const Image = styled.div`
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
`;
const InforContainer = styled.div`
    flex: 1;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h4`
    font-size: 20px;
    margin-bottom: 10px;
    color: white;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: grey;
    cursor: pointer;
    font-weight: 600;
`;

function CategoryItems({item}) {
  return (
    <Container>
        <Image src={item.img} />
        <InforContainer>
            <Title>
                {item.title}
            </Title>
            <Button>
                SHOP NOW
            </Button>
        </InforContainer>
    </Container>
  )
}

export default CategoryItems
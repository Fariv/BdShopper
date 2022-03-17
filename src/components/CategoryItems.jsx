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
    display: none;
    ${Container}:hover & {

        flex: 1;
        padding: 10px;
        position: absolute;
        transform: translate(-0%, -100%);
        left: 0%;
        top: 100%;
        width: 29.45vw;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: rgba(85, 85, 85, 0.7);
    }
`;

const Title = styled.h4`
    font-size: 20px;
    margin-top: 3px;
    margin-bottom: 10px;
    color: white;
    text-align: center;
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
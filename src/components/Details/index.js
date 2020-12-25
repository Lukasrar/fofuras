import Styled from './style'

function Details({onClose}) {
    return (
      <Styled.Container>
        <Styled.Header>
          <button onClick={onClose}>fechar</button>
        </Styled.Header>
      </Styled.Container>
    );
  }

  export default Details;
  
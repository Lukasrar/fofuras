import Styled from './style'
import { Col } from 'react-grid-system';
import Text from '@components/Text'
function Product({ onClick }) {
    return (
      <Styled.Container onClick={onClick}>
        <Styled.ImageContainer />
        <Text>NOME DO PRODUTO</Text>
      </Styled.Container>
    );
  }

  export default Product;
  
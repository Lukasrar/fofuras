import Styled from './style'
import { Col } from 'react-grid-system';
import Text from '@components/Text'
import { Button } from 'react-bootstrap'
function HotProduct() {
    return (
      <Styled.Container>
        <Col lg={5} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '0 50px' }}>
          <Text title bold>NOME DO PRODUTO</Text>
          <Text>R$ 999.99</Text>
          <Text>NOME DO PRODUTO</Text>
          <div style={{ width: '100px' }}>
            <Button variant="light">Light</Button>
          </div>
        </Col>
        <Col lg={7}>
          <Styled.ImageContainer />
        </Col>
      </Styled.Container>
    );
  }

  export default HotProduct;
  
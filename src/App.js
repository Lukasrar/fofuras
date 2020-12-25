import React, { useState } from 'react'
import Header from '@components/Header'
import HotProduct from '@components/HotProduct'
import { Carousel } from 'react-bootstrap'
import Text from '@components/Text'
import { Row, Col } from 'react-grid-system';
import Product from '@components/Product'
import { CSSTransition } from 'react-transition-group'
import Details from '@components/Details'

function App() {
  const [productDetails, setProductDetails] = useState(false)

  const handleProductClick = () => {
    setProductDetails(!productDetails)
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{ padding: '0 40px' }}>
        <Carousel>
          <Carousel.Item>
            <HotProduct />
          </Carousel.Item>
          <Carousel.Item>
            <HotProduct />
          </Carousel.Item>
          <Carousel.Item>
            <HotProduct />
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '25px' }}>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center'}}>
          <Text title bold>Mais Produtos</Text>
        </div>

        <Row>
          <Col xs={12} lg={3} style={{ margin: '10px 0' }}>
            <Product onClick={() => handleProductClick()} />
          </Col>
          <Col xs={12} lg={3} style={{ margin: '10px 0' }}>
            <Product onClick={() => handleProductClick()}/>
          </Col>
          <Col xs={12} lg={3} style={{ margin: '10px 0' }}>
            <Product onClick={() => handleProductClick()}/>
          </Col>
          <Col xs={12} lg={3} style={{ margin: '10px 0' }}>
            <Product onClick={() => handleProductClick()}/>
          </Col>
        </Row>
      </div>

      <CSSTransition 
        in={productDetails}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <Details onClose={() => setProductDetails(false)}/>
      </CSSTransition>
    </div>
  );
}

export default App;

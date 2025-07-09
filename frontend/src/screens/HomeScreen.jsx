import { Row,Col,Container } from "react-bootstrap";
import "../products";
import products from "../products";
import Products from "../component/Products";
function HomeScreen() {
    return ( 
        <>
        <Container>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </Container>
        </>
     );
}

export default HomeScreen;
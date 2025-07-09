import { Link, useParams } from 'react-router-dom';
import products from '../products';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

function ProductScreen() {
  const { id: productId } = useParams();
  const product=products.find((p)=>p._id==productId)
  console.log(product);
  return (
   <>
   <Link className='btn btn-light my-3' to="/">
   Go Back
   </Link>
   <Row>
    <Col md={5}>
    <Image src={product.image} alt={product.name} fluid/>
    </Col>
    <Col md={4}>
    <ListGroup variant='flush'>
      <ListGroup.Item>
        
      </ListGroup.Item>
    </ListGroup>
    </Col>
    <Col md={3}>
    </Col>
   </Row>
   </>
  );
}

export default ProductScreen;
